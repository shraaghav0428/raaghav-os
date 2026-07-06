import { playbook, principles } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function PlaybookPrinciples() {
  return (
    <SectionShell
      id="playbook"
      index="06 · Playbook"
      title="Knowledge cards, not blog posts."
      subtitle="The condensed operating manual. Nine topics, nine positions I'll defend in any product review."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {playbook.map((p, i) => (
          <Reveal key={p.topic} delay={(i % 3) * 70}>
            <div className="glass card-hover rounded-2xl p-6 h-full">
              <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-accent">
                {String(i + 1).padStart(2, "0")} · {p.topic}
              </div>
              <p className="mt-3 text-[15px] text-slate-200 font-light leading-relaxed">
                {p.card}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150}>
        <div className="mt-16">
          <div className="section-index mb-6">07 · Principles</div>
          <div className="flex flex-wrap gap-3">
            {principles.map((p) => (
              <span
                key={p}
                className="glass card-hover rounded-full px-6 py-3 text-sm sm:text-base font-[family-name:var(--font-heading)] font-medium"
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
