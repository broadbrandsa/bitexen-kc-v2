import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { getSectionPosition } from "@/data/sections";

/**
 * Section — a top-level content block on the proposal.
 *
 * Renders a chapter ribbon (NN / total), an eyebrow, a heading and an optional
 * intro, followed by arbitrary children. The anchor `id` is used by the side
 * navigation and reading progress.
 */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const pos = id ? getSectionPosition(id) : null;

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-b border-[var(--kc-line)] py-20 md:py-28",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        {pos ? (
          <div className="mb-10 flex items-center gap-3 text-[16px]">
            <span className="font-mono uppercase tracking-[0.32em] text-[var(--kc-gold)]">
              {String(pos.index + 1).padStart(2, "0")}
              <span className="text-[var(--kc-mute)]"> / {String(pos.total).padStart(2, "0")}</span>
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-[var(--kc-gold)]/40 via-[var(--kc-line)] to-transparent" />
          </div>
        ) : null}

        <div className="max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-gold)]">
            {eyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--kc-paper)] md:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 text-lg text-[var(--kc-paper)]/75">{intro}</p>
          ) : null}
        </div>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

/**
 * KeyTakeaway — the recurring gold-accented callout that closes each section
 * of the source deck.
 */
export function KeyTakeaway({ children }: { children: ReactNode }) {
  return (
    <div className="mt-12 flex items-start gap-4 rounded-xl border border-[var(--kc-gold)]/30 bg-[var(--kc-gold)]/[0.06] p-6">
      <span className="mt-0.5 shrink-0 text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--kc-gold)]">
        Key&nbsp;takeaway
      </span>
      <p className="text-lg font-medium leading-snug text-[var(--kc-paper)]">
        {children}
      </p>
    </div>
  );
}
