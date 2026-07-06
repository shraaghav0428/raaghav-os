"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { identity, heroMetrics } from "@/lib/content";
import DecryptedText from "./DecryptedText";
import Magnet from "./Magnet";
import CountUp from "./CountUp";

function useTyping(text: string, speed = 32, startDelay = 900) {
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
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-14 overflow-hidden"
    >
      <div className="aurora" aria-hidden />
      <div className="absolute inset-0 bg-grid" aria-hidden />

      <div className="relative z-10 text-center max-w-5xl">
        <div className="fade-up mb-7 flex justify-center" style={{ animationDelay: "0.1s" }}>
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-accent/20 blur-xl" aria-hidden />
            <Image
              src={identity.photo}
              alt="Raaghav S.H"
              width={104}
              height={104}
              priority
              className="relative rounded-full w-24 h-24 object-cover border border-accent/40"
            />
            <span
              className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-success border-2 border-bg"
              title="Open to opportunities"
            />
          </div>
        </div>

        <h1
          className="fade-up font-[family-name:var(--font-heading)] font-bold tracking-tight text-[17vw] sm:text-8xl lg:text-[9rem] leading-none glow-blue select-none"
          style={{ animationDelay: "0.25s" }}
        >
          <DecryptedText text={identity.name} speed={42} className="text-gradient" />
        </h1>

        <div
          className="fade-up mt-6 flex flex-wrap justify-center gap-x-3 gap-y-1 font-[family-name:var(--font-mono)] text-[13px] sm:text-[15px] text-slate-300"
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
          className="fade-up mt-7 min-h-[3.2rem] text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-light"
          style={{ animationDelay: "0.6s" }}
        >
          {typed}
          <span className="caret text-accent">▌</span>
        </p>

        <div className="fade-up mt-9 flex justify-center gap-4" style={{ animationDelay: "0.8s" }}>
          <Magnet>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-primary/90 hover:bg-primary px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(56,189,248,0.6)]"
            >
              Enter the OS <span className="text-accent">↓</span>
            </a>
          </Magnet>
        </div>

        <div
          className="fade-up mt-14 grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-3xl mx-auto"
          style={{ animationDelay: "1s" }}
        >
          {heroMetrics.map((m, i) => (
            <div
              key={m.label}
              className={`glass spot rounded-2xl px-4 py-5 ${
                i === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <div className="font-[family-name:var(--font-heading)] text-2xl sm:text-[1.6rem] font-bold text-accent">
                <CountUp value={m.value} />
              </div>
              <div className="mt-1 text-[10.5px] uppercase tracking-[0.16em] text-slate-400">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
