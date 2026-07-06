"use client";

import { useEffect, useRef, useState } from "react";
import { caseStudy } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

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
        from ₹34 Cr · <span className="text-success font-medium">21x in under 3 years</span>
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

const tabs = ["Problem", "Vision", "Solution", "Challenges", "Lessons"] as const;
type Tab = (typeof tabs)[number];

export default function CaseStudyStrip() {
  const [tab, setTab] = useState<Tab>("Problem");
  const [patentGlow, setPatentGlow] = useState(0);

  return (
    <SectionShell
      id="experience"
      index="02 · Case Study"
      title="Precision X. Zero to ₹730 Cr."
      subtitle={`${caseStudy.company} · ${caseStudy.role}`}
    >
      <Reveal>
        <div className="glass rounded-3xl overflow-hidden">
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

      {/* story tabs — one block, no text walls */}
      <Reveal delay={100}>
        <div className="mt-4 glass rounded-3xl p-7 sm:p-9">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-4 py-2 text-[13px] transition-all duration-300 border ${
                  tab === t
                    ? "bg-primary/25 border-accent/50 text-ink"
                    : "border-slate-700/50 text-slate-400 hover:text-ink"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div key={tab} className="mt-6 fade-in min-h-[7rem]">
            {tab === "Problem" && (
              <p className="text-base sm:text-lg text-slate-200 font-light max-w-3xl leading-relaxed">
                {caseStudy.problem}
              </p>
            )}
            {tab === "Vision" && (
              <p className="text-base sm:text-lg text-slate-200 font-light max-w-3xl leading-relaxed">
                {caseStudy.vision}
              </p>
            )}
            {tab === "Solution" && (
              <p className="text-base sm:text-lg text-slate-200 font-light max-w-3xl leading-relaxed">
                {caseStudy.solution}
              </p>
            )}
            {tab === "Challenges" && (
              <ul className="grid sm:grid-cols-2 gap-3 max-w-4xl">
                {caseStudy.challenges.map((c) => (
                  <li key={c} className="flex gap-3 text-[15px] text-slate-300 font-light">
                    <span className="text-warning mt-0.5">▹</span>
                    {c}
                  </li>
                ))}
              </ul>
            )}
            {tab === "Lessons" && (
              <div className="space-y-3 max-w-3xl">
                {caseStudy.lessons.map((l) => (
                  <p
                    key={l}
                    className="text-lg sm:text-xl text-slate-200 font-[family-name:var(--font-heading)]"
                  >
                    “{l}”
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
