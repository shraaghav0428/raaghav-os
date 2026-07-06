import { products } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";

// Bento gallery: two flagship tiles, four compact tiles. Tagline-first, minimal copy.
export default function Products() {
  const large = products.filter((p) => p.size === "large");
  const small = products.filter((p) => p.size !== "large");

  return (
    <SectionShell
      id="products"
      index="03 · Products"
      title="Shipped. Not slideware."
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {large.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <div className="glass spot rounded-3xl p-8 h-full flex flex-col min-h-[280px]">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <span className="section-index !text-[10px]">{p.kind}</span>
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-success whitespace-nowrap">
                  ● {p.status}
                </span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold">
                {p.name}
              </h3>
              <p className="mt-3 text-lg text-slate-200 font-light leading-snug">
                {p.tagline}
              </p>
              <p className="mt-2 text-sm text-slate-400 font-light leading-relaxed flex-1">
                {p.detail}
              </p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-[family-name:var(--font-mono)] text-[10.5px] text-slate-400 bg-white/5 rounded-md px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-sm text-accent hover:text-ink transition-colors"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}

        <div className="sm:col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {small.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) * 60}>
              <div className="glass spot rounded-2xl p-5 h-full flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold leading-tight">
                    {p.name}
                  </h3>
                  <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-wider text-slate-500 whitespace-nowrap">
                    {p.status}
                  </span>
                </div>
                <p className="mt-2 text-[13px] text-slate-300 font-light flex-1">
                  {p.tagline}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-[family-name:var(--font-mono)] text-[9.5px] text-slate-400 bg-white/5 rounded px-1.5 py-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-3 text-[12px]">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-ink transition-colors"
                    >
                      Live ↗
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-ink transition-colors"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
