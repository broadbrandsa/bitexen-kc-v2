import { Coins, Rocket } from "lucide-react";
import { Section, KeyTakeaway } from "@/components/section";
import { SimpleList } from "@/components/sections/primitives";
import { Flywheel } from "@/components/charts/flywheel";

export function FanEconomy() {
  return (
    <Section
      id="fan-economy"
      eyebrow="The Model"
      title="What is a digital fan economy?"
      intro="A connected ecosystem where supporters participate rather than simply consume."
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Flywheel
          center="The fan economy"
          nodes={[
            "Supporters",
            "Participation",
            "Rewards",
            "Sponsors",
            "Commerce",
            "More participation",
          ]}
        />

        <div>
          <h3 className="text-lg font-semibold text-[var(--kc-paper)]">Supporters can:</h3>
          <div className="mt-4">
            <SimpleList
              items={[
                "Predict",
                "Vote",
                "Earn rewards",
                "Unlock experiences",
                "Interact with sponsors",
                "Build digital identity",
              ]}
            />
          </div>
        </div>
      </div>

      <KeyTakeaway>Every interaction strengthens the ecosystem.</KeyTakeaway>
    </Section>
  );
}

export function Token() {
  return (
    <Section
      id="token"
      eyebrow="Why a Token"
      title="The token is not the product — it powers the ecosystem"
      intro="Unlike traditional loyalty programmes, every interaction takes place within a single, connected digital economy."
    >
      <div className="kc-card kc-card-blue kc-accent-blue p-8">
        <div className="kc-icon-tile kc-icon-tile-blue mb-6 size-12">
          <Coins className="size-6" />
        </div>
        <h3 className="text-lg font-semibold text-[var(--kc-paper)]">The token enables:</h3>
        <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
          <SimpleList
            accent="blue"
            items={["Digital ownership", "Daily participation", "Rewards & loyalty"]}
          />
          <SimpleList
            accent="blue"
            items={["Sponsor campaigns", "Digital transactions", "One connected supporter economy"]}
          />
        </div>
      </div>

      <KeyTakeaway>The token connects every part of the supporter experience.</KeyTakeaway>
    </Section>
  );
}

export function Launch() {
  return (
    <Section
      id="launch"
      eyebrow="Launching the Economy"
      title="The launch is the beginning — not the end product"
      intro="Launching the ecosystem is about far more than issuing a token. It creates the foundation for a long-term digital economy."
    >
      <div className="flex items-start gap-4">
        <div className="hidden shrink-0 sm:block">
          <div className="kc-icon-tile size-12">
            <Rocket className="size-6" />
          </div>
        </div>
        <div className="max-w-2xl">
          <h3 className="text-lg font-semibold text-[var(--kc-paper)]">The launch will:</h3>
          <div className="mt-4">
            <SimpleList
              items={[
                "Introduce supporters to the ecosystem",
                "Create the first commercial event",
                "Fund rewards and engagement",
                "Drive adoption",
                "Create long-term participation",
              ]}
            />
          </div>
        </div>
      </div>

      <KeyTakeaway>
        The token launch is the beginning of the ecosystem — not the end product.
      </KeyTakeaway>
    </Section>
  );
}
