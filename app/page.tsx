"use client";

import { useState } from "react";
import Boot from "@/components/Boot";
import ParticleField from "@/components/ParticleField";
import CursorBlob from "@/components/CursorBlob";
import SpotlightProvider from "@/components/SpotlightProvider";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Frameworks from "@/components/Frameworks";
import CaseStudyStrip from "@/components/CaseStudy";
import Products from "@/components/Products";
import AILab from "@/components/AILab";
import PlaybookPrinciples from "@/components/PlaybookPrinciples";
import Beyond from "@/components/Beyond";
import Orb from "@/components/Orb";
import { useEasterEggs, Terminal, LearningJourney } from "@/components/EasterEggs";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [secret, setSecret] = useState(false);
  const { terminal, setTerminal, jarvis } = useEasterEggs();

  return (
    <main className="relative">
      {!booted && <Boot onDone={() => setBooted(true)} />}
      <ParticleField />
      <CursorBlob />
      <SpotlightProvider />
      {jarvis && <div className="jarvis-scanline" aria-hidden />}
      <Nav />
      <Hero />
      <Journey />
      <CaseStudyStrip />
      <Products />
      <AILab />
      <Frameworks />
      <PlaybookPrinciples />
      <Beyond />
      <Orb onSecretUnlock={() => setSecret(true)} />
      {terminal && <Terminal onClose={() => setTerminal(false)} />}
      {secret && <LearningJourney onClose={() => setSecret(false)} />}
    </main>
  );
}
