import { Coins, Rocket } from "lucide-react";
import { Section, KeyTakeaway } from "@/components/section";
import { FlowChain, SimpleList } from "@/components/sections/primitives";

export function FanEconomy() {
  return (
    <Section
      id="fan-economy"
      eyebrow="The Model"
      title="What is a digital fan economy?"
      intro="A connected ecosystem where supporters participate rather than simply consume."
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <FlowChain
          loop
          steps={[
            { label: "Supporters" },
            { label: "Participation" },
            { label: "Rewards" },
            { label: "Sponsors" },
            { label: "Commerce" },
            { label: "More participation" },
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
      <div className="rounded-xl border border-[var(--bx-blue)]/30 bg-[var(--bx-blue)]/[0.05] p-8">
        <div className="mb-6 inline-flex size-12 items-center justify-center rounded-lg bg-[var(--bx-blue)]/15">
          <Coins className="size-6 text-[var(--bx-blue-soft)]" />
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
          <div className="inline-flex size-12 items-center justify-center rounded-lg bg-[var(--kc-gold)]/12">
            <Rocket className="size-6 text-[var(--kc-gold)]" />
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
