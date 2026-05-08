import { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-14">
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">{eyebrow}</span>
      )}
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-balance">{title}</h2>
      {children && <p className="mt-4 text-muted-foreground text-lg leading-relaxed text-balance">{children}</p>}
    </div>
  );
}
