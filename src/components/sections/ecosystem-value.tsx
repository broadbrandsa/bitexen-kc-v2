import { CalendarCheck, Megaphone, TrendingUp, Wallet } from "lucide-react";
import { Section, KeyTakeaway } from "@/components/section";
import { SimpleList } from "@/components/sections/primitives";

const LAYERS = [
  {
    n: "01",
    title: "Daily Fan Engagement",
    icon: CalendarCheck,
    items: ["Predictions", "Voting", "Rewards", "Competitions", "Sponsor campaigns", "Matchday interaction"],
    note: "Get supporters engaging daily, not only on matchday. More engagement creates more ecosystem value.",
  },
  {
    n: "02",
    title: "Sponsor Participation",
    icon: Megaphone,
    items: ["Rewards campaigns", "Competitions", "Digital experiences", "Supporter interaction"],
    note: "Brands stop advertising and start engaging directly — measurable engagement, stronger activation, new digital sponsorship.",
  },
  {
    n: "03",
    title: "Digital Transactions",
    icon: Wallet,
    items: ["Wallet activity", "Rewards redemption", "Digital spending", "Merchant interaction", "Ecosystem commerce"],
    note: "Over time, a new digital transaction layer forms around the supporter economy.",
  },
  {
    n: "04",
    title: "Ecosystem Growth",
    icon: TrendingUp,
    items: ["Engagement grows", "Sponsor value grows", "Commercial activity grows", "The ecosystem becomes more valuable"],
    note: "As supporter participation grows, the ecosystem strengthens itself through participation.",
  },
];

export function EcosystemValue() {
  return (
    <Section
      id="ecosystem-value"
      eyebrow="How the Ecosystem Creates Value"
      title="Four layers — each one reinforces the next"
      intro="The digital fan economy creates value across four connected layers, building from daily engagement through to self-reinforcing ecosystem growth."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {LAYERS.map(({ n, title, icon: Icon, items, note }) => (
          <div
            key={n}
            className="flex h-full flex-col rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/50 p-6 backdrop-blur transition hover:border-[var(--kc-gold)]/40"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-3xl font-bold tabular-nums text-[var(--kc-gold)]/70">{n}</span>
              <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[var(--kc-gold)]/12">
                <Icon className="size-5 text-[var(--kc-gold)]" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-[var(--kc-paper)]">{title}</h3>
            </div>
            <div className="mt-5">
              <SimpleList items={items} />
            </div>
            <p className="mt-5 border-t border-[var(--kc-line)] pt-4 text-sm text-[var(--kc-paper)]/65">
              {note}
            </p>
          </div>
        ))}
      </div>

      <KeyTakeaway>The ecosystem strengthens itself through participation.</KeyTakeaway>
    </Section>
  );
}
