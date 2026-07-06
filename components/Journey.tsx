"use client";

import { useEffect, useRef, useState } from "react";
import { journey } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

// Vertical timeline with a rocket that flies down the spine as you scroll.
// Chapters ignite as the ship passes them. Starts at age 10 — Hot Wheels.
export default function Journey() {
  const [open, setOpen] = useState<number | null>(3); // Machine Maze open by default
  const [progress, setProgress] = useState(0); // 0..1 through the timeline
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [litUpTo, setLitUpTo] = useState(-1);

  useEffect(() => {
    const onScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const r = track.getBoundingClientRect();
      const focus = window.innerHeight * 0.55; // ship rides just below center
      const p = Math.min(1, Math.max(0, (focus - r.top) / r.height));
      setProgress(p);
      // which chapters has the ship passed?
      const shipY = r.top + p * r.height;
      let lit = -1;
      itemRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top + 22 <= shipY) lit = i;
      });
      setLitUpTo(lit);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <SectionShell
      id="about"
      index="01 · The Journey"
      title="It started with Hot Wheels."
      subtitle="Six chapters, one throughline: build the thing, make it work, make it faster."
    >
      <div ref={trackRef} className="relative">
        {/* spine: dim base + lit trail behind the ship */}
        <div className="absolute left-[9px] sm:left-[130px] top-2 bottom-2 w-px bg-slate-800" aria-hidden />
        <div
          className="absolute left-[9px] sm:left-[130px] top-2 w-px bg-gradient-to-b from-accent/20 via-accent to-accent2 shadow-[0_0_12px_rgba(56,189,248,0.7)]"
          style={{ height: `calc(${(progress * 100).toFixed(2)}% - 8px)` }}
          aria-hidden
        />

        {/* the ship */}
        <div
          className="absolute left-[9px] sm:left-[130px] -translate-x-1/2 z-10 pointer-events-none"
          style={{ top: `calc(${(progress * 100).toFixed(2)}% - 14px)` }}
          aria-hidden
        >
          <svg width="26" height="34" viewBox="0 0 26 34" className="rocket-ship rotate-180">
            {/* flame */}
            <path className="rocket-flame" d="M13 24 L9.5 33 Q13 30.5 16.5 33 Z" fill="url(#flameGrad)" />
            {/* body */}
            <path
              d="M13 1 Q19 8 18 17 L16 22 L10 22 L8 17 Q7 8 13 1 Z"
              fill="#0b1220"
              stroke="#38bdf8"
              strokeWidth="1.4"
            />
            <circle cx="13" cy="11" r="2.6" fill="#38bdf8" />
            {/* fins */}
            <path d="M8 16 L4 22 L9 21 Z" fill="#0070bb" />
            <path d="M18 16 L22 22 L17 21 Z" fill="#0070bb" />
            <defs>
              <linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="space-y-3">
          {journey.map((j, i) => {
            const isOpen = open === i;
            const lit = i <= litUpTo;
            return (
              <Reveal key={j.era} delay={i * 60}>
                <div ref={(el) => { itemRefs.current[i] = el; }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="relative w-full text-left flex gap-5 sm:gap-10 group"
                    aria-expanded={isOpen}
                  >
                    {/* era column */}
                    <div className="hidden sm:block w-[104px] shrink-0 text-right pt-4">
                      <span
                        className={`font-[family-name:var(--font-mono)] text-[13px] transition-colors duration-500 ${
                          lit ? "text-accent" : "text-slate-600"
                        }`}
                      >
                        {j.era}
                      </span>
                    </div>

                    {/* node — ignites when the ship passes */}
                    <span
                      className={`absolute left-[3px] sm:left-[124px] top-[22px] w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 ${
                        lit
                          ? "bg-accent border-accent shadow-[0_0_16px_rgba(56,189,248,0.9)]"
                          : "bg-bg border-slate-700 group-hover:border-accent"
                      }`}
                      aria-hidden
                    />

                    {/* card */}
                    <div
                      className={`glass spot rounded-2xl px-6 py-4 flex-1 ml-6 sm:ml-0 transition-all duration-500 ${
                        isOpen ? "border-accent/40 bg-primary/10" : ""
                      } ${lit ? "" : "opacity-60"}`}
                    >
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                        <span className="sm:hidden font-[family-name:var(--font-mono)] text-[11px] text-accent">
                          {j.era}
                        </span>
                        <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold">
                          {j.title}
                        </h3>
                        <span className="text-sm text-slate-500">{j.org}</span>
                      </div>
                      <p className="mt-1.5 text-[15px] text-slate-300 font-light">{j.hook}</p>
                      <div
                        className={`grid transition-all duration-500 ease-out ${
                          isOpen ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-sm text-slate-400 font-light leading-relaxed border-t border-slate-700/50 pt-3">
                            {j.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
