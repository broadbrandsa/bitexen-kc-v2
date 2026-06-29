import { Eye, Hand, Users } from "lucide-react";
import { Section, KeyTakeaway } from "@/components/section";
import { Grid, PillarCard, SimpleList, Stat } from "@/components/sections/primitives";

export function Spectatorship() {
  return (
    <Section
      id="spectatorship"
      eyebrow="The Changing Game"
      title="The spectatorship of sport is changing"
      intro="The relationship between clubs and supporters is changing — from watching, to engaging, to participating."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {[
          { when: "Yesterday", verb: "Supporters watched", icon: Eye },
          { when: "Today", verb: "Supporters engage", icon: Hand },
          { when: "Tomorrow", verb: "Supporters participate", icon: Users },
        ].map(({ when, verb, icon: Icon }, i) => (
          <div
            key={when}
            className={
              "rounded-xl border p-6 " +
              (i === 2
                ? "border-[var(--kc-gold)]/40 bg-[var(--kc-gold)]/[0.06]"
                : "border-[var(--kc-line)] bg-[var(--kc-charcoal)]/50")
            }
          >
            <Icon className={"size-6 " + (i === 2 ? "text-[var(--kc-gold)]" : "text-[var(--kc-mute)]")} />
            <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--kc-mute)]">
              {when}
            </div>
            <div className="mt-1 text-xl font-semibold text-[var(--kc-paper)]">{verb}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 max-w-2xl">
        <h3 className="text-lg font-semibold text-[var(--kc-paper)]">Modern supporters want to:</h3>
        <div className="mt-4">
          <SimpleList
            items={[
              "Engage daily",
              "Earn rewards",
              "Participate",
              "Influence outcomes",
              "Feel connected to the club",
            ]}
          />
        </div>
      </div>

      <KeyTakeaway>The future of sport is participation.</KeyTakeaway>
    </Section>
  );
}

export function Opportunity() {
  return (
    <Section
      id="opportunity"
      eyebrow="The Opportunity"
      title="Kaizer Chiefs already has the audience"
      intro="The opportunity is to build the digital economy around it."
    >
      <Grid cols={2}>
        <PillarCard
          title="Today's commercial model"
          items={["Tickets", "Merchandise", "Sponsorships", "Broadcasting"]}
        />
        <PillarCard
          accent="blue"
          title="Tomorrow's model adds"
          items={[
            "Digital participation",
            "Rewards",
            "Digital commerce",
            "Sponsor activation",
            "Tokenised engagement",
          ]}
        />
      </Grid>

      <KeyTakeaway>
        The next opportunity isn&apos;t finding more supporters. It&apos;s creating more
        value from the supporters you already have.
      </KeyTakeaway>
    </Section>
  );
}

export function WhyKaizerChiefs() {
  return (
    <Section
      id="why-kc"
      eyebrow="Why Kaizer Chiefs"
      title="The foundations are already in place"
      intro="Kaizer Chiefs already possesses the foundations required to build one of Africa's leading digital supporter ecosystems."
    >
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        <Stat value="17M" label="Supporters" />
        <Stat value="75%" label="Aged 16–35" />
        <Stat value="#1" label="Of Africa's strongest sporting brands" />
      </div>

      <div className="mt-8 max-w-2xl">
        <h3 className="text-lg font-semibold text-[var(--kc-paper)]">Existing strengths</h3>
        <div className="mt-4">
          <SimpleList
            items={[
              "National and regional reach",
              "Existing commercial partnerships",
              "Master App in development",
              "Financial services strategy",
            ]}
          />
        </div>
      </div>

      <KeyTakeaway>
        Most organisations spend years trying to build an audience. Kaizer Chiefs already
        has one.
      </KeyTakeaway>
    </Section>
  );
}
