import { Download, Coins, Network, ReceiptText, Server, Users } from "lucide-react";
import { Section, KeyTakeaway } from "@/components/section";
import { Grid, PillarCard, Stat } from "@/components/sections/primitives";

type Row = {
  m: number;
  users: number;
  volume: number;
  revenue: number;
  cost: number;
  pnl: number;
};

const MONTHLY: Row[] = [
  { m: 1, users: 120, volume: 105_000, revenue: 1_995, cost: 82_850, pnl: -80_855 },
  { m: 2, users: 600, volume: 525_000, revenue: 9_975, cost: 87_410, pnl: -77_435 },
  { m: 3, users: 1_200, volume: 1_050_000, revenue: 19_950, cost: 90_800, pnl: -70_850 },
  { m: 4, users: 4_200, volume: 3_675_000, revenue: 69_825, cost: 136_651, pnl: -66_826 },
  { m: 5, users: 8_400, volume: 7_350_000, revenue: 139_650, cost: 162_901, pnl: -23_251 },
  { m: 6, users: 12_000, volume: 10_500_000, revenue: 199_500, cost: 174_002, pnl: 25_498 },
  { m: 7, users: 24_000, volume: 21_000_000, revenue: 399_000, cost: 283_804, pnl: 115_196 },
  { m: 8, users: 36_000, volume: 31_500_000, revenue: 598_500, cost: 334_806, pnl: 263_694 },
  { m: 9, users: 48_000, volume: 42_000_000, revenue: 798_000, cost: 434_708, pnl: 363_292 },
  { m: 10, users: 72_000, volume: 63_000_000, revenue: 1_197_000, cost: 620_712, pnl: 576_288 },
  { m: 11, users: 96_000, volume: 84_000_000, revenue: 1_596_000, cost: 722_716, pnl: 873_284 },
  { m: 12, users: 120_000, volume: 105_000_000, revenue: 1_995_000, cost: 824_721, pnl: 1_170_279 },
];

const MILESTONES = [1, 3, 6, 9, 12];

function zar(n: number): string {
  const abs = Math.abs(n);
  const sign = n < 0 ? "−" : "";
  if (abs >= 1_000_000) return `${sign}R${(abs / 1_000_000).toFixed(abs % 1_000_000 === 0 ? 0 : 1)}M`;
  if (abs >= 1_000) return `${sign}R${Math.round(abs / 1_000)}k`;
  return `${sign}R${abs}`;
}

