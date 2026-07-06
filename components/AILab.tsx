import { aiLab } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

const statusColor: Record<string, string> = {
  "Daily driver": "text-success",
  "In production": "text-success",
  Applied: "text-accent",
  "Learning deeply": "text-warning",
  Practicing: "text-warning",
  "Core thesis": "text-accent",
};

export default function AILab() {
  return (
    <SectionShell
      id="ailab"
      index="05 · AI Lab"
      title="The workshop."
      subtitle="What I'm learning, building and running in production right now. Updated as the experiments evolve."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {aiLab.map((a, i) => (
          <Reveal key={a.name} delay={(i % 3) * 80}>
            <div className="glass card-hover rounded-2xl p-6 h-full">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                  {a.name}
                </h3>
                <span
                  className={`font-[family-name:var(--font-mono)] text-[10.5px] uppercase tracking-wider ${
                    statusColor[a.status] ?? "text-slate-400"
                  }`}
                >
                  ● {a.status}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300 font-light leading-relaxed">
                {a.note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
