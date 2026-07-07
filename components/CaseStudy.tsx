"use client";

import { useEffect, useRef, useState } from "react";
import { caseStudy, visionMap } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import VisionMap from "./VisionMap";

function AnimatedPipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(30);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const dur = 2200;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(30 + (730 - 30) * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center py-12 relative overflow-hidden rounded-3xl">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,112,187,0.35), transparent 70%)",
        }}
        aria-hidden
      />
      <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-3">
        RFQ Pipeline Value
      </div>
      <div className="font-[family-name:var(--font-heading)] text-6xl sm:text-8xl font-bold text-accent glow-blue tabular-nums">
        ₹{value} Cr
      </div>
      <div className="mt-3 text-sm text-slate-400">
        from ₹30 Cr · <span className="text-success font-medium">21x growth</span>
      </div>
      <div className="mt-7 h-1.5 max-w-md mx-auto rounded-full bg-slate-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ width: `${(value / 730) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default function CaseStudyStrip() {
  const [patentGlow, setPatentGlow] = useState(0);

  return (
    <SectionShell
      id="experience"
      index="02 · Case Study"
      title="Precision X. Zero to ₹730 Cr."
      subtitle={`${caseStudy.company} · ${caseStudy.role}`}
    >
      <Reveal>
        <div className="glass idle-shimmer rounded-3xl overflow-hidden">
          <AnimatedPipeline />
        </div>
      </Reveal>

      {/* outcome bento */}
      <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {caseStudy.outcomes.map((o, i) => {
          const isPatent = o.value === "Patent";
          return (
            <Reveal key={o.label} delay={(i % 3) * 60}>
              <button
                type="button"
                onClick={isPatent ? () => setPatentGlow((g) => g + 1) : undefined}
                title={isPatent ? caseStudy.patentNote : undefined}
                className={`glass spot rounded-2xl p-5 sm:p-6 w-full h-full text-left ${
                  isPatent ? "cursor-pointer" : "cursor-default"
                } ${isPatent && patentGlow ? "patent-glowing" : ""}`}
              >
                <div className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-accent">
                  <CountUp value={o.value} />
                </div>
                <div className="mt-1.5 text-[13px] text-slate-400 font-light">{o.label}</div>
              </button>
            </Reveal>
          );
        })}
      </div>

      {/* before → after */}
      <Reveal delay={80}>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div className="glass rounded-3xl p-7">
            <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-slate-500">
              Before
            </div>
            <ul className="mt-4 space-y-3">
              {caseStudy.beforeAfter.before.map((b) => (
                <li key={b} className="flex gap-3 text-[15px] text-slate-400 font-light leading-relaxed">
                  <span className="text-danger/70 mt-0.5 shrink-0">✕</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass spot rounded-3xl p-7 border-accent/20">
            <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-accent">
              After
            </div>
            <ul className="mt-4 space-y-3">
              {caseStudy.beforeAfter.after.map((a) => (
                <li key={a} className="flex gap-3 text-[15px] text-slate-200 font-light leading-relaxed">
                  <span className="text-success mt-0.5 shrink-0">✓</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* the vision map — the patented flow, RFQ to Delivery */}
      <Reveal delay={120}>
        <div className="mt-4 glass idle-shimmer rounded-3xl p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 px-2">
            <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-semibold">
              {visionMap.headline}
            </h3>
          </div>
          <p className="mt-2 px-2 text-sm text-slate-400 font-light max-w-3xl">
            {visionMap.sub}
          </p>
          <div className="mt-4">
            <VisionMap />
          </div>
        </div>
      </Reveal>

    </SectionShell>
  );
}
