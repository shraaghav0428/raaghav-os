"use client";

import { useEffect, useState } from "react";
import { journey, aiLab } from "@/lib/content";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a",
];

const TERMINAL_LINES = [
  "$ whoami",
  "raaghav — senior product manager",
  "  location: bangalore, india",
  "  uptime: 7+ years in product",
  "  kernel: systems-thinking v7.3",
  "  processes: 0→1 builds · AI products · chess · gym · compounding",
  "  patent: IN 202541011592 (+ global PCT)",
  "  status: open to meaningful problems",
  "$ _",
];

export function useEasterEggs() {
  const [terminal, setTerminal] = useState(false);
  const [jarvis, setJarvis] = useState(false);

  useEffect(() => {
    let typed = "";
    let konamiIdx = 0;

    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const inField = target.tagName === "INPUT" || target.tagName === "TEXTAREA";

      // konami
      if (e.key === KONAMI[konamiIdx]) {
        konamiIdx++;
        if (konamiIdx === KONAMI.length) {
          konamiIdx = 0;
          setJarvis((j) => !j);
        }
      } else {
        konamiIdx = e.key === KONAMI[0] ? 1 : 0;
      }

      // whoami
      if (inField) return;
      if (e.key === "Escape") {
        setTerminal(false);
        return;
      }
      if (e.key.length === 1) {
        typed = (typed + e.key.toLowerCase()).slice(-6);
        if (typed === "whoami") {
          setTerminal(true);
          typed = "";
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("jarvis-mode", jarvis);
  }, [jarvis]);

  return { terminal, setTerminal, jarvis };
}

export function Terminal({ onClose }: { onClose: () => void }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= TERMINAL_LINES.length) {
          clearInterval(interval);
          return c;
        }
        return c + 1;
      });
    }, 260);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[95] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 fade-in"
      onClick={onClose}
    >
      <div
        className="glass-strong rounded-2xl w-full max-w-xl p-6 font-[family-name:var(--font-mono)] text-[13px] leading-relaxed"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-danger/80" onClick={onClose} role="button" aria-label="Close terminal" />
          <span className="w-3 h-3 rounded-full bg-warning/80" />
          <span className="w-3 h-3 rounded-full bg-success/80" />
          <span className="ml-3 text-slate-500 text-xs">raaghav@os — zsh</span>
        </div>
        {TERMINAL_LINES.slice(0, count).map((l, i) => (
          <div key={i} className={l.startsWith("$") ? "text-success" : "text-slate-300"}>
            {l}
          </div>
        ))}
        <div className="mt-4 text-slate-600 text-[11px]">esc to close</div>
      </div>
    </div>
  );
}

export function LearningJourney({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[95] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="glass-strong rounded-3xl w-full max-w-2xl p-8 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="section-index">Hidden page unlocked</div>
        <h3 className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-bold">
          The Learning Journey
        </h3>
        <p className="mt-3 text-sm text-slate-300 font-light leading-relaxed">
          You clicked the orb five times — curiosity is the whole point. This is the map of
          where I&apos;ve been and what I&apos;m teaching myself next.
        </p>
        <div className="mt-6 space-y-3">
          {journey.map((j) => (
            <div key={j.era} className="flex gap-4 items-baseline">
              <span className="font-[family-name:var(--font-mono)] text-[11px] text-accent w-24 shrink-0">
                {j.era}
              </span>
              <span className="text-sm text-slate-200">{j.title}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-slate-700/50 pt-5">
          <div className="section-index !text-[10px] mb-3">Currently absorbing</div>
          <div className="flex flex-wrap gap-2">
            {aiLab.map((a) => (
              <span
                key={a.name}
                className="font-[family-name:var(--font-mono)] text-[11px] text-slate-300 bg-white/5 rounded-md px-2.5 py-1"
              >
                {a.name}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-7 rounded-full glass px-6 py-2.5 text-sm text-slate-200 hover:border-accent/50 transition-colors"
        >
          Back to the OS
        </button>
      </div>
    </div>
  );
}
