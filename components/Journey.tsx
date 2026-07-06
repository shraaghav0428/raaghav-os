"use client";

import { useState } from "react";
import { journey } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

// Vertical timeline: every chapter visible at a glance (era + title + hook),
// full story expands in place. Starts at age 10 — Hot Wheels.
export default function Journey() {
  const [open, setOpen] = useState<number | null>(3); // Machine Maze open by default

  return (
    <SectionShell
      id="about"
      index="01 · The Journey"
      title="It started with Hot Wheels."
      subtitle="Six chapters, one throughline: build the thing, make it work, make it faster."
    >
      <div className="relative">
        <div
          className="absolute left-[9px] sm:left-[130px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-primary/40 to-transparent"
          aria-hidden
        />
        <div className="space-y-3">
          {journey.map((j, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={j.era} delay={i * 60}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="relative w-full text-left flex gap-5 sm:gap-10 group"
                  aria-expanded={isOpen}
                >
                  {/* era column */}
                  <div className="hidden sm:block w-[104px] shrink-0 text-right pt-4">
                    <span className="font-[family-name:var(--font-mono)] text-[13px] text-accent">
                      {j.era}
                    </span>
                  </div>

                  {/* node */}
                  <span
                    className={`absolute left-[3px] sm:left-[124px] top-[22px] w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                      isOpen
                        ? "bg-accent border-accent shadow-[0_0_14px_rgba(56,189,248,0.8)]"
                        : "bg-bg border-slate-600 group-hover:border-accent"
                    }`}
                    aria-hidden
                  />

                  {/* card */}
                  <div
                    className={`glass spot rounded-2xl px-6 py-4 flex-1 ml-6 sm:ml-0 transition-colors duration-300 ${
                      isOpen ? "border-accent/40 bg-primary/10" : ""
                    }`}
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
