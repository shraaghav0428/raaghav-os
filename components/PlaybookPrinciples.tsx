import { playbook, principles } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function PlaybookPrinciples() {
  return (
    <SectionShell
      id="playbook"
      index="06 · The Playbook"
      title="Nine positions I'll defend in any product review."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {playbook.map((p, i) => (
          <Reveal key={p.topic} delay={(i % 3) * 60}>
            <div className="glass spot rounded-2xl p-6 h-full">
              <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-accent">
                {String(i + 1).padStart(2, "0")} / {p.topic}
              </div>
              <p className="mt-3 text-[15px] text-slate-200 font-light leading-relaxed">
                {p.card}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* principles marquee */}
      <Reveal delay={120}>
        <div className="mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee-track gap-4 py-2">
            {[...principles, ...principles].map((p, i) => (
              <span
                key={i}
                className="glass rounded-full px-7 py-3 text-sm sm:text-base font-[family-name:var(--font-heading)] font-medium whitespace-nowrap"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
