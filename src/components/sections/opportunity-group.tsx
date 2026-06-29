import { ArrowRight, Eye, Hand, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section, KeyTakeaway } from "@/components/section";
import { SimpleList, Stat } from "@/components/sections/primitives";
import { Donut } from "@/components/charts/donut";

export function Spectatorship() {
  return (
    <Section
      id="spectatorship"
      eyebrow="The Changing Game"
      title="The spectatorship of sport is changing"
      intro="The relationship between clubs and supporters is changing — from watching, to engaging, to participating."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          { when: "Yesterday", verb: "Supporters watched", icon: Eye },
          { when: "Today", verb: "Supporters engage", icon: Hand },
          { when: "Tomorrow", verb: "Supporters participate", icon: Users },
        ].map(({ when, verb, icon: Icon }, i) => (
          <div key={when} className="relative">
            <div
              className={cn(
                "kc-card flex h-full flex-col p-6",
                i === 2 ? "kc-card-gold kc-accent" : "",
              )}
            >
              <div className={cn("kc-icon-tile", i !== 2 && "opacity-80")}>
                <Icon className="size-5" />
              </div>
              <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--kc-mute)]">
                {when}
              </div>
              <div className="mt-1 text-2xl font-semibold text-[var(--kc-paper)]">{verb}</div>
            </div>
            {i < 2 ? (
              <ArrowRight className="absolute -right-[1.35rem] top-[2.75rem] z-10 hidden size-6 text-[var(--kc-gold)]/70 md:block" />
            ) : null}
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
      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
        <div className="kc-card flex flex-col p-6">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--kc-mute)]">
            Today&apos;s commercial model
          </div>
          <div className="mt-5">
            <SimpleList items={["Tickets", "Merchandise", "Sponsorships", "Broadcasting"]} />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="kc-icon-tile rotate-90 lg:rotate-0">
            <ArrowRight className="size-5" />
          </div>
        </div>

        <div className="kc-card kc-card-gold kc-accent flex flex-col p-6">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--kc-gold)]">
            Tomorrow&apos;s model adds
          </div>
          <div className="mt-5">
            <SimpleList
              items={[
                "Digital participation",
                "Rewards",
                "Digital commerce",
                "Sponsor activation",
                "Tokenised engagement",
              ]}
            />
          </div>
        </div>
      </div>

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
      image={{
        src: "/images/abigail-keenan-8-s5QuUBtyM-unsplash.jpg",
        alt: "Players on a floodlit pitch at night",
        position: "center 40%",
      }}
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">
        <div className="lg:col-span-2">
          <div className="max-w-xs">
            <Stat value="17M" label="Supporters" />
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-[var(--kc-paper)]">Existing strengths</h3>
            <div className="mt-4">
              <SimpleList
                items={[
                  "One of Africa's strongest sporting brands",
                  "National and regional reach",
                  "Existing commercial partnerships",
                  "Master App in development",
                  "Financial services strategy",
                ]}
              />
            </div>
          </div>
        </div>

        <Donut
          value={75}
          centerValue="75%"
          centerLabel="Aged 16–35"
          caption="A predominantly young supporter base."
        />
      </div>

      <KeyTakeaway>
        Most organisations spend years trying to build an audience. Kaizer Chiefs already
        has one.
      </KeyTakeaway>
    </Section>
  );
}
