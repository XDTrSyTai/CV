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

    // Spacious luxury grid
    const gridSize = 44;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep obsidian canvas
      ctx.fillStyle = isDark ? '#090A0C' : '#F7F8FA';
      ctx.fillRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        // Ultra-fine micro coordinate points
        const baseDotColor = isDark ? 'rgba(148, 163, 184, 0.06)' : 'rgba(15, 23, 42, 0.04)';
        const activeDotColor = isDark ? 'rgba(147, 197, 253, 0.22)' : 'rgba(2, 132, 199, 0.16)';

        for (let x = 0; x < width; x += gridSize) {
          for (let y = 0; y < height; y += gridSize) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
              const factor = 1 - dist / 120;
              ctx.fillStyle = activeDotColor;
              ctx.fillRect(x - 0.5, y - 0.5, 1.5, 1.5);
            } else {
              ctx.fillStyle = baseDotColor;
              ctx.fillRect(x, y, 1, 1);
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
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default BackgroundCanvas;
