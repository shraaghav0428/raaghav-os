"use client";

import { useRef, useState } from "react";
import { sfx } from "@/lib/sfx";

const CHARGE_MS = 1150;

// "Enter the OS" boot handshake: click → charge ring + rising tone →
// ACCESS GRANTED → spark burst + boom → auto-scroll into the OS.
export default function BootButton() {
  const [state, setState] = useState<"idle" | "charging" | "granted">("idle");
  const [progress, setProgress] = useState(0);
  const btnRef = useRef<HTMLButtonElement>(null);

  const boot = () => {
    if (state !== "idle") return;
    setState("charging");
    const charge = sfx.chargeStart(CHARGE_MS / 1000);
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / CHARGE_MS);
      setProgress(t);
      if (t < 1) {
        requestAnimationFrame(tick);
        return;
      }
      charge.stop(true);
      setState("granted");
      // spark burst at the button
      const r = btnRef.current?.getBoundingClientRect();
      if (r) {
        window.dispatchEvent(
          new CustomEvent("os-spark", {
            detail: { x: r.left + r.width / 2, y: r.top + r.height / 2, count: 18 },
          })
        );
      }
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }, 650);
      setTimeout(() => {
        setState("idle");
        setProgress(0);
      }, 2400);
    };
    requestAnimationFrame(tick);
  };

  const R = 26;
  const CIRC = 2 * Math.PI * R;

  return (
    <button
      ref={btnRef}
      onClick={boot}
      disabled={state === "granted"}
      className={`relative inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ${
        state === "granted"
          ? "bg-success/20 border border-success/60 text-success"
          : "bg-primary/90 hover:bg-primary hover:shadow-[0_0_40px_-8px_rgba(56,189,248,0.6)]"
      }`}
    >
      {/* charge ring */}
      <span className="relative w-6 h-6 -ml-1">
        <svg viewBox="0 0 60 60" className="absolute inset-0 w-full h-full -rotate-90">
          <circle cx="30" cy="30" r={R} fill="none" stroke="rgba(248,250,252,0.18)" strokeWidth="5" />
          <circle
            cx="30"
            cy="30"
            r={R}
            fill="none"
            stroke={state === "granted" ? "#22c55e" : "#38bdf8"}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={CIRC * (1 - progress)}
          />
        </svg>
        <span
          className={`absolute inset-[7px] rounded-full transition-colors duration-300 ${
            state === "granted" ? "bg-success" : progress > 0 ? "bg-accent" : "bg-white/40"
          }`}
        />
      </span>
      <span className="font-[family-name:var(--font-mono)]">
        {state === "idle" && "Enter the OS"}
        {state === "charging" && "INITIALIZING…"}
        {state === "granted" && "ACCESS GRANTED ✓"}
      </span>
    </button>
  );
}
