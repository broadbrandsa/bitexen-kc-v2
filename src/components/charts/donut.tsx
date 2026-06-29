/**
 * Donut — a single-value ring chart for a headline percentage (e.g. "75% aged
 * 16–35"). The arc fills clockwise from the top.
 */
export function Donut({
  value,
  centerValue,
  centerLabel,
  caption,
  accent = "gold",
}: {
  value: number; // 0–100
  centerValue: string;
  centerLabel?: string;
  caption?: string;
  accent?: "gold" | "blue";
}) {
  const stroke = accent === "blue" ? "var(--bx-blue)" : "var(--kc-gold)";
  const r = 42;
  const c = 2 * Math.PI * r;
  const filled = (Math.min(100, Math.max(0, value)) / 100) * c;

  return (
    <div className="flex flex-col items-center rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/50 p-6 text-center">
      <div className="relative aspect-square w-40">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={r} fill="none" stroke="var(--kc-line)" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke={stroke}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${filled} ${c - filled}`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold tracking-tight" style={{ color: stroke }}>
            {centerValue}
          </span>
          {centerLabel ? (
            <span className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-[var(--kc-paper)]/70">
              {centerLabel}
            </span>
          ) : null}
        </div>
      </div>
      {caption ? <div className="mt-4 text-sm text-[var(--kc-paper)]/70">{caption}</div> : null}
    </div>
  );
}
