"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { identity, heroMetrics } from "@/lib/content";

function useTyping(text: string, speed = 34, startDelay = 900) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const t = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setOut(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(t);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);
  return out;
}

export default function Hero() {
  const typed = useTyping(identity.tagline);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #0070bb, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative z-10 text-center max-w-5xl">
        <div className="fade-up mb-8 flex justify-center" style={{ animationDelay: "0.1s" }}>
          <div className="relative">
            <Image
              src={identity.photo}
              alt="Raaghav S.H"
              width={112}
              height={112}
              priority
              className="rounded-full w-24 h-24 sm:w-28 sm:h-28 object-cover border-2 border-accent/40"
            />
            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-success border-2 border-bg" title="Open to opportunities" />
          </div>
        </div>

        <h1
          className="fade-up font-[family-name:var(--font-heading)] font-bold tracking-tight text-6xl sm:text-8xl lg:text-9xl glow-blue"
          style={{ animationDelay: "0.25s" }}
        >
          {identity.name}
        </h1>

        <div
          className="fade-up mt-5 flex flex-wrap justify-center gap-x-3 gap-y-1 font-[family-name:var(--font-mono)] text-sm sm:text-base text-slate-300"
          style={{ animationDelay: "0.45s" }}
        >
          {identity.roles.map((r, i) => (
            <span key={r} className="flex items-center gap-3">
              {i > 0 && <span className="text-accent/60">·</span>}
              {r}
            </span>
          ))}
        </div>

        <p
          className="fade-up mt-8 min-h-[3.5rem] text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light"
          style={{ animationDelay: "0.6s" }}
        >
          {typed}
          <span className="caret text-accent">▌</span>
        </p>

        <div className="fade-up mt-10" style={{ animationDelay: "0.8s" }}>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full bg-primary/90 hover:bg-primary px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(56,189,248,0.6)]"
          >
            Explore <span className="text-accent">↓</span>
          </a>
        </div>

        <div
          className="fade-up mt-16 grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-3xl mx-auto"
          style={{ animationDelay: "1s" }}
        >
          {heroMetrics.map((m, i) => (
            <div
              key={m.label}
              className={`glass card-hover rounded-2xl px-4 py-5 ${
                i === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <div className="font-[family-name:var(--font-heading)] text-2xl sm:text-[1.7rem] font-bold text-accent">
                {m.value}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
