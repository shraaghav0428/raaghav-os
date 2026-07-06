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

    // hide until the decrypt begins, so the final text never flashes first
    setOut("");
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
    // authentic terminal decrypt: resolved text grows left→right with a short
    // scramble head just ahead of the cursor; the rest stays blank.
    let cursor = 0;
    const HEAD = 3;
    const interval = setInterval(() => {
      cursor++;
      if (cursor >= text.length + HEAD) {
        setOut(text);
        clearInterval(interval);
        return;
      }
      const resolved = text.slice(0, Math.max(0, Math.min(cursor, text.length)));
      let head = "";
      for (let i = cursor; i < Math.min(cursor + HEAD, text.length); i++) {
        head += text[i] === " " ? " " : CIPHER[Math.floor(Math.random() * CIPHER.length)];
      }
      setOut(resolved + head);
      if (cursor >= text.length) {
        setOut(text);
        clearInterval(interval);
      }
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
