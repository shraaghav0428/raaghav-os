"use client";

import { useState } from "react";
import { frameworks } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function Frameworks() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <SectionShell
      id="thinking"
      index="02 · How I Think"
      title="Frameworks, not buzzwords."
      subtitle="Skills lists say nothing. These are the mental models I actually use — each one earned on a real product. Click any card."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {frameworks.map((f, i) => {
          const open = openIdx === i;
          return (
            <Reveal key={f.title} delay={(i % 4) * 70}>
              <button
                onClick={() => setOpenIdx(open ? null : i)}
                className={`glass card-hover rounded-2xl p-5 text-left w-full transition-all duration-500 ${
                  open ? "border-accent/50 bg-primary/10" : ""
                }`}
                aria-expanded={open}
              >
                <div className="text-accent text-2xl font-[family-name:var(--font-mono)]">
                  {f.icon}
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-heading)] text-lg font-semibold">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-400 font-light">{f.summary}</p>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    open ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[13.5px] leading-relaxed text-slate-300 border-t border-slate-700/60 pt-3">
                      {f.detail}
                    </p>
                  </div>
                </div>
                <div className="mt-3 font-[family-name:var(--font-mono)] text-[11px] text-accent/70">
                  {open ? "− close" : "+ expand"}
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
