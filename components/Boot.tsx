"use client";

import { useEffect, useState } from "react";

const BOOT_LINES = [
  "RAAGHAV OS v2.0",
  "loading product memory…",
  "mounting 7+ years of experience…",
  "calibrating systems thinking…",
  "AI assistant online.",
];

export default function Boot({ onDone }: { onDone: () => void }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("booted")) {
      onDone();
      return;
    }
    const interval = setInterval(() => {
      setLineIdx((i) => {
        if (i >= BOOT_LINES.length - 1) {
          clearInterval(interval);
          setTimeout(() => setLeaving(true), 450);
          setTimeout(() => {
            sessionStorage.setItem("booted", "1");
            onDone();
          }, 1100);
          return i;
        }
        return i + 1;
      });
    }, 420);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-bg flex items-center justify-center transition-opacity duration-700 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-72 sm:w-96">
        <div className="w-14 h-14 rounded-full orb-core mx-auto mb-8" />
        <div className="font-[family-name:var(--font-mono)] text-xs text-slate-400 space-y-2">
          {BOOT_LINES.slice(0, lineIdx + 1).map((l, i) => (
            <div key={i} className="fade-in">
              <span className="text-accent mr-2">▸</span>
              {l}
            </div>
          ))}
        </div>
        <div className="mt-6 h-px bg-slate-800 overflow-hidden rounded">
          <div className="h-full bg-gradient-to-r from-primary to-accent boot-bar" />
        </div>
      </div>
    </div>
  );
}
