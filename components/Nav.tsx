"use client";

import { useEffect, useState } from "react";
import { navSections } from "@/lib/content";

export default function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* desktop */}
      <nav className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 glass-strong rounded-full px-2 py-1.5 items-center gap-0.5">
        {navSections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`px-3.5 py-1.5 rounded-full text-[13px] whitespace-nowrap transition-all duration-300 ${
              active === s.id
                ? "bg-primary/25 text-accent"
                : "text-slate-400 hover:text-ink hover:bg-white/5"
            }`}
          >
            {s.label}
          </a>
        ))}
      </nav>

      {/* mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 right-4 z-50 glass-strong rounded-full w-11 h-11 flex items-center justify-center text-accent"
        aria-label="Menu"
      >
        {open ? "✕" : "☰"}
      </button>
      {open && (
        <nav className="md:hidden fixed top-16 right-4 z-50 glass-strong rounded-2xl p-3 flex flex-col gap-1 fade-in">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className={`px-4 py-2 rounded-xl text-sm ${
                active === s.id ? "bg-primary/25 text-accent" : "text-slate-300"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
