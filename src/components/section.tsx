import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { getSectionPosition } from "@/data/sections";
import { Reveal } from "@/components/reveal";

/** Sections that get the standout gradient treatment. */
const FEATURE_IDS = new Set(["why-kc", "business-case", "why-bitexen", "conclusion"]);

/**
 * Section — a top-level content block on the proposal.
 *
 * Renders a chapter ribbon (NN / total), an eyebrow, a heading and an optional
 * intro, followed by arbitrary children. Background tone alternates by registry
 * index (with a few feature sections) to give the long scroll visual rhythm,
 * and content reveals on scroll.
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

  const tone =
    id && FEATURE_IDS.has(id)
      ? "section-feature"
      : pos && pos.index % 2 === 1
        ? "section-muted"
        : "";

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-b border-[var(--kc-line)] py-20 md:py-28",
        tone,
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          {pos ? (
            <div className="mb-8 flex items-baseline gap-4">
              <span className="font-mono text-2xl font-bold tabular-nums leading-none text-[var(--kc-gold)]/80 md:text-3xl">
                {String(pos.index + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-[16px] uppercase tracking-[0.32em] text-[var(--kc-mute)]">
                / {String(pos.total).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 translate-y-[-4px] bg-gradient-to-r from-[var(--kc-gold)]/40 via-[var(--kc-line)] to-transparent" />
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
        </Reveal>

        <Reveal stagger className="mt-12">
          {children}
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Interstitial — a full-width pull-quote beat used between sections (the deck's
 * "thesis" / "pause" / "reminder" moments). Not part of the section registry.
 */
export function Interstitial({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-[var(--kc-line)] bg-[var(--kc-black)]/40 py-20 md:py-28">
      <Reveal className="mx-auto max-w-4xl px-6 text-center">
        <div className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[var(--kc-gold)]">
          {label}
        </div>
        <p className="mt-6 text-2xl font-medium leading-snug tracking-tight text-[var(--kc-paper)] md:text-3xl">
          {children}
        </p>
      </Reveal>
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
