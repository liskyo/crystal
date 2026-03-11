import React, { useEffect, useRef } from 'react';

const StarrySky: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number; deltaAlpha: number }[] = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.1,
        vx: 0,
        vy: 0,
        alpha: Math.random(),
        deltaAlpha: (Math.random() * 0.02) + 0.005
      });
    }

    const shootingStars: { x: number; y: number; length: number; speed: number; angle: number; opacity: number; active: boolean }[] = [];

    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width * 1.5,
        y: -50,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 10 + 5,
        angle: Math.PI / 4, // 45 degrees
        opacity: 1,
        active: true
      });
    };

    let animationFrameId: number;

    const render = () => {
      // Create a mystic deep night blue background
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#0a0a0b');
      gradient.addColorStop(1, '#1e1b4b');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw and animate stars
      stars.forEach(star => {
        star.alpha += star.deltaAlpha;
        if (star.alpha <= 0 || star.alpha >= 1) {
          star.deltaAlpha = -star.deltaAlpha;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.alpha)})`;
        ctx.fill();
        ctx.closePath();
      });

      // Randomly spawn shooting stars
      if (Math.random() < 0.01 && shootingStars.filter(s => s.active).length < 2) {
        createShootingStar();
      }

      // Draw and animate shooting stars
      shootingStars.forEach(star => {
        if (!star.active) return;

        star.x -= Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.01;

        if (star.opacity <= 0 || star.y > height || star.x < 0) {
          star.active = false;
        }

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x + Math.cos(star.angle) * star.length, star.y - Math.sin(star.angle) * star.length);
        ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(0, star.opacity)})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.closePath();

        // Star head glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, star.opacity)})`;
        ctx.fill();
        ctx.closePath();
      });

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none"
    />
  );
};

export default StarrySky;
