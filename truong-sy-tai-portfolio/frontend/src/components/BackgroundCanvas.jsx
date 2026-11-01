import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const BackgroundCanvas = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const isDarkRef = useRef(isDark);
  isDarkRef.current = isDark;

  const themeProgressRef = useRef(isDark ? 1 : 0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false
    };

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
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    const gridSize = 44;

    const render = () => {
      // Clear canvas without opaque background fill so the underlying CSS background transitions smoothly
      ctx.clearRect(0, 0, width, height);

      // Smoothly interpolate theme colors across frames without sudden jumps
      const targetTheme = isDarkRef.current ? 1 : 0;
      themeProgressRef.current += (targetTheme - themeProgressRef.current) * 0.15;
      const progress = themeProgressRef.current;

      if (!prefersReducedMotion) {
        // High-performance batched dot rendering
        const r = Math.round(15 + (148 - 15) * progress);
        const g = Math.round(23 + (163 - 23) * progress);
        const b = Math.round(42 + (184 - 42) * progress);
        const a = (0.04 + (0.06 - 0.04) * progress).toFixed(3);
        const baseDotColor = `rgba(${r}, ${g}, ${b}, ${a})`;

        if (!mouse.active) {
          // Fast-path: mouse not moving, single fillStyle batch draw for entire grid
          ctx.fillStyle = baseDotColor;
          for (let x = 0; x < width; x += gridSize) {
            for (let y = 0; y < height; y += gridSize) {
              ctx.fillRect(x, y, 1, 1);
            }
          }
        } else {
          // Interactive path: calculate distance only when mouse is active
          const ar = Math.round(37 + (147 - 37) * progress);
          const ag = Math.round(99 + (197 - 99) * progress);
          const ab = Math.round(235 + (253 - 235) * progress);
          const aa = (0.16 + (0.22 - 0.16) * progress).toFixed(3);
          const activeDotColor = `rgba(${ar}, ${ag}, ${ab}, ${aa})`;

          for (let x = 0; x < width; x += gridSize) {
            for (let y = 0; y < height; y += gridSize) {
              const dx = x - mouse.x;
              const dy = y - mouse.y;
              const distSq = dx * dx + dy * dy;

              if (distSq < 14400) { // 120 * 120
                ctx.fillStyle = activeDotColor;
                ctx.fillRect(x - 0.5, y - 0.5, 1.5, 1.5);
              } else {
                ctx.fillStyle = baseDotColor;
                ctx.fillRect(x, y, 1, 1);
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []); // Run once! Never tear down or reallocate memory on theme toggle

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default BackgroundCanvas;
