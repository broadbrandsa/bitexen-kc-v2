import { MessageCircleQuestion } from "lucide-react";
import { Section, KeyTakeaway } from "@/components/section";
import { FlowChain, SimpleList } from "@/components/sections/primitives";

export function Sponsorship() {
  return (
    <Section
      id="sponsorship"
      eyebrow="Strategic Alignment"
      title="A long-term ecosystem partner — not just a sponsor"
      intro="Bitexen's role extends beyond technology. As the ecosystem grows, success compounds for everyone involved."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-[var(--kc-paper)]">As the ecosystem grows</h3>
          <div className="mt-4">
            <SimpleList
              accent="blue"
              items={[
                "The platform generates commercial activity",
                "Bitexen reinvests into the partnership through sponsorship",
                "More engagement creates more value for supporters",
                "More value strengthens the Kaizer Chiefs brand",
              ]}
            />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[var(--kc-paper)]">Long-term alignment between</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {["Kaizer Chiefs", "Supporters", "Sponsors", "Bitexen"].map((p) => (
              <div
                key={p}
                className="rounded-lg border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/50 px-4 py-5 text-center text-base font-semibold text-[var(--kc-paper)]"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>

      <KeyTakeaway>Success for the ecosystem creates success for the partnership.</KeyTakeaway>
    </Section>
  );
}

const WHY_ROWS: { kc: string; bx: string }[] = [
  { kc: "Brand", bx: "Infrastructure" },
  { kc: "Supporters", bx: "Wallet technology" },
  { kc: "Community", bx: "Tokenisation" },
  { kc: "Commercial relationships", bx: "Compliance" },
  { kc: "Football expertise", bx: "Digital asset expertise" },
];

export function WhyBitexen() {
  return (
    <Section
      id="why-bitexen"
      eyebrow="Why Bitexen"
      title="Two halves of one digital fan economy"
      intro="Kaizer Chiefs provides the community. Bitexen provides the digital infrastructure."
    >
      <div className="overflow-hidden rounded-xl border border-[var(--kc-line)]">
        <div className="grid grid-cols-2">
          <div className="bg-[var(--kc-gold)]/[0.08] px-5 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kc-gold)]">
            Kaizer Chiefs
          </div>
          <div className="bg-[var(--bx-blue)]/[0.10] px-5 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--bx-blue-soft)]">
            Bitexen
          </div>
        </div>
        {WHY_ROWS.map((row) => (
          <div key={row.kc} className="grid grid-cols-2 border-t border-[var(--kc-line)]">
            <div className="px-5 py-4 text-center text-[15px] font-medium text-[var(--kc-paper)]">
              {row.kc}
            </div>
            <div className="border-l border-[var(--kc-line)] px-5 py-4 text-center text-[15px] font-medium text-[var(--kc-paper)]">
              {row.bx}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-[var(--kc-gold)]/30 bg-gradient-to-r from-[var(--kc-gold)]/[0.08] to-[var(--bx-blue)]/[0.08] p-6 text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--kc-mute)]">
          Together
        </span>
        <p className="mt-2 text-xl font-semibold text-[var(--kc-paper)]">
          Build Africa&apos;s leading digital fan economy.
        </p>
      </div>

      <KeyTakeaway>
        Kaizer Chiefs provides the community. Bitexen provides the digital infrastructure.
      </KeyTakeaway>
    </Section>
  );
}

export function Vision() {
  return (
    <Section
      id="vision"
      eyebrow="The Bigger Vision"
      title="Beyond a token — a digital economy"
      intro="This is not about launching a token. It is about creating the digital economy around one of Africa's largest sporting communities."
    >
      <FlowChain
        steps={[
          { label: "Supporter engagement" },
          { label: "Digital rewards" },
          { label: "Digital commerce" },
          { label: "Financial services" },
          { label: "Regional expansion" },
          { label: "Africa's leading digital fan economy" },
        ]}
      />

      <KeyTakeaway>
        This is not about launching a token. It is about creating the digital economy
        around one of Africa&apos;s largest sporting communities.
      </KeyTakeaway>
    </Section>
  );
}

const QUESTIONS = [
  "Does this align with your long-term vision for Kaizer Chiefs?",
  "Which commercial opportunities excite you the most?",
  "How do you see the Master App fitting into this ecosystem?",
  "What role should supporters play in shaping it?",
  "What does success look like five years from now?",
];

export function Discussion() {
  return (
    <Section id="discussion" eyebrow="Discussion" title="Questions for the team">
      <div className="space-y-4">
        {QUESTIONS.map((q, i) => (
          <div
            key={q}
            className="flex items-start gap-4 rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/50 p-6"
          >
            <span className="font-mono text-2xl font-bold tabular-nums text-[var(--kc-gold)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="pt-1 text-lg text-[var(--kc-paper)]">{q}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center gap-4 rounded-xl border border-[var(--bx-blue)]/30 bg-[var(--bx-blue)]/[0.06] p-6">
        <MessageCircleQuestion className="size-7 shrink-0 text-[var(--bx-blue-soft)]" />
        <p className="text-lg font-medium text-[var(--kc-paper)]">
          Let&apos;s build Africa&apos;s leading digital fan economy — together.
        </p>
      </div>
    </Section>
  );
}
