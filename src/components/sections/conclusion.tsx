import { ArrowRight } from "lucide-react";
import { Section } from "@/components/section";
import { SimpleList } from "@/components/sections/primitives";

export function Conclusion() {
  return (
    <Section
      id="conclusion"
      eyebrow="Conclusion"
      title="Kaizer Chiefs already has the audience"
      intro="The opportunity is to build the digital economy around it. The combination of supporter scale, youth engagement, participation, rewards, sponsorship and tokenised infrastructure creates the foundation for a new category of supporter ecosystem in Africa."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-[var(--kc-paper)]">The combination of</h3>
          <div className="mt-4">
            <SimpleList
              items={[
                "Supporter scale",
                "Youth engagement",
                "Digital participation",
                "Rewards",
                "Sponsorship",
                "Tokenised infrastructure",
              ]}
            />
          </div>
        </div>
        <div className="rounded-xl border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/50 p-6">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--kc-gold)]">
            The framing
          </div>
          <p className="mt-3 text-[16px] text-[var(--kc-paper)]/85">
            This is not simply about launching a token. It is about building a digitally
            connected participation economy around one of Africa&apos;s most powerful
            supporter communities. Bitexen&apos;s role is to help enable that future through
            infrastructure, ecosystem activation, and long-term strategic partnership.
          </p>
        </div>
      </div>

      {/* Let's build it together — closing CTA */}
      <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--kc-gold)]/30 bg-gradient-to-br from-[var(--kc-gold)]/[0.10] via-[var(--kc-charcoal)]/40 to-[var(--bx-blue)]/[0.08] p-10 text-center">
        <h3 className="text-3xl font-bold tracking-tight text-[var(--kc-paper)] md:text-4xl">
          Let&apos;s build it together.
        </h3>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--kc-paper)]/80">
          The next step is a working session with Kaizer Chiefs leadership to shape the
          launch of the Kaizer Chiefs digital token and the broader digital fan economy —
          scope, sequencing, sponsor activation and partnership structure.
        </p>
        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--kc-gold)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--kc-black)]">
            Working session with Kaizer Chiefs leadership
            <ArrowRight className="size-4" />
          </span>
        </div>
      </div>
    </Section>
  );
}
