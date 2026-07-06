"use client";

import { useEffect, useState } from "react";
import { sfx } from "@/lib/sfx";

// Sound toggle + global interaction sounds (hover ticks, click chirps, scroll drone).
export default function Controls() {
  const [sound, setSound] = useState(false);

  // restore pref
  useEffect(() => {
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
      // velocity in px/ms → continuous drone intensity
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

  const toggleSound = () => {
    const next = !sound;
    setSound(next);
    sfx.enabled = next;
    localStorage.setItem("sound", next ? "on" : "off");
    if (next) sfx.power();
  };

  return (
    <div className="fixed top-4 left-4 z-50">
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
