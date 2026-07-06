import { journey } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function Journey() {
  return (
    <SectionShell
      id="about"
      index="01 · Who I Am"
      title="Not a biography. A trajectory."
      subtitle="Engineer of workflows → marketplace PM → manufacturing platform builder → AI product builder. Each step made the next one inevitable."
    >
      <div className="relative">
        <div
          className="absolute left-[15px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent"
          aria-hidden
        />
        <div className="space-y-10">
          {journey.map((j, i) => (
            <Reveal key={j.era} delay={i * 80}>
              <div
                className={`relative flex flex-col sm:flex-row gap-4 sm:gap-10 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-[9px] sm:left-1/2 sm:-translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full bg-bg border-2 border-accent shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
                <div className="sm:w-1/2 pl-10 sm:pl-0 sm:px-10">
                  <div className={`glass card-hover rounded-2xl p-6 ${i % 2 === 1 ? "sm:text-right" : ""}`}>
                    <div className="font-[family-name:var(--font-mono)] text-xs text-accent tracking-widest">
                      {j.era}
                    </div>
                    <h3 className="mt-2 font-[family-name:var(--font-heading)] text-xl font-semibold">
                      {j.title}
                    </h3>
                    <div className="text-sm text-slate-400 mt-0.5">{j.org}</div>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-300 font-light sm:text-left">
                      {j.story}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
