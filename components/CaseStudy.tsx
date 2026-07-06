"use client";

import { useEffect, useRef, useState } from "react";
import { caseStudy } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

function AnimatedPipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(34);

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
          setValue(Math.round(34 + (730 - 34) * eased));
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
    <div ref={ref} className="text-center py-10">
      <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-slate-500 mb-3">
        RFQ Pipeline Value
      </div>
      <div className="font-[family-name:var(--font-heading)] text-5xl sm:text-7xl font-bold text-accent glow-blue tabular-nums">
        ₹{value} Cr
      </div>
      <div className="mt-3 text-sm text-slate-400">
        ₹34 Cr → ₹730 Cr · <span className="text-success">21x in under 3 years</span>
      </div>
      <div className="mt-6 h-1.5 max-w-md mx-auto rounded-full bg-slate-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ width: `${(value / 730) * 100}%` }}
        />
      </div>
    </div>
  );
}

const blocks = [
  { label: "Problem", body: caseStudy.problem },
  { label: "Vision", body: caseStudy.vision },
  { label: "Solution", body: caseStudy.solution },
] as const;

export default function CaseStudyStrip() {
  const [patentGlow, setPatentGlow] = useState(0);

  return (
    <SectionShell
      id="experience"
      index="03 · Experience"
      title="Precision X — a case study in 0→1."
      subtitle={`${caseStudy.company} · ${caseStudy.role}`}
    >
      <Reveal>
        <div className="glass rounded-3xl overflow-hidden">
          <AnimatedPipeline />
        </div>
      </Reveal>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {blocks.map((b, i) => (
          <Reveal key={b.label} delay={i * 90}>
            <div className="glass card-hover rounded-2xl p-6 h-full">
              <div className="section-index">{b.label}</div>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-300 font-light">
                {b.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="mt-6 glass rounded-2xl p-6">
          <div className="section-index">Challenges</div>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3">
            {caseStudy.challenges.map((c) => (
              <li key={c} className="flex gap-3 text-[15px] text-slate-300 font-light">
                <span className="text-warning mt-0.5">▹</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {caseStudy.outcomes.map((o, i) => {
          const isPatent = o.label.includes("patent");
          return (
            <Reveal key={o.label} delay={i * 70}>
              <button
                type="button"
                onClick={isPatent ? () => setPatentGlow((g) => g + 1) : undefined}
                className={`glass card-hover rounded-2xl p-6 w-full text-left ${
                  isPatent ? "cursor-pointer" : "cursor-default"
                } ${isPatent && patentGlow ? "patent-glowing" : ""}`}
              >
                <div className="font-[family-name:var(--font-heading)] text-xl font-bold text-accent">
                  {o.value}
                </div>
                <div className="mt-1.5 text-sm text-slate-400 font-light">{o.label}</div>
              </button>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120}>
        <div className="mt-6 glass rounded-2xl p-6 border-l-2 border-l-accent/60">
          <div className="section-index">Lessons</div>
          <div className="mt-4 space-y-3">
            {caseStudy.lessons.map((l) => (
              <p key={l} className="text-[15px] text-slate-300 font-light italic">
                “{l}”
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
