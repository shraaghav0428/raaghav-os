"use client";

import { useEffect, useState } from "react";
import { sfx } from "@/lib/sfx";

// Theme (dark/light) + sound toggles, wired to localStorage.
// Also owns the global sound event listeners (hover ticks, click chirps, scroll whoosh).
export default function Controls() {
  const [light, setLight] = useState(false);
  const [sound, setSound] = useState(false);

  // restore prefs
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setLight(true);
      document.documentElement.classList.add("light");
    }
    if (localStorage.getItem("sound") === "on") {
      setSound(true);
      sfx.enabled = true;
    }
  }, []);

  // global interaction sounds (delegated)
  useEffect(() => {
    let lastTick = 0;
    let lastWhoosh = 0;
    let lastScrollY = 0;

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest?.("a, button, .spot");
      if (!t) return;
      const now = performance.now();
      if (now - lastTick < 90) return;
      lastTick = now;
      sfx.tick();
    };
    const onClick = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest?.("a, button");
      if (!t) return;
      sfx.click();
    };
    const onScroll = () => {
      const now = performance.now();
      const dt = Math.max(now - lastWhoosh, 1);
      const dy = Math.abs(window.scrollY - lastScrollY);
      lastScrollY = window.scrollY;
      lastWhoosh = now;
      // velocity in px/ms → continuous wind intensity
      sfx.scroll(Math.min((dy / dt) * 1.4, 2));
    };

    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("click", onClick, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  const toggleSound = () => {
    const next = !sound;
    setSound(next);
    sfx.enabled = next;
    localStorage.setItem("sound", next ? "on" : "off");
    if (next) sfx.power();
  };

  return (
    <div className="fixed top-4 left-4 z-50 flex gap-2">
      <button
        onClick={toggleTheme}
        aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
        title={light ? "Dark mode" : "Light mode"}
        className="glass-strong rounded-full w-11 h-11 flex items-center justify-center text-accent hover:border-accent/50 transition-colors text-lg"
      >
        {light ? "☾" : "☀"}
      </button>
      <button
        onClick={toggleSound}
        aria-label={sound ? "Mute sound" : "Enable sound"}
        title={sound ? "Sound on" : "Sound off"}
        className={`glass-strong rounded-full w-11 h-11 flex items-center justify-center transition-colors text-base ${
          sound ? "text-accent" : "text-slate-500"
        } hover:border-accent/50`}
      >
        {sound ? "♪" : "∅"}
      </button>
    </div>
  );
}