function compact(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}k`;
  return `${n}`;
}

/** P&L bar chart — monthly profit/(loss) across the 12-month model. */
function PnlChart() {
  const W = 880;
  const H = 320;
  const mL = 12;
  const mR = 12;
  const mT = 24;
  const mB = 34;
  const plotW = W - mL - mR;
  const plotH = H - mT - mB;

  const vmax = 1_240_000;
  const vmin = -120_000;
  const y = (v: number) => mT + (plotH * (vmax - v)) / (vmax - vmin);
  const y0 = y(0);

  const slot = plotW / MONTHLY.length;
  const barW = slot * 0.54;

  return (
    <figure className="rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/50 p-5">
      <figcaption className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--kc-mute)]">
          Monthly profit / (loss) · ZAR
        </span>
        <span className="flex items-center gap-4 text-[11px] text-[var(--kc-paper)]/70">
          <span className="flex items-center gap-1.5">
            <span className="inline-block size-2.5 rounded-sm bg-[var(--kc-gold)]" /> Profit
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block size-2.5 rounded-sm bg-[var(--fg-error-secondary,#f97066)]" style={{ background: "#f97066" }} /> Loss
          </span>
        </span>
      </figcaption>

      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Monthly profit and loss across twelve months, breaking even in month six">
        {/* zero baseline */}
        <line x1={mL} x2={W - mR} y1={y0} y2={y0} stroke="var(--kc-line)" strokeWidth={1} />

        {/* breakeven marker at month 6 */}
        {(() => {
          const i = 5; // month 6 (0-indexed)
          const x = mL + slot * i + slot / 2;
          return (
            <g>
              <line x1={x} x2={x} y1={mT} y2={H - mB} stroke="var(--kc-gold)" strokeWidth={1} strokeDasharray="3 4" opacity={0.5} />
              <text x={x + 4} y={mT + 10} fill="var(--kc-gold)" fontSize="11" fontWeight="600">
                Breakeven · M6
              </text>
            </g>
          );
        })()}

        {MONTHLY.map((d, i) => {
          const x = mL + slot * i + (slot - barW) / 2;
          const top = d.pnl >= 0 ? y(d.pnl) : y0;
          const h = Math.abs(y(d.pnl) - y0);
          const fill = d.pnl >= 0 ? "var(--kc-gold)" : "#f97066";
          return (
            <g key={d.m}>
              <rect x={x} y={top} width={barW} height={Math.max(h, 1)} rx={2} fill={fill} opacity={d.pnl >= 0 ? 0.92 : 0.85} />
              <text x={x + barW / 2} y={H - mB + 18} textAnchor="middle" fill="var(--kc-mute)" fontSize="11">
                M{d.m}
              </text>
            </g>
          );
        })}

        {/* end-value label */}
        <text x={W - mR} y={y(1_170_279) - 6} textAnchor="end" fill="var(--kc-paper)" fontSize="12" fontWeight="600">
          {zar(1_170_279)}
        </text>
      </svg>
    </figure>
  );
}

/** Revenue vs total cost across the 12 months, with the profitability crossover. */
function RevenueCostChart() {
  const W = 880;
  const H = 300;
  const mL = 12;
  const mR = 12;
  const mT = 16;
  const mB = 34;
  const plotW = W - mL - mR;
  const plotH = H - mT - mB;

  const vmax = 2_100_000;
  const n = MONTHLY.length;
  const x = (i: number) => mL + (plotW * i) / (n - 1);
  const y = (v: number) => mT + plotH * (1 - v / vmax);

  const line = (key: "revenue" | "cost") =>
    MONTHLY.map((d, i) => `${x(i)},${y(d[key])}`).join(" ");
  const area =
    `${x(0)},${y(0)} ` +
    MONTHLY.map((d, i) => `${x(i)},${y(d.revenue)}`).join(" ") +
    ` ${x(n - 1)},${y(0)}`;

  const crossoverX = x(5); // month 6

  return (
    <figure className="rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/50 p-5">
      <figcaption className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--kc-mute)]">
          Revenue vs total cost · ZAR
        </span>
        <span className="flex items-center gap-4 text-[11px] text-[var(--kc-paper)]/70">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-0.5 w-4 rounded bg-[var(--kc-gold)]" /> Revenue
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-0.5 w-4 rounded" style={{ background: "var(--bx-blue-soft)" }} /> Total cost
          </span>
        </span>
      </figcaption>

      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Revenue overtakes total cost in month six and accelerates away">
        <polygon points={area} fill="var(--kc-gold)" opacity={0.1} />
        <line x1={crossoverX} x2={crossoverX} y1={mT} y2={H - mB} stroke="var(--kc-gold)" strokeWidth={1} strokeDasharray="3 4" opacity={0.5} />
        <text x={crossoverX + 4} y={mT + 10} fill="var(--kc-gold)" fontSize="11" fontWeight="600">
          Revenue &gt; cost · M6
        </text>

        <polyline points={line("cost")} fill="none" stroke="var(--bx-blue-soft)" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
        <polyline points={line("revenue")} fill="none" stroke="var(--kc-gold)" strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />

        {MONTHLY.map((d, i) => (
          <text key={d.m} x={x(i)} y={H - mB + 18} textAnchor="middle" fill="var(--kc-mute)" fontSize="11">
            M{d.m}
          </text>
        ))}
        <text x={x(n - 1)} y={y(1_995_000) - 8} textAnchor="end" fill="var(--kc-gold)" fontSize="12" fontWeight="600">
          {zar(1_995_000)}
        </text>
      </svg>
    </figure>
  );
}

export function BusinessCase() {
  return (
    <Section
      id="business-case"
      eyebrow="Business Case"
      title="The unit economics at scale"
      intro="A worked 12-month model — the Bitexen MOSO digital-wallet business case — showing the transaction-led unit economics a Bitexen-powered digital wallet can reach at scale. Included as an indicative reference; the figures are not Kaizer Chiefs projections."
    >
      {/* Headline KPIs */}
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        <Stat value="120k" label="Active users by Month 12" />
        <Stat value="R105M" label="Monthly transaction volume (Month 12)" />
        <Stat value="R7.0M" label="Year-1 total revenue" />
        <Stat value="Month 6" label="Breakeven — P&L turns positive" />
      </div>

      {/* Trajectory charts */}
      <div className="mt-8 grid grid-cols-1 gap-6">
        <RevenueCostChart />
        <PnlChart />
      </div>

      {/* Assumptions / levers */}
      <h3 className="mt-12 text-lg font-semibold text-[var(--kc-paper)]">The levers behind the model</h3>
      <div className="mt-5">
        <Grid cols={3}>
          <PillarCard
            icon={Users}
            accent="blue"
            title="Distribution"
            items={["Opera Mini base: 6,000,000", "2% penetration target", "120,000 active users by Month 12"]}
          />
          <PillarCard
            icon={ReceiptText}
            accent="blue"
            title="Engagement"
            items={["1.75 transactions per user", "R500 average transaction size", "70% retention rate"]}
          />
          <PillarCard
            icon={Coins}
            accent="blue"
            title="Revenue model"
            items={["1% FX conversion fee", "R3 fixed withdrawal fee", "0.3% maker / taker fee"]}
          />
          <PillarCard
            icon={Network}
            accent="blue"
            title="Variable costs"
            items={["R10 customer verification", "R0.25 SMS OTP", "R0.30 Celo-chain withdrawal", "Working-capital funding"]}
          />
          <PillarCard
            icon={Server}
            accent="blue"
            title="Overheads"
            items={["R65,200 ongoing maintenance / month", "Server costs scaling with users"]}
          />
          <PillarCard
            icon={Coins}
            accent="blue"
            title="FX & Year-1 outcomes"
            items={["ZAR / USD at 16.3", "~R2.0M monthly revenue at Month 12", "~R3.1M Year-1 net P&L"]}
          />
        </Grid>
      </div>

      {/* Milestone table */}
      <h3 className="mt-12 text-lg font-semibold text-[var(--kc-paper)]">Trajectory at a glance</h3>
      <div className="mt-5 overflow-x-auto rounded-xl border border-[var(--kc-line)]">
        <table className="w-full border-collapse text-left text-[14px]">
          <thead>
            <tr className="bg-[var(--kc-charcoal)]/70">
              <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--kc-gold)]">
                Metric
              </th>
              {MILESTONES.map((m) => (
                <th key={m} className="px-5 py-3 text-right text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--kc-gold)]">
                  Month {m}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {([
              ["Active users", (d: Row) => compact(d.users)],
              ["Transaction volume", (d: Row) => zar(d.volume)],
              ["Revenue", (d: Row) => zar(d.revenue)],
              ["Total cost", (d: Row) => zar(d.cost)],
              ["Profit / (loss)", (d: Row) => zar(d.pnl)],
            ] as const).map(([label, fmt], idx) => (
              <tr key={label} className={idx % 2 === 0 ? "bg-[var(--kc-charcoal)]/20" : undefined}>
                <td className="border-t border-[var(--kc-line)] px-5 py-3 font-medium text-[var(--kc-paper)]">
                  {label}
                </td>
                {MILESTONES.map((m) => {
                  const d = MONTHLY.find((x) => x.m === m)!;
                  const isPnl = label === "Profit / (loss)";
                  const cls = isPnl
                    ? d.pnl >= 0
                      ? "text-[var(--kc-gold)]"
                      : "text-[#f97066]"
                    : "text-[var(--kc-paper)]/85";
                  return (
                    <td key={m} className={`border-t border-[var(--kc-line)] px-5 py-3 text-right tabular-nums ${cls}`}>
                      {fmt(d)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Download + note */}
      <div className="mt-8 flex flex-col gap-4 rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm font-semibold text-[var(--kc-paper)]">
            Source model — Bitexen MOSO Business Case (v2)
          </div>
          <p className="mt-1 text-sm text-[var(--kc-paper)]/65">
            Illustrative model for discussion. Figures require validation against
            Kaizer Chiefs supporter data before any commercial commitment.
          </p>
        </div>
        <a
          href="/documents/bitexen-moso-business-case-v2.xlsx"
          download
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--kc-gold)] px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-[var(--kc-black)] transition hover:bg-[var(--kc-gold-deep)]"
        >
          <Download className="size-4" />
          Download model (XLSX)
        </a>
      </div>

      <KeyTakeaway>
        In this model, transaction-led economics reach breakeven within six months and
        scale into a profitable engine inside the first year.
      </KeyTakeaway>
    </Section>
  );
}
