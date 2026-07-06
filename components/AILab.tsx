import { aiLab, aiLabNote } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

const live = new Set(["daily driver", "in production", "daily", "applied — this site"]);

export default function AILab() {
  return (
    <SectionShell
      id="ailab"
      index="04 · AI Lab"
      title="The workshop is always on."
      subtitle={aiLabNote}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {aiLab.map((a, i) => (
          <Reveal key={a.name} delay={(i % 4) * 60}>
            <div className="glass spot rounded-2xl px-5 py-5 h-full">
              <div className="flex items-center gap-2">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    live.has(a.status) ? "bg-success" : "bg-warning"
                  }`}
                />
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-slate-500">
                  {a.status}
                </span>
              </div>
              <h3 className="mt-2.5 font-[family-name:var(--font-heading)] text-base sm:text-lg font-semibold">
                {a.name}
              </h3>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
