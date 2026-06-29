import { Building2, Megaphone, TrendingUp, Users } from "lucide-react";
import { Section, KeyTakeaway } from "@/components/section";
import { FlowChain, Grid, PillarCard, SimpleList } from "@/components/sections/primitives";

const REVENUE_ROWS: { opportunity: string; benefit: string }[] = [
  {
    opportunity: "Digital token launch",
    benefit: "Creates a new commercial event while onboarding supporters into the ecosystem.",
  },
  {
    opportunity: "Digital engagement",
    benefit: "Creates daily interaction that increases the value of sponsors and digital products.",
  },
  {
    opportunity: "Digital sponsorship",
    benefit: "Sponsors engage directly with supporters through campaigns, rewards and experiences.",
  },
  {
    opportunity: "Digital commerce",
    benefit: "Merchandise, experiences, partner offers and future products become digitally connected.",
  },
  {
    opportunity: "Future financial services",
    benefit: "The ecosystem becomes a distribution platform for future financial products and services.",
  },
];

export function Revenue() {
  return (
    <Section
      id="revenue"
      eyebrow="The Commercial Case"
      title="Building new revenue streams"
      intro="The digital fan economy creates new commercial opportunities that do not exist today."
    >
      <div className="overflow-hidden rounded-xl border border-[var(--kc-line)]">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-[var(--kc-charcoal)]/70">
              <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                Opportunity
              </th>
              <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
                Commercial benefit
              </th>
            </tr>
          </thead>
          <tbody>
            {REVENUE_ROWS.map((row, i) => (
              <tr
                key={row.opportunity}
                className={i % 2 === 0 ? "bg-[var(--kc-charcoal)]/20" : "bg-transparent"}
              >
                <td className="w-1/3 border-t border-[var(--kc-line)] px-5 py-4 align-top text-[15px] font-semibold text-[var(--kc-paper)]">
                  {row.opportunity}
                </td>
                <td className="border-t border-[var(--kc-line)] px-5 py-4 align-top text-[15px] text-[var(--kc-paper)]/75">
                  {row.benefit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12">
        <h3 className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--kc-mute)]">
          The commercial flywheel
        </h3>
        <FlowChain
          loop
          steps={[
            { label: "Supporters join" },
            { label: "Participation grows" },
            { label: "Sponsor value increases" },
            { label: "Commercial revenue grows" },
            { label: "Rewards expand" },
          ]}
        />
      </div>

      <KeyTakeaway>
        The objective is not simply to launch a token — it is to build a self-sustaining
        digital economy around the Kaizer Chiefs supporter base.
      </KeyTakeaway>
    </Section>
  );
}

export function Stakeholders() {
  return (
    <Section
      id="stakeholders"
      eyebrow="Value for Everyone"
      title="Every stakeholder benefits from the same ecosystem"
    >
      <Grid cols={4}>
        <PillarCard
          icon={TrendingUp}
          title="Commercial"
          items={["New digital revenue streams", "More valuable sponsorships", "New digital products"]}
        />
        <PillarCard
          icon={Users}
          title="Supporters"
          items={["Daily engagement", "Rewards", "Loyalty", "Exclusive experiences"]}
        />
        <PillarCard
          icon={Megaphone}
          title="Sponsors"
          items={["Better activation", "Measurable engagement", "Richer supporter interaction"]}
        />
        <PillarCard
          icon={Building2}
          title="Club"
          items={[
            "Stronger supporter relationships",
            "Higher digital engagement",
            "Long-term commercial growth",
          ]}
        />
      </Grid>

      <KeyTakeaway>Every stakeholder benefits from the same ecosystem.</KeyTakeaway>
    </Section>
  );
}

export function GrowthEngine() {
  return (
    <Section
      id="growth-engine"
      eyebrow="The Growth Engine"
      title="The value flywheel"
      intro="As the supporter experience improves, participation increases. Greater participation attracts sponsors, creates new commercial opportunities, and allows continued investment back into the ecosystem."
    >
      <FlowChain
        loop
        steps={[
          { label: "Better supporter experiences", sub: "Rewards · experiences · utility · loyalty" },
          { label: "Greater supporter participation", sub: "Daily engagement · stronger community" },
          { label: "More commercial opportunities", sub: "Sponsor activation · new revenue streams" },
          { label: "More investment into the ecosystem", sub: "Better rewards · new features" },
        ]}
      />

      <KeyTakeaway>
        The ecosystem grows by continuously reinvesting value back into the supporter
        experience.
      </KeyTakeaway>
    </Section>
  );
}

export function LongTermValue() {
  return (
    <Section
      id="long-term-value"
      eyebrow="Building Long-Term Value"
      title="Designed to keep supporters engaged"
      intro="Many fan token projects launched successfully, but struggled to maintain long-term supporter engagement. We believe the ecosystem should be designed differently."
    >
      <Grid cols={2}>
        <PillarCard
          title="Lessons from previous projects"
          items={[
            "Limited utility after launch",
            "Infrequent supporter engagement",
            "No ongoing investment into new experiences",
            "Declining reasons to participate",
          ]}
        />
        <PillarCard
          accent="blue"
          title="Our approach"
          description="A portion of ecosystem funding should be dedicated to continuously creating new value through:"
          items={[
            "New supporter experiences",
            "Rewards and loyalty programmes",
            "Gamification and competitions",
            "Sponsor activations",
            "New digital products and services",
            "Ongoing platform innovation",
          ]}
        />
      </Grid>

      <KeyTakeaway>
        The long-term value of the ecosystem is driven by the value we continuously create
        for supporters.
      </KeyTakeaway>
    </Section>
  );
}
