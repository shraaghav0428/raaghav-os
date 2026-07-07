"use client";

import { useState } from "react";
import { frameworks, principles } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

// Belief on the card, real story behind it. Every story is from an actual interview answer.
export default function Frameworks() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <SectionShell
      id="thinking"
      index="05 · How I Think"
      title="Frameworks, not buzzwords."
      subtitle="Eight beliefs — each one paid for with a real decision. Open the receipts."
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {frameworks.map((f, i) => {
          const open = openIdx === i;
          return (
            <Reveal key={f.title} delay={(i % 4) * 60}>
              <button
                onClick={() => setOpenIdx(open ? null : i)}
                className={`glass spot rounded-2xl p-5 text-left w-full h-full transition-colors duration-500 ${
                  open ? "border-accent/50 bg-primary/10" : ""
                }`}
                aria-expanded={open}
              >
                <div className="flex items-center justify-between">
                  <span className="text-accent text-xl font-[family-name:var(--font-mono)]">
                    {f.icon}
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-slate-600">
                    {open ? "− story" : "+ story"}
                  </span>
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-heading)] text-base sm:text-lg font-semibold">
                  {f.title}
                </h3>
                <p className="mt-1 text-[13px] text-slate-400 font-light">{f.summary}</p>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    open ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[13px] leading-relaxed text-slate-300 border-t border-slate-700/60 pt-3">
                      {f.story}
                    </p>
                  </div>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      {/* principles marquee — the distilled version of everything above */}
      <Reveal delay={120}>
        <div className="mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee-track gap-4 py-2">
            {[...principles, ...principles].map((p, i) => (
              <span
                key={i}
                className="glass rounded-full px-7 py-3 text-sm sm:text-base font-[family-name:var(--font-heading)] font-medium whitespace-nowrap"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
