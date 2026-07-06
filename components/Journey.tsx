"use client";

import { useState } from "react";
import { journey } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

// Compact interactive timeline: one line per era, detail on demand.
export default function Journey() {
  const [active, setActive] = useState(2); // default: Machine Maze

  const j = journey[active];

  return (
    <SectionShell
      id="about"
      index="01 · The Journey"
      title="Five chapters. One direction."
    >
      {/* era selector */}
      <Reveal>
        <div className="flex flex-wrap gap-2">
          {journey.map((item, i) => (
            <button
              key={item.era}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm transition-all duration-300 border ${
                active === i
                  ? "bg-primary/25 border-accent/50 text-ink"
                  : "glass border-transparent text-slate-400 hover:text-ink"
              }`}
            >
              <span className="font-[family-name:var(--font-mono)] text-[11px] text-accent mr-2">
                {item.era}
              </span>
              {item.title}
            </button>
          ))}
        </div>
      </Reveal>

      {/* active chapter */}
      <Reveal delay={100}>
        <div key={active} className="mt-8 glass spot rounded-3xl p-8 sm:p-10 fade-in">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-5">
            <span className="font-[family-name:var(--font-mono)] text-accent text-sm">
              {j.era}
            </span>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold">
              {j.title}
              <span className="text-slate-500 font-normal text-lg sm:text-xl"> · {j.org}</span>
            </h3>
          </div>
          <p className="mt-5 text-lg sm:text-xl text-slate-200 font-light max-w-3xl">
            {j.hook}
          </p>
          <p className="mt-3 text-[15px] text-slate-400 font-light max-w-3xl leading-relaxed">
            {j.detail}
          </p>

          {/* progress dots */}
          <div className="mt-8 flex items-center gap-2">
            {journey.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === active ? "w-10 bg-accent" : "w-4 bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
