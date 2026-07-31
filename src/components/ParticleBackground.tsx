import { useEffect, useRef } from "react";

type Particle = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  phase: number;
  size: number;
  alpha: number;
  drift: number;
};

const PARTICLE_COLORS = ["118, 185, 255", "70, 132, 255", "255, 255, 255"];

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const pointer = {
      x: -1000,
      y: -1000,
      active: false,
    };
    let particles: Particle[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const createParticles = () => {
      const count = Math.min(
        width < 768 ? 28 : 54,
        Math.max(22, Math.floor((width * height) / 28000)),
      );
      particles = Array.from({ length: count }, () => {
        const baseX = Math.random() * width;
        const baseY = Math.random() * height;

        return {
          baseX,
          baseY,
          x: baseX,
          y: baseY,
          phase: Math.random() * Math.PI * 2,
          size: Math.random() * 1.25 + 0.55,
          alpha: Math.random() * 0.28 + 0.16,
          drift: Math.random() * 16 + 10,
        };
      });
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";

      particles.forEach((particle, index) => {
        const speed = time * 0.00018;
        let targetX = particle.baseX + Math.sin(speed + particle.phase) * particle.drift;
        let targetY =
          particle.baseY + Math.cos(speed * 1.35 + particle.phase) * (particle.drift * 0.55);

        if (pointer.active) {
          const dx = targetX - pointer.x;
          const dy = targetY - pointer.y;
          const distance = Math.hypot(dx, dy);
          const radius = width < 768 ? 115 : 155;

          if (distance > 0 && distance < radius) {
            const force = (1 - distance / radius) * (width < 768 ? 42 : 58);
            targetX += (dx / distance) * force;
            targetY += (dy / distance) * force;
          }
        }

        const easing = reducedMotion ? 1 : 0.055;
        particle.x += (targetX - particle.x) * easing;
        particle.y += (targetY - particle.y) * easing;

        const color = PARTICLE_COLORS[index % PARTICLE_COLORS.length];
        context.beginPath();
        context.fillStyle = `rgba(${color}, ${particle.alpha})`;
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      });

      context.globalCompositeOperation = "source-over";

      if (!reducedMotion) {
        frame = window.requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    resize();
    draw(0);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-80"
      aria-hidden="true"
    />
  );
}
