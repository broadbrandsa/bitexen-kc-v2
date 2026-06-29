import { type ReactNode } from "react";

/**
 * Flywheel — a circular cycle diagram. Nodes are placed evenly around a dashed
 * ring with directional arrowheads showing the self-reinforcing loop, and an
 * optional label sits in the centre. Used for the deck's value / commercial /
 * participation flywheels.
 */
export function Flywheel({
  nodes,
  center,
  accent = "gold",
}: {
  nodes: string[];
  center?: ReactNode;
  accent?: "gold" | "blue";
}) {
  const stroke = accent === "blue" ? "var(--bx-blue)" : "var(--kc-gold)";
  const n = nodes.length;
  const R = 36; // node ring radius, in % of container (keeps 28%-wide nodes inside the box)

  // Positions (in %) for each node, starting at the top and going clockwise.
  const points = nodes.map((label, i) => {
    const angle = -90 + (i * 360) / n;
    const rad = (angle * Math.PI) / 180;
    return {
      label,
      x: 50 + R * Math.cos(rad),
      y: 50 + R * Math.sin(rad),
    };
  });

  // Arrowhead markers placed tangentially at the midpoint between nodes.
  const arrows = nodes.map((_, i) => {
    const angle = -90 + ((i + 0.5) * 360) / n;
    const rad = (angle * Math.PI) / 180;
    const rr = 34; // arrow ring radius (svg units, viewBox 100)
    return {
      x: 50 + rr * Math.cos(rad),
      y: 50 + rr * Math.sin(rad),
      rot: angle + 90, // tangent direction (clockwise)
    };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Ring + arrows */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="0.6"
          strokeDasharray="2 2.4"
        />
        {arrows.map((a, i) => (
          <path
            key={i}
            d="M -2.4 -1.7 L 0 0 L -2.4 1.7"
            fill="none"
            stroke={stroke}
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform={`translate(${a.x} ${a.y}) rotate(${a.rot})`}
          />
        ))}
      </svg>

      {/* Centre label */}
      {center ? (
        <div className="absolute left-1/2 top-1/2 flex aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/70 p-3 text-center text-[12px] font-semibold uppercase tracking-wider text-[var(--kc-paper)] backdrop-blur">
          {center}
        </div>
      ) : null}

      {/* Nodes */}
      {points.map((p, i) => (
        <div
          key={p.label}
          className="absolute flex w-[28%] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
        >
          <div className="w-full rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/80 px-3 py-2.5 text-center shadow-lg shadow-black/20 backdrop-blur">
            <span
              className="mb-1 block text-[10px] font-bold tabular-nums"
              style={{ color: stroke }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="block text-[12px] font-semibold leading-tight text-[var(--kc-paper)] md:text-[13px]">
              {p.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
