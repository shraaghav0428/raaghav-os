"use client";

import { useEffect, useRef } from "react";

type Spark = { x: number; y: number; a: number; born: number };

// Particle burst at every click point — canvas overlay, zero layout impact.
export default function ClickSpark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let sparks: Spark[] = [];
    const DUR = 450;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const burst = (x: number, y: number, count: number) => {
      const now = performance.now();
      for (let i = 0; i < count; i++) {
        sparks.push({ x, y, a: (Math.PI * 2 * i) / count + Math.random() * 0.4, born: now });
      }
    };
    const onClick = (e: MouseEvent) => burst(e.clientX, e.clientY, 9);
    const onOsSpark = (e: Event) => {
      const d = (e as CustomEvent).detail;
      burst(d.x, d.y, d.count ?? 16);
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = performance.now();
      sparks = sparks.filter((s) => now - s.born < DUR);
      for (const s of sparks) {
        const t = (now - s.born) / DUR;
        const ease = 1 - Math.pow(1 - t, 3);
        const dist = 10 + ease * 26;
        const len = 9 * (1 - t);
        const x1 = s.x + Math.cos(s.a) * dist;
        const y1 = s.y + Math.sin(s.a) * dist;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1 + Math.cos(s.a) * len, y1 + Math.sin(s.a) * len);
        ctx.strokeStyle = `rgba(56, 189, 248, ${1 - t})`;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.stroke();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    window.addEventListener("click", onClick, { passive: true });
    window.addEventListener("os-spark", onOsSpark);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", onClick);
      window.removeEventListener("os-spark", onOsSpark);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[80]" aria-hidden />
  );
}
