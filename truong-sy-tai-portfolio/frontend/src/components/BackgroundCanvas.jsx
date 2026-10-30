import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const BackgroundCanvas = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse tracking state
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
      active: false
    };

    // Parallax 3D field shift
    let targetParallaxX = 0;
    let targetParallaxY = 0;
    let currentParallaxX = 0;
    let currentParallaxY = 0;

    // Click burst shockwaves list
    const bursts = [];

    // Resize handler with devicePixelRatio support
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      // Parallax shift calculation relative to screen center
      targetParallaxX = (e.clientX - width / 2) * 0.05;
      targetParallaxY = (e.clientY - height / 2) * 0.05;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
      targetParallaxX = 0;
      targetParallaxY = 0;
    };

    const handleClick = (e) => {
      if (bursts.length > 5) bursts.shift();
      bursts.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 220,
        strength: 40,
        opacity: 0.9
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick, { passive: true });

    // Dynamic particle configuration
    const isMobile = window.innerWidth < 768;
    const particleCount = prefersReducedMotion ? 0 : (isMobile ? 36 : 70);
    const maxConnectionDistance = isMobile ? 90 : 130;

    // Particle color palettes
    const darkPalette = [
      { r: 56, g: 189, b: 248 },  // Sky blue
      { r: 34, g: 211, b: 238 },  // Cyan
      { r: 129, g: 140, b: 248 }, // Indigo
      { r: 255, g: 255, b: 255 }, // Starlight white
    ];

    const lightPalette = [
      { r: 2, g: 132, b: 199 },   // Deep Sky
      { r: 14, g: 165, b: 233 },  // Ocean Blue
      { r: 99, g: 102, b: 241 },  // Indigo
      { r: 15, g: 23, b: 42 },    // Slate Core
    ];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.baseSize = Math.random() * 2 + 1.2;
        this.size = this.baseSize;
        this.colorIndex = Math.floor(Math.random() * 4);
        this.phase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.02;
        this.depth = 0.3 + Math.random() * 0.7;
        this.renderX = this.x;
        this.renderY = this.y;
      }

      update() {
        this.phase += this.pulseSpeed;

        // Base velocity movement
        this.x += this.vx;
        this.y += this.vy;

        // Screen boundary bounce
        if (this.x < 0) {
          this.x = 0;
          this.vx = -this.vx;
        } else if (this.x > width) {
          this.x = width;
          this.vx = -this.vx;
        }

        if (this.y < 0) {
          this.y = 0;
          this.vy = -this.vy;
        } else if (this.y > height) {
          this.y = height;
          this.vy = -this.vy;
        }

        // Mouse interactive repulsion and flow
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius && dist > 0.001) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            // Repel smoothly
            this.x -= Math.cos(angle) * force * 3;
            this.y -= Math.sin(angle) * force * 3;
          }
        }

        // Click burst shockwaves influence
        for (let i = 0; i < bursts.length; i++) {
          const b = bursts[i];
          const dx = this.x - b.x;
          const dy = this.y - b.y;
          const dist = Math.hypot(dx, dy);
          const diff = Math.abs(dist - b.radius);

          if (diff < 30 && dist > 0.001) {
            const push = (1 - diff / 30) * (b.opacity * 4);
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * push;
            this.y += Math.sin(angle) * push;
          }
        }

        // Apply smooth parallax shift based on particle depth
        this.renderX = this.x + currentParallaxX * this.depth;
        this.renderY = this.y + currentParallaxY * this.depth;

        // Subtle gentle breathing size
        this.size = this.baseSize + Math.sin(this.phase) * 0.5;
      }

      draw() {
        const palette = isDark ? darkPalette : lightPalette;
        const color = palette[this.colorIndex];
        const alpha = isDark ? 0.65 + Math.sin(this.phase) * 0.2 : 0.75;

        ctx.beginPath();
        ctx.arc(this.renderX, this.renderY, Math.max(0.5, this.size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
        ctx.fill();

        // Delicate glow aura in dark mode
        if (isDark && this.size > 2) {
          ctx.beginPath();
          ctx.arc(this.renderX, this.renderY, this.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.12)`;
          ctx.fill();
        }
      }
    }

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connect particles and connect to mouse
    const drawConnections = () => {
      const palette = isDark ? darkPalette : lightPalette;

      for (let a = 0; a < particles.length; a++) {
        const pa = particles[a];

        // Connect to other nearby particles
        for (let b = a + 1; b < particles.length; b++) {
          const pb = particles[b];
          const dx = pa.renderX - pb.renderX;
          const dy = pa.renderY - pb.renderY;
          const dist = Math.hypot(dx, dy);

          if (dist < maxConnectionDistance) {
            const opacityRatio = 1 - dist / maxConnectionDistance;
            const lineOpacity = opacityRatio * (isDark ? 0.22 : 0.18);
            const color = palette[pa.colorIndex];

            ctx.beginPath();
            ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${lineOpacity})`;
            ctx.lineWidth = isDark ? 0.8 : 0.9;
            ctx.moveTo(pa.renderX, pa.renderY);
            ctx.lineTo(pb.renderX, pb.renderY);
            ctx.stroke();
          }
        }

        // Connect particles to mouse cursor when close
        if (mouse.active) {
          const mdx = pa.renderX - mouse.x;
          const mdy = pa.renderY - mouse.y;
          const mdist = Math.hypot(mdx, mdy);

          if (mdist < mouse.radius) {
            const mOpacity = (1 - mdist / mouse.radius) * (isDark ? 0.35 : 0.25);
            ctx.beginPath();
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${mOpacity})`
              : `rgba(2, 132, 199, ${mOpacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(pa.renderX, pa.renderY);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    // Render shockwave ripple rings
    const drawBursts = () => {
      for (let i = bursts.length - 1; i >= 0; i--) {
        const b = bursts[i];
        b.radius += 5.5;
        b.opacity = Math.max(0, 1 - b.radius / b.maxRadius);

        if (b.opacity <= 0.01 || b.radius >= b.maxRadius) {
          bursts.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.strokeStyle = isDark
          ? `rgba(56, 189, 248, ${b.opacity * 0.5})`
          : `rgba(2, 132, 199, ${b.opacity * 0.4})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    };

    // Main animation loop
    const animate = () => {
      // Smoothly interpolate 3D parallax drift towards target
      currentParallaxX += (targetParallaxX - currentParallaxX) * 0.05;
      currentParallaxY += (targetParallaxY - currentParallaxY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Update particle positions and compute parallax renders
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }

      // 2. Draw connections
      if (particleCount > 0) {
        drawConnections();
      }

      // 3. Draw shockwaves
      if (bursts.length > 0) {
        drawBursts();
      }

      // 4. Draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    if (particleCount > 0) {
      animate();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
};

export default BackgroundCanvas;
