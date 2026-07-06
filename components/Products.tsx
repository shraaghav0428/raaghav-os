import { products } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

export default function Products() {
  return (
    <SectionShell
      id="products"
      index="04 · Products"
      title="Things I've shipped."
      subtitle="From a ₹730 Cr B2B platform to AI tools built solo without writing traditional code. Problem first, always."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 90}>
            <div className="glass card-hover rounded-3xl p-7 h-full flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
                    {p.name}
                  </h3>
                  <div className="mt-1 text-sm text-accent">{p.kind}</div>
                </div>
                <span className="shrink-0 font-[family-name:var(--font-mono)] text-[10.5px] uppercase tracking-widest text-slate-400 border border-slate-700 rounded-full px-3 py-1">
                  {p.status}
                </span>
              </div>

              <dl className="mt-5 space-y-3 text-[14.5px] flex-1">
                <div>
                  <dt className="section-index !text-[10px]">Problem</dt>
                  <dd className="mt-1 text-slate-300 font-light">{p.problem}</dd>
                </div>
                <div>
                  <dt className="section-index !text-[10px]">Solution</dt>
                  <dd className="mt-1 text-slate-300 font-light">{p.solution}</dd>
                </div>
                <div>
                  <dt className="section-index !text-[10px]">Outcome</dt>
                  <dd className="mt-1 text-slate-300 font-light">{p.outcome}</dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-[family-name:var(--font-mono)] text-[11px] text-slate-400 bg-white/5 rounded-md px-2.5 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {(p.link || p.github) && (
                <div className="mt-5 flex gap-3">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:text-ink transition-colors"
                    >
                      Live demo ↗
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-400 hover:text-ink transition-colors"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
