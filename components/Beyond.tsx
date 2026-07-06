import { beyond, recommendations, identity } from "@/lib/content";
import SectionShell from "./SectionShell";
import Reveal from "./Reveal";
import Magnet from "./Magnet";

export default function Beyond() {
  return (
    <>
      <SectionShell
        id="beyond"
        index="07 · Beyond Work"
        title="Hobbies are frameworks too."
      >
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {beyond.map((b, i) => (
            <Reveal key={b.name} delay={(i % 3) * 60}>
              <div className="glass spot rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-accent">{b.icon}</span>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                    {b.name}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-slate-300 font-light leading-relaxed">
                  {b.why}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {!recommendations[0]?.placeholder && (
          <Reveal delay={120}>
            <div className="mt-16">
              <div className="section-index mb-6">What people say</div>
              <div className="grid md:grid-cols-2 gap-4">
                {recommendations.map((r) => (
                  <div key={r.name} className="glass spot rounded-2xl p-7">
                    <p className="text-[15px] text-slate-200 font-light leading-relaxed italic">
                      “{r.quote}”
                    </p>
                    <div className="mt-4 text-sm">
                      <span className="text-accent font-medium">{r.name}</span>
                      <span className="text-slate-500"> · {r.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </SectionShell>

      <section id="contact" className="relative z-10 max-w-4xl mx-auto px-6 pb-32 pt-4">
        <Reveal>
          <div className="glass-strong rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-[440px] h-[440px] rounded-full opacity-25 blur-[100px] pointer-events-none"
              style={{ background: "radial-gradient(circle, #0070bb, transparent 70%)" }}
              aria-hidden
            />
            <h2 className="relative font-[family-name:var(--font-heading)] text-3xl sm:text-5xl font-bold tracking-tight">
              Let&apos;s build something meaningful.
            </h2>
            <p className="relative mt-4 text-slate-400 font-light">
              Senior PM · AI-native · {identity.location}
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-4">
              <Magnet>
                <a
                  href={`mailto:${identity.email}`}
                  className="inline-block rounded-full bg-primary/90 hover:bg-primary px-7 py-3 text-sm font-medium transition-colors duration-300 hover:shadow-[0_0_40px_-8px_rgba(56,189,248,0.6)]"
                >
                  Email
                </a>
              </Magnet>
              <Magnet>
                <a
                  href={identity.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full glass px-7 py-3 text-sm text-slate-200 hover:border-accent/50 transition-colors duration-300"
                >
                  LinkedIn ↗
                </a>
              </Magnet>
              <Magnet>
                <a
                  href={identity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full glass px-7 py-3 text-sm text-slate-200 hover:border-accent/50 transition-colors duration-300"
                >
                  GitHub ↗
                </a>
              </Magnet>
            </div>
            <div className="relative mt-10 font-[family-name:var(--font-mono)] text-[11px] text-slate-600">
              RAAGHAV OS · built with Claude Code · psst — type{" "}
              <span className="text-slate-400">whoami</span>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
