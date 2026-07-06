"use client";

import { useEffect, useRef, useState } from "react";

const CIPHER = "!<>-_\\/[]{}—=+*^?#░▒▓ABCDEF0123456789";

// Text resolves from scrambled cipher characters when it enters the viewport.
export default function DecryptedText({
  text,
  className = "",
  speed = 28,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [out, setOut] = useState(text);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        setStarted(true);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    // each character locks in after `lockAt` frames; unlocked ones keep scrambling
    const lockAt = text.split("").map((_, i) => i * 1.6 + 4);
    const interval = setInterval(() => {
      frame++;
      let done = true;
      const next = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          if (frame >= lockAt[i]) return ch;
          done = false;
          return CIPHER[Math.floor(Math.random() * CIPHER.length)];
        })
        .join("");
      setOut(next);
      if (done) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);

  // reserve exact final width to avoid layout shift; className goes on the
  // painted overlay so effects like background-clip gradients apply to it
  return (
    <span ref={ref} className="relative inline-block">
      <span className="invisible" aria-hidden>
        {text}
      </span>
      <span className={`absolute inset-0 ${className}`} aria-label={text}>
        {out}
      </span>
    </span>
  );
}
