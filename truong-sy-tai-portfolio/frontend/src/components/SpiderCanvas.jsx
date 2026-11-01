import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useSpider } from '../context/SpiderContext';

export const SpiderCanvas = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const { spiderActive } = useSpider();
  const isDarkRef = useRef(isDark);
  isDarkRef.current = isDark;

  useEffect(() => {
    if (!spiderActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let W = window.innerWidth;
    let H = window.innerHeight;
    let unit = 1;
    let spider = null;
    let lastTime = null;

    /* ==========================================================================
     * 1. CẤU HÌNH NHỆN — Inverse Kinematics & Phối màu theo Dark/Light Theme
     * ========================================================================== */
    const CONFIG = {
      // Chuyển động của thân
      followLerp: 0.04,
      wanderLerp: 0.015,
      followMaxSpeed: 240,
      wanderMaxSpeed: 65,
      accel: 6.0,
      turnRate: 4.8,
      maxTurnSpeed: 2.8,
      arriveRadius: 55,

      // Dáng đi của 8 chân
      moveThreshold: 22,
      idleThreshold: 6,
      hardThreshold: 45,
      stepTimeSlow: 0.45,
      stepTimeFast: 0.20,
      leadTime: 0.35,
      liftFold: 0.16,
      maxAirborne: 4,

      // Thân
      bodyRadius: 10,
      bodyStretch: 1.18,
    };

    /* ==========================================================================
     * 2. TIỆN ÍCH TOÁN HỌC
     * ========================================================================== */
    const TAU = Math.PI * 2;
    const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
    const lerp = (a, b, t) => a + (b - a) * t;
    const rand = (a, b) => a + Math.random() * (b - a);
    const smoothstep = (t) => {
      t = clamp(t, 0, 1);
      return t * t * (3 - 2 * t);
    };

    const angleDiff = (a, b) => {
      let d = (a - b) % TAU;
      if (d > Math.PI) d -= TAU;
      else if (d < -Math.PI) d += TAU;
      return d;
    };

    /* ==========================================================================
     * 3. BỐ CỤC 8 CHÂN
     * ========================================================================== */
    const LEG_SPECS = [
      { t: 0.14, angle: 44, reach: 70 },
      { t: 0.38, angle: 80, reach: 64 },
      { t: 0.62, angle: 114, reach: 66 },
      { t: 0.86, angle: 148, reach: 74 },
    ];
    const REST_RATIO = 0.68;

    /* ==========================================================================
     * 4. LEG — Một chân gồm 3 đốt, 2 khớp gấp khúc giải bằng IK
     * ========================================================================== */
    class Leg {
      constructor(sp, index, side) {
        this.spider = sp;
        this.index = index;
        this.side = side;
        this.spec = LEG_SPECS[index];

        this.hipLocal = { x: 0, y: 0 };
        this.restLocal = { x: 0, y: 0 };

        this.boneA = 0;
        this.boneB = 0;

        this.hip = { x: 0, y: 0 };
        this.rest = { x: 0, y: 0 };
        this.foot = { x: 0, y: 0 };
        this.from = { x: 0, y: 0 };

        this.j1 = { x: 0, y: 0 };
        this.j2 = { x: 0, y: 0 };
        this.tip = { x: 0, y: 0 };

        this.swinging = false;
        this.t = 0;
        this.duration = 0.5;
        this.slip = 0;
        this.cooldown = 0;
        this.bendSign = -side;
      }

      layout(u, outlinePoint) {
        const { t, angle, reach } = this.spec;
        const p = outlinePoint(t);
        this.hipLocal.x = p.x;
        this.hipLocal.y = p.y * this.side;

        const D = reach * u;
        const phi = (angle * Math.PI) / 180;
        this.restLocal.x = this.hipLocal.x + Math.cos(phi) * D;
        this.restLocal.y = this.hipLocal.y + Math.sin(phi) * D * this.side;

        const L = D / REST_RATIO;
        this.boneA = L * 0.28;
        this.boneB = L * 0.44;
      }

      placeAnchors(cos, sin) {
        const sp = this.spider;
        this.hip.x = sp.x + this.hipLocal.x * cos - this.hipLocal.y * sin;
        this.hip.y = sp.y + this.hipLocal.x * sin + this.hipLocal.y * cos;
        this.rest.x = sp.x + this.restLocal.x * cos - this.restLocal.y * sin;
        this.rest.y = sp.y + this.restLocal.x * sin + this.restLocal.y * cos;
      }

      beginSwing(speedNorm) {
        this.swinging = true;
        this.t = 0;
        this.cooldown = 0;
        this.from.x = this.foot.x;
        this.from.y = this.foot.y;
        this.duration =
          lerp(CONFIG.stepTimeSlow, CONFIG.stepTimeFast, speedNorm) * rand(0.92, 1.08);
      }

      advance(dt) {
        const sp = this.spider;
        this.t = Math.min(1, this.t + dt / this.duration);

        let tx = this.rest.x;
        let ty = this.rest.y;
        const speed = sp.speed;
        if (speed > 0.5) {
          const lead = Math.min(sp.leadMax, speed * CONFIG.leadTime);
          tx += Math.cos(sp.heading) * lead;
          ty += Math.sin(sp.heading) * lead;
        }

        const e = smoothstep(this.t);
        this.foot.x = lerp(this.from.x, tx, e);
        this.foot.y = lerp(this.from.y, ty, e);
        if (this.t >= 1) {
          this.swinging = false;
          this.cooldown = Math.max(0.08, this.duration * 0.4);
        }
      }

      solve() {
        const hx = this.hip.x;
        const hy = this.hip.y;
        let fx = this.foot.x;
        let fy = this.foot.y;

        if (this.swinging) {
          const fold = 1 - CONFIG.liftFold * Math.sin(Math.PI * this.t);
          fx = hx + (fx - hx) * fold;
          fy = hy + (fy - hy) * fold;
        }

        const a = this.boneA;
        const b = this.boneB;
        let dx = fx - hx;
        let dy = fy - hy;
        let D = Math.hypot(dx, dy);
        if (D < 1e-6) {
          dx = 1;
          dy = 0;
          D = 1;
        }
        const ux = dx / D;
        const uy = dy / D;

        D = clamp(D, Math.abs(2 * a - b) + 0.5, 2 * a + b - 0.01);
        const cosA = clamp((D * D + 4 * a * a - b * b) / (4 * a * D), -1, 1);
        const sinA = Math.sqrt(1 - cosA * cosA);

        const nx = -uy * this.bendSign;
        const ny = ux * this.bendSign;

        const tipX = hx + ux * D;
        const tipY = hy + uy * D;
        const j1x = hx + ux * (a * cosA) + nx * (a * sinA);
        const j1y = hy + uy * (a * cosA) + ny * (a * sinA);

        this.j1.x = j1x;
        this.j1.y = j1y;
        this.j2.x = hx + tipX - j1x;
        this.j2.y = hy + tipY - j1y;
        this.tip.x = tipX;
        this.tip.y = tipY;
      }
    }

    /* ==========================================================================
     * 5. SPIDER — Thân lục giác, bộ điều phối dáng đi tetrapod
     * ========================================================================== */
    class Spider {
      constructor(x, y, u) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.speed = 0;
        this.heading = -Math.PI / 2;

        this.legs = [];
        this.sides = { '1': [], '-1': [] };
        for (const side of [-1, 1]) {
          for (let i = 0; i < LEG_SPECS.length; i++) {
            const leg = new Leg(this, i, side);
            this.legs.push(leg);
            this.sides[side].push(leg);
          }
        }
        this.setScale(u);
      }

      setScale(u) {
        this.unit = u;
        this.R = CONFIG.bodyRadius * u;
        this.moveThr = CONFIG.moveThreshold * u;
        this.idleThr = CONFIG.idleThreshold * u;
        this.hardThr = CONFIG.hardThreshold * u;
        this.leadMax = this.moveThr * 0.75;

        for (const leg of this.legs) {
          leg.layout(u, (t) => this.outlinePoint(t));
        }
        this.syncAnchors();
        for (const leg of this.legs) {
          leg.foot.x = leg.rest.x;
          leg.foot.y = leg.rest.y;
          leg.swinging = false;
          leg.cooldown = 0;
          leg.solve();
        }
      }

      hexVertex(j, scale = 1) {
        const ang = (j * Math.PI) / 3;
        return {
          x: Math.cos(ang) * this.R * CONFIG.bodyStretch * scale,
          y: Math.sin(ang) * this.R * scale,
        };
      }

      outlinePoint(t) {
        const v = [0, 1, 2, 3].map((j) => this.hexVertex(j));
        const len = [0, 1, 2].map((i) =>
          Math.hypot(v[i + 1].x - v[i].x, v[i + 1].y - v[i].y)
        );
        let d = clamp(t, 0, 1) * (len[0] + len[1] + len[2]);
        for (let i = 0; i < 3; i++) {
          if (d <= len[i] || i === 2) {
            const f = d / len[i];
            return {
              x: lerp(v[i].x, v[i + 1].x, f),
              y: lerp(v[i].y, v[i + 1].y, f),
            };
          }
          d -= len[i];
        }
      }

      syncAnchors() {
        const cos = Math.cos(this.heading);
        const sin = Math.sin(this.heading);
        for (const leg of this.legs) leg.placeAnchors(cos, sin);
      }

      canStep(leg) {
        const mine = this.sides[leg.side];
        const other = this.sides[-leg.side];
        const i = leg.index;
        if (other[i].swinging) return false;
        if (i > 0 && mine[i - 1].swinging) return false;
        if (i < mine.length - 1 && mine[i + 1].swinging) return false;
        return true;
      }

      update(dt, target, mode) {
        dt = Math.max(dt, 1e-4);
        const follow = mode === 'follow';
        const vMax = (follow ? CONFIG.followMaxSpeed : CONFIG.wanderMaxSpeed) * this.unit;

        // Xoay đầu và tiến về đích
        const dx = target.x - this.x;
        const dy = target.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 8 * this.unit) {
          const targetAngle = Math.atan2(dy, dx);
          const err = angleDiff(targetAngle, this.heading);
          const maxTurn = CONFIG.maxTurnSpeed * dt;
          const turn = clamp(
            err * (1 - Math.exp(-CONFIG.turnRate * dt)),
            -maxTurn,
            maxTurn
          );
          this.heading += turn;
        }

        const currentErr =
          dist > 8 * this.unit ? angleDiff(Math.atan2(dy, dx), this.heading) : 0;
        const alignment =
          dist > 8 * this.unit ? Math.max(0, Math.cos(currentErr)) : 1;

        const arriveDist = (follow ? 22 : CONFIG.arriveRadius) * this.unit;
        const slowDown = smoothstep(clamp(dist / arriveDist, 0, 1));
        const targetSpeed = vMax * alignment * slowDown;

        const kv = 1 - Math.exp(-CONFIG.accel * dt);
        this.speed = lerp(this.speed, targetSpeed, kv);

        this.vx = Math.cos(this.heading) * this.speed;
        this.vy = Math.sin(this.heading) * this.speed;
        this.x += this.vx * dt;
        this.y += this.vy * dt;

        this.syncAnchors();

        for (const leg of this.legs) {
          if (leg.cooldown > 0) leg.cooldown -= dt;
          if (leg.swinging) leg.advance(dt);
        }

        const speedNorm = clamp(this.speed / vMax, 0, 1);
        const threshold = lerp(
          this.idleThr,
          this.moveThr,
          smoothstep(speedNorm / 0.35)
        );

        const cosH = Math.cos(this.heading);
        const sinH = Math.sin(this.heading);

        const candidates = [];
        for (const leg of this.legs) {
          const lx = leg.foot.x - leg.rest.x;
          const ly = leg.foot.y - leg.rest.y;
          const along = lx * cosH + ly * sinH;
          const perp = ly * cosH - lx * sinH;
          leg.slip = along > 0 ? Math.abs(perp) : Math.hypot(along, perp);

          if (!leg.swinging && leg.cooldown <= 0 && leg.slip > threshold) {
            candidates.push(leg);
          }
        }
        candidates.sort((p, q) => q.slip - p.slip);

        let airborne = this.legs.filter((l) => l.swinging).length;
        for (const leg of candidates) {
          const allowed = airborne < CONFIG.maxAirborne && this.canStep(leg);
          if (!allowed) continue;
          leg.beginSwing(speedNorm);
          airborne++;
        }

        for (const leg of this.legs) leg.solve();
      }

      draw(cContext, colors) {
        cContext.lineJoin = 'round';
        cContext.lineCap = 'round';

        // 1. Đường nối các đốt chân
        cContext.lineWidth = 1.3;
        for (const swinging of [false, true]) {
          cContext.strokeStyle = swinging ? colors.line : colors.lineDim;
          cContext.beginPath();
          for (const leg of this.legs) {
            if (leg.swinging !== swinging) continue;
            cContext.moveTo(leg.hip.x, leg.hip.y);
            cContext.lineTo(leg.j1.x, leg.j1.y);
            cContext.lineTo(leg.j2.x, leg.j2.y);
            cContext.lineTo(leg.tip.x, leg.tip.y);
          }
          cContext.stroke();
        }

        // 2. Thân lục giác
        this.drawBody(cContext, colors);

        // 3. Điểm nút hông và các khớp
        const nodeR = 1.8 * clamp(this.unit, 0.85, 1.2);
        cContext.fillStyle = colors.node;
        cContext.beginPath();
        for (const leg of this.legs) {
          for (const p of [leg.hip, leg.j1, leg.j2]) {
            cContext.moveTo(p.x + nodeR, p.y);
            cContext.arc(p.x, p.y, nodeR, 0, TAU);
          }
        }
        cContext.fill();

        // 4. Vòng tròn đầu mút mỗi chân
        cContext.strokeStyle = colors.node;
        cContext.fillStyle = colors.bodyFill;
        cContext.lineWidth = 1.2;
        for (const leg of this.legs) {
          const lift = leg.swinging ? Math.sin(Math.PI * leg.t) : 0;
          const r = (2.9 + 1.3 * lift) * clamp(this.unit, 0.85, 1.2);
          cContext.beginPath();
          cContext.arc(leg.tip.x, leg.tip.y, r, 0, TAU);
          cContext.fill();
          cContext.stroke();
        }
      }

      drawBody(cContext, colors) {
        cContext.save();
        cContext.translate(this.x, this.y);
        cContext.rotate(this.heading);

        // Thân ngoài
        this.hexPath(cContext, 1);
        cContext.fillStyle = colors.bodyFill;
        cContext.fill();
        cContext.strokeStyle = colors.line;
        cContext.lineWidth = 1.3;
        cContext.stroke();

        // Thân trong
        this.hexPath(cContext, 0.52);
        cContext.strokeStyle = colors.lineDim;
        cContext.lineWidth = 1;
        cContext.stroke();

        // Điểm nhấn hình thoi
        const R = this.R;
        cContext.beginPath();
        cContext.moveTo(R * 0.46, 0);
        cContext.lineTo(R * 0.14, R * 0.2);
        cContext.lineTo(-R * 0.18, 0);
        cContext.lineTo(R * 0.14, -R * 0.2);
        cContext.closePath();
        cContext.fillStyle = colors.accent;
        cContext.fill();

        cContext.restore();
      }

      hexPath(cContext, scale) {
        cContext.beginPath();
        for (let j = 0; j < 6; j++) {
          const v = this.hexVertex(j, scale);
          if (j === 0) cContext.moveTo(v.x, v.y);
          else cContext.lineTo(v.x, v.y);
        }
        cContext.closePath();
      }
    }

    /* ==========================================================================
     * 6. KHỞI TẠO & SỰ KIỆN TƯƠNG TÁC
     * ========================================================================== */
    const pointer = { x: W / 2, y: H / 2, inside: false };
    const wander = { x: W / 2, y: H / 2 };

    function pickWanderTarget() {
      const margin = Math.max(48, 100 * unit);
      const minDist = Math.min(W, H) * 0.3;
      for (let i = 0; i < 12; i++) {
        wander.x = rand(margin, Math.max(margin, W - margin));
        wander.y = rand(margin, Math.max(margin, H - margin));
        if (spider && Math.hypot(wander.x - spider.x, wander.y - spider.y) >= minDist) {
          break;
        }
      }
    }

    function handleResize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      unit = clamp(Math.min(W, H) / 820, 0.72, 1.35);

      if (spider) {
        spider.setScale(unit);
        spider.x = clamp(spider.x, 0, W);
        spider.y = clamp(spider.y, 0, H);
        spider.setScale(unit);
        pickWanderTarget();
      }
    }

    function onPointerMove(e) {
      if (
        e.clientX < 0 ||
        e.clientX > window.innerWidth ||
        e.clientY < 0 ||
        e.clientY > window.innerHeight
      ) {
        onLeave();
        return;
      }
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.inside = true;
    }

    function onLeave() {
      if (!pointer.inside) return;
      pointer.inside = false;
      pickWanderTarget();
    }

    handleResize();
    spider = new Spider(W * 0.5, H * 0.5, unit);
    pickWanderTarget();
    spider.heading = Math.atan2(wander.y - spider.y, wander.x - spider.x);
    spider.setScale(unit);

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', handleResize);

    /* ==========================================================================
     * 7. VÒNG LẶP RENDER (TRANSPARENT CHO WEBSITE)
     * ========================================================================== */
    function frame(now) {
      const dt =
        lastTime === null ? 1 / 60 : Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      let target;
      let mode;
      if (pointer.inside) {
        target = pointer;
        mode = 'follow';
      } else {
        if (
          Math.hypot(wander.x - spider.x, wander.y - spider.y) <
          CONFIG.arriveRadius * unit
        ) {
          pickWanderTarget();
        }
        target = wander;
        mode = 'wander';
      }

      spider.update(dt, target, mode);

      // Xoá canvas trong suốt để toàn bộ trang web hiển thị tự nhiên
      ctx.clearRect(0, 0, W, H);

      // Phối màu thích ứng theo Dark / Light mode
      const dark = isDarkRef.current;
      const themeColors = dark
        ? {
            line: '#E0E0E0',
            lineDim: '#7B818B',
            node: '#93C5FD',
            accent: '#FF5555',
            bodyFill: '#090A0C',
          }
        : {
            line: '#0F172A',
            lineDim: '#94A3B8',
            node: '#2563EB',
            accent: '#DC2626',
            bodyFill: '#FFFFFF',
          };

      spider.draw(ctx, themeColors);
      animationFrameId = requestAnimationFrame(frame);
    }

    animationFrameId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [spiderActive]);

  if (!spiderActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default SpiderCanvas;

