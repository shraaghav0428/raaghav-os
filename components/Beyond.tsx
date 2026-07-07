"use client";

import { useState } from "react";
import { beyond, recommendations, identity } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";
import Magnet from "./Magnet";
import { sfx } from "@/lib/sfx";

// app-logo style gradient badges per hobby
const BADGES: Record<string, string> = {
  Chess: "linear-gradient(135deg, #f59e0b, #b45309)",
  Investing: "linear-gradient(135deg, #22c55e, #15803d)",
  Gym: "linear-gradient(135deg, #ef4444, #b91c1c)",
  Veena: "linear-gradient(135deg, #a78bfa, #7c3aed)",
  Travel: "linear-gradient(135deg, #38bdf8, #0070bb)",
  Family: "linear-gradient(135deg, #fb923c, #ea580c)",
};

export default function Beyond() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <>
      <SectionShell
        id="beyond"
        index="07 · Beyond Work"
        title="Hobbies are frameworks too."
        subtitle="Flip a card. Every hobby trains something the day job needs."
      >
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {beyond.map((b, i) => {
            const isFlipped = flipped === i;
            return (
              <Reveal key={b.name} delay={(i % 3) * 60}>
                <button
                  className={`flip-card w-full h-56 sm:h-48 text-left ${isFlipped ? "flipped" : ""}`}
                  onClick={() => {
                    setFlipped(isFlipped ? null : i);
                    sfx.ping();
                  }}
                  aria-pressed={isFlipped}
                >
                  <span className="flip-inner">
                    {/* front */}
                    <span className="flip-face glass rounded-2xl p-6">
                      <span className="flex items-center gap-3">
                        <span
                          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl text-white shadow-lg shrink-0"
                          style={{ background: BADGES[b.name] ?? "linear-gradient(135deg, #38bdf8, #0070bb)" }}
                        >
                          {b.icon}
                        </span>
                        <span className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                          {b.name}
                        </span>
                      </span>
                      <span className="mt-3 block text-sm text-slate-300 font-light leading-relaxed">
                        {b.why}
                      </span>
                      <span className="absolute bottom-4 right-5 font-[family-name:var(--font-mono)] text-[10px] text-accent/60">
                        flip ⟳
                      </span>
                    </span>
                    {/* back */}
                    <span className="flip-face flip-back glass rounded-2xl p-5 sm:p-6 border-accent/30 bg-primary/10">
                      <span className="block text-[13px] sm:text-sm text-slate-200 font-light leading-relaxed">
                        {b.flip}
                      </span>
                      {b.link && (
                        <a
                          href={b.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="absolute bottom-4 left-6 text-[12px] text-accent hover:text-ink transition-colors"
                        >
                          {b.linkLabel ?? "Open ↗"}
                        </a>
                      )}
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        {!recommendations[0]?.placeholder && (
          <Reveal delay={120}>
            <div className="mt-16">
              <div className="section-index mb-6">What people say</div>
              <div className="grid md:grid-cols-2 gap-4">
                {recommendations.map((r) => (
                  <div key={r.name} className="glass spot rounded-2xl p-7">
                    <p className="text-[15px] text-slate-200 font-light leading-relaxed italic">
                      “{r.quote}”
                    </p>
                    <div className="mt-4 text-sm">
                      <span className="text-accent font-medium">{r.name}</span>
                      <span className="text-slate-500"> · {r.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </SectionShell>

      <section id="contact" className="relative z-10 max-w-4xl mx-auto px-6 pb-32 pt-4">
        <Reveal>
          <div className="glass-strong idle-shimmer rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-[440px] h-[440px] rounded-full opacity-25 blur-[100px] pointer-events-none"
              style={{ background: "radial-gradient(circle, #0070bb, transparent 70%)" }}
              aria-hidden
            />
            <h2 className="relative font-[family-name:var(--font-heading)] text-3xl sm:text-5xl font-bold tracking-tight">
              Let&apos;s build something meaningful.
            </h2>
            <p className="relative mt-4 text-slate-400 font-light">
              Senior PM · AI-native · {identity.location}
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-4">
              <Magnet>
                <a
                  href={`mailto:${identity.email}`}
                  className="inline-block rounded-full bg-primary/90 hover:bg-primary px-7 py-3 text-sm font-medium transition-colors duration-300 hover:shadow-[0_0_40px_-8px_rgba(56,189,248,0.6)]"
                >
                  Email
                </a>
              </Magnet>
              <Magnet>
                <a
                  href={identity.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full glass px-7 py-3 text-sm text-slate-200 hover:border-accent/50 transition-colors duration-300"
                >
                  LinkedIn ↗
                </a>
              </Magnet>
              <Magnet>
                <a
                  href={identity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full glass px-7 py-3 text-sm text-slate-200 hover:border-accent/50 transition-colors duration-300"
                >
                  GitHub ↗
                </a>
              </Magnet>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
