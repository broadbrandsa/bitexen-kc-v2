import { type ComponentType, type ReactNode } from "react";
import { ArrowDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type IconType = ComponentType<{ className?: string }>;

/**
 * PillarCard — a titled card with an optional icon and a checklist body.
 * The recurring building block for the deck's multi-column slides.
 */
export function PillarCard({
  title,
  items,
  icon: Icon,
  accent = "gold",
  description,
}: {
  title: string;
  items?: string[];
  icon?: IconType;
  accent?: "gold" | "blue";
  description?: string;
}) {
  const accentText = accent === "blue" ? "text-[var(--bx-blue-soft)]" : "text-[var(--kc-gold)]";
  const accentBg = accent === "blue" ? "bg-[var(--bx-blue)]/12" : "bg-[var(--kc-gold)]/12";
  return (
    <div className="flex h-full flex-col rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/50 p-6 backdrop-blur transition duration-200 ease-out hover:-translate-y-1 hover:border-[var(--kc-gold)]/40 hover:shadow-lg hover:shadow-black/25">
      {Icon ? (
        <div className={cn("mb-4 inline-flex size-10 items-center justify-center rounded-lg", accentBg)}>
          <Icon className={cn("size-5", accentText)} />
        </div>
      ) : null}
      <h3 className="text-lg font-semibold tracking-tight text-[var(--kc-paper)]">{title}</h3>
      {description ? (
        <p className="mt-2 text-sm text-[var(--kc-paper)]/70">{description}</p>
      ) : null}
      {items && items.length > 0 ? (
        <ul className="mt-4 space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[15px] text-[var(--kc-paper)]/85">
              <Check className={cn("mt-1 size-4 shrink-0", accentText)} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

/**
 * FlowChain — a vertical sequence of labelled steps connected by down-arrows.
 * Used for the deck's flywheel / value-cycle / roadmap diagrams.
 */
export function FlowChain({
  steps,
  loop = false,
  accent = "gold",
}: {
  steps: { label: string; sub?: string }[];
  loop?: boolean;
  accent?: "gold" | "blue";
}) {
  const accentText = accent === "blue" ? "text-[var(--bx-blue-soft)]" : "text-[var(--kc-gold)]";
  const accentBorder = accent === "blue" ? "border-[var(--bx-blue)]/40" : "border-[var(--kc-gold)]/40";
  return (
    <div className="mx-auto flex max-w-xl flex-col items-stretch">
      {steps.map((step, i) => (
        <div key={step.label} className="flex flex-col items-center">
          <div
            className={cn(
              "w-full rounded-xl border bg-[var(--kc-charcoal)]/60 px-6 py-4 text-center backdrop-blur",
              accentBorder,
            )}
          >
            <div className="text-base font-semibold text-[var(--kc-paper)]">{step.label}</div>
            {step.sub ? <div className="mt-1 text-sm text-[var(--kc-paper)]/65">{step.sub}</div> : null}
          </div>
          {i < steps.length - 1 || loop ? (
            <ArrowDown className={cn("my-2 size-5", accentText)} />
          ) : null}
        </div>
      ))}
      {loop ? (
        <div className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--kc-mute)]">
          …and the cycle repeats
        </div>
      ) : null}
    </div>
  );
}

/** Stat — a large value with a small caption, for headline metrics. */
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/50 p-6 text-center transition duration-200 ease-out hover:-translate-y-1 hover:border-[var(--kc-gold)]/40 hover:shadow-lg hover:shadow-black/25">
      <div className="text-4xl font-bold tracking-tight text-[var(--kc-gold)] md:text-5xl">{value}</div>
      <div className="mt-2 text-sm text-[var(--kc-paper)]/70">{label}</div>
    </div>
  );
}

/** SimpleList — a gold-checked bullet list with no card chrome. */
export function SimpleList({ items, accent = "gold" }: { items: string[]; accent?: "gold" | "blue" }) {
  const accentText = accent === "blue" ? "text-[var(--bx-blue-soft)]" : "text-[var(--kc-gold)]";
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[16px] text-[var(--kc-paper)]/85">
          <Check className={cn("mt-1 size-4 shrink-0", accentText)} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Grid — responsive auto-fitting wrapper for pillar cards. */
export function Grid({ cols = 3, children }: { cols?: 2 | 3 | 4; children: ReactNode }) {
  const map = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  } as const;
  return <div className={cn("grid grid-cols-1 gap-5", map[cols])}>{children}</div>;
}
