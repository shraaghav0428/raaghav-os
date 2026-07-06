"use client";

import { useEffect } from "react";

// One delegated listener drives the per-card spotlight (--mx/--my) and
// the magic-bento 3D tilt (--rx/--ry). Tilt resets on leave.
const MAX_TILT = 3.2; // degrees

export default function SpotlightProvider() {
  useEffect(() => {
    let tilted: HTMLElement | null = null;

    const reset = () => {
      if (!tilted) return;
      tilted.style.setProperty("--rx", "0deg");
      tilted.style.setProperty("--ry", "0deg");
      tilted = null;
    };

    const onMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(".spot");
      if (!(target instanceof HTMLElement)) {
        reset();
        return;
      }
      if (tilted && tilted !== target) reset();
      tilted = target;
      const r = target.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      target.style.setProperty("--mx", `${e.clientX - r.left}px`);
      target.style.setProperty("--my", `${e.clientY - r.top}px`);
      target.style.setProperty("--ry", `${(px - 0.5) * 2 * MAX_TILT}deg`);
      target.style.setProperty("--rx", `${-(py - 0.5) * 2 * MAX_TILT}deg`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      reset();
    };
  }, []);
  return null;
}
