import { type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getSectionPosition, getSectionTheme } from "@/data/sections";
import { Reveal } from "@/components/reveal";

/**
 * Section — a top-level content block on the proposal.
 *
 * Each section carries a background theme (white / dark / blue, from the
 * registry) which re-maps the palette so the long scroll alternates between
 * contexts with clear breaks. Renders a chapter ribbon, eyebrow, heading,
 * optional intro, then arbitrary children — all revealing on scroll.
 */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  image,
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Optional background photo (sits behind a dark overlay for legibility). */
  image?: { src: string; alt: string; position?: string };
}) {
  const pos = id ? getSectionPosition(id) : null;
  const idx = pos?.index ?? 0;
  const theme = id ? getSectionTheme(id) : "dark";

  // Palette wrapper (re-maps kc-* variables for light/blue themes).
  const themeClass = theme === "light" ? "theme-light" : theme === "blue" ? "theme-blue" : "";

  // Background treatment when there's no photo.
  const bgClass = image
    ? ""
    : theme === "light"
      ? "section-light"
      : theme === "blue"
        ? "section-blue"
        : idx % 2 === 1
          ? "section-muted"
          : "";

  // Ambient glow blobs only on dark sections (light = clean white; blue has its own gradient).
  const showGlows = !image && theme === "dark";

  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 overflow-hidden border-b border-[var(--kc-line)] py-20 md:py-28",
        themeClass,
        bgClass,
        className,
      )}
    >
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: image.position ?? "center" }}
          />
          {/* Dark overlay for text legibility (WCAG AA) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(21,23,26,0.92) 0%, rgba(21,23,26,0.80) 45%, rgba(10,10,10,0.92) 100%)",
            }}
          />
        </>
      ) : showGlows ? (
        /* Ambient glow blobs — alternate sides/colours by index for variety */
        <>
          <span
            aria-hidden="true"
            className={cn("glow", idx % 2 === 0 ? "glow-gold" : "glow-blue")}
            style={{ width: "38rem", height: "38rem", top: "-13rem", [idx % 2 === 0 ? "right" : "left"]: "-9rem" } as CSSProperties}
          />
          <span
            aria-hidden="true"
            className={cn("glow", idx % 2 === 0 ? "glow-blue" : "glow-gold")}
            style={{ width: "30rem", height: "30rem", bottom: "-14rem", [idx % 2 === 0 ? "left" : "right"]: "-8rem" } as CSSProperties}
          />
        </>
      ) : null}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Oversized ghost chapter number */}
        {pos && !image ? (
          <span aria-hidden="true" className="ghost-number" style={{ fontSize: "clamp(80px, 17vw, 210px)" }}>
            {String(pos.index + 1).padStart(2, "0")}
          </span>
        ) : null}

        <div className="relative" style={{ zIndex: 1 }}>
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
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--kc-gold)]/30 bg-[var(--kc-gold)]/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--kc-gold)]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--kc-gold)]" aria-hidden="true" />
                {eyebrow}
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--kc-paper)] md:text-4xl">
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
