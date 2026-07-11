"use client";

import Image from "next/image";
import { useState } from "react";
import { artifacts } from "@/lib/content";
import Reveal from "./Reveal";

// Proof, not claims: the product film, real UI screens (demo data), and rollout moments.
export default function ArtifactGallery() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  return (
    <>
      {/* the product film */}
      <Reveal delay={80}>
        <div className="mt-4 glass idle-shimmer rounded-3xl overflow-hidden">
          <video
            src={artifacts.film.src}
            poster={artifacts.film.poster}
            controls
            muted
            playsInline
            preload="none"
            className="w-full aspect-video object-cover"
          />
          <p className="px-6 py-4 text-sm text-slate-400 font-light">
            ▶ {artifacts.film.caption}
          </p>
        </div>
      </Reveal>

      {/* real screens */}
      <Reveal delay={100}>
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {artifacts.screens.map((s) => (
            <button
              key={s.src}
              onClick={() => setLightbox(s)}
              className="glass spot rounded-2xl overflow-hidden text-left group"
            >
              <Image
                src={s.src}
                alt={s.caption}
                width={700}
                height={394}
                className="w-full aspect-video object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <p className="px-4 py-3 text-[12px] text-slate-400 font-light leading-snug">
                {s.caption}
              </p>
            </button>
          ))}
        </div>
      </Reveal>

      {/* rollout photos */}
      <Reveal delay={120}>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {artifacts.photos.map((p) => (
            <button
              key={p.src}
              onClick={() => setLightbox(p)}
              className="glass spot rounded-2xl overflow-hidden text-left group"
            >
              <Image
                src={p.src}
                alt={p.caption}
                width={700}
                height={500}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <p className="px-4 py-3 text-[12px] text-slate-400 font-light leading-snug hidden sm:block">
                {p.caption}
              </p>
            </button>
          ))}
        </div>
      </Reveal>

      {/* lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[95] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10 fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label={lightbox.caption}
        >
          <div className="max-w-5xl w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lightbox.src} alt={lightbox.caption} className="w-full rounded-2xl" />
            <p className="mt-3 text-center text-sm text-slate-300 font-light">
              {lightbox.caption} <span className="text-slate-600 ml-2">· click anywhere to close</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
