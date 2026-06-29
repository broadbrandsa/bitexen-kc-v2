import {
  Boxes,
  Gift,
  Link2,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react";
import { Section, KeyTakeaway } from "@/components/section";
import { Grid, PillarCard } from "@/components/sections/primitives";

export function BitexenEnables() {
  return (
    <Section
      id="bitexen-enables"
      eyebrow="How Bitexen Enables the Ecosystem"
      title="The infrastructure powering the ecosystem"
      intro="Bitexen provides the underlying infrastructure — built to integrate directly into the broader Kaizer Chiefs digital ecosystem and future supporter app."
    >
      <Grid cols={3}>
        <PillarCard icon={Wallet} accent="blue" title="Wallet infrastructure" />
        <PillarCard icon={Boxes} accent="blue" title="Token infrastructure" />
        <PillarCard icon={Gift} accent="blue" title="Rewards systems" />
        <PillarCard icon={Zap} accent="blue" title="Digital engagement tooling" />
        <PillarCard icon={Link2} accent="blue" title="Transaction infrastructure" />
        <PillarCard icon={ShieldCheck} accent="blue" title="Sponsor integration" />
      </Grid>

      <div className="mt-8 rounded-xl border border-[var(--bx-blue)]/30 bg-[var(--bx-blue)]/[0.06] p-6">
        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--bx-blue-soft)]">
          The integration goal
        </div>
        <p className="mt-3 text-[16px] text-[var(--kc-paper)]/85">
          This is not about creating a disconnected platform. It is about helping Kaizer
          Chiefs build and own its digital fan economy — integrated into the broader Kaizer
          Chiefs digital ecosystem and future supporter app, on a foundation of scalable
          ecosystem architecture.
        </p>
      </div>

      <KeyTakeaway>
        Kaizer Chiefs builds and owns its digital fan economy — Bitexen provides the
        scalable infrastructure beneath it.
      </KeyTakeaway>
    </Section>
  );
}
