import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionShell({
  id,
  index,
  title,
  subtitle,
  children,
}: {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-32">
      <Reveal>
        <div className="section-index mb-3">
          {index} <span className="text-slate-600">/</span>
        </div>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl font-bold tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg font-light">
            {subtitle}
          </p>
        )}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
