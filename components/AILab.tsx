import { aiLab, aiLabNote } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";
import ToolMap from "./ToolMap";

const live = new Set(["daily driver", "in production", "daily", "applied — this site"]);

export default function AILab() {
  return (
    <SectionShell
      id="ailab"
      index="04 · AI Lab"
      title="The stack, connected."
      subtitle={aiLabNote}
    >
      {/* mind map of the toolchain */}
      <Reveal>
        <div className="glass idle-shimmer rounded-3xl p-4 sm:p-8">
          <ToolMap />
        </div>
      </Reveal>

      {/* live status chips */}
      <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {aiLab.map((a, i) => (
          <Reveal key={a.name} delay={(i % 4) * 60}>
            <div className="glass spot rounded-2xl px-5 py-4 h-full">
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
              <h3 className="mt-2 font-[family-name:var(--font-heading)] text-base font-semibold">
                {a.name}
              </h3>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
