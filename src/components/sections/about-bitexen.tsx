import { Boxes, Globe2, Layers, Wallet } from "lucide-react";
import { Section, KeyTakeaway } from "@/components/section";
import { Grid, PillarCard } from "@/components/sections/primitives";

export function AboutBitexen() {
  return (
    <Section
      id="about-bitexen"
      eyebrow="About Bitexen"
      title="Building digital economies"
      intro="Bitexen is one of Turkey's leading digital asset platforms, focused on building secure digital infrastructure for the next generation of digital communities."
    >
      <Grid cols={3}>
        <PillarCard
          icon={Layers}
          accent="blue"
          title="Our experience"
          items={["Digital asset exchange", "Wallet technology", "Blockchain infrastructure"]}
        />
        <PillarCard
          icon={Boxes}
          accent="blue"
          title="80+ tokenisation projects"
          items={["Over 80 successful projects", "Digital ownership ecosystems", "International expansion"]}
        />
        <PillarCard
          icon={Globe2}
          accent="blue"
          title="Our vision"
          description="We believe blockchain is not the product. It is the infrastructure that powers the next iteration of digital economies."
        />
      </Grid>

      <div className="mt-8 flex items-center gap-3 rounded-xl border border-[var(--bx-blue)]/30 bg-[var(--bx-blue)]/[0.06] p-6">
        <Wallet className="size-6 shrink-0 text-[var(--bx-blue-soft)]" />
        <p className="text-[15px] text-[var(--kc-paper)]/85">
          Secure infrastructure, proven at scale — built to power digital communities.
        </p>
      </div>

      <KeyTakeaway>
        Bitexen brings the technology, experience and infrastructure required to build
        digital ecosystems at scale.
      </KeyTakeaway>
    </Section>
  );
}
