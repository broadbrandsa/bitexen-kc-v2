import { cn } from "@/lib/utils";

/**
 * Timeline — a vertical, numbered progression with a glowing gradient rail.
 * The final step is highlighted as the destination state.
 */
export function Timeline({ steps }: { steps: string[] }) {
  return (
    <ol className="relative mx-auto max-w-2xl space-y-4 before:absolute before:bottom-4 before:left-[15px] before:top-4 before:w-px before:bg-gradient-to-b before:from-[var(--kc-gold)]/70 before:via-[var(--kc-gold)]/30 before:to-[var(--bx-blue)]/50 before:content-['']">
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={s} className="relative flex items-center gap-5">
            <span
              className={cn(
                "relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border bg-[var(--kc-ink)] font-mono text-xs font-bold",
                last
                  ? "border-[var(--kc-gold)] text-[var(--kc-gold)] shadow-[0_0_18px_rgba(224,156,42,0.5)]"
                  : "border-[var(--kc-gold)]/40 text-[var(--kc-gold)]/80",
              )}
            >
              {i + 1}
            </span>
            <div className={cn("kc-card flex-1 px-5 py-4", last && "kc-card-gold kc-accent")}>
              <span
                className={cn(
                  "font-semibold text-[var(--kc-paper)]",
                  last ? "text-lg md:text-xl" : "text-base md:text-lg",
                )}
              >
                {s}
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
