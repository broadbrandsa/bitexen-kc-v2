import { ArrowDown } from "lucide-react";
import { ChiefMark } from "@/components/chief-mark";
import { BitexenMark, DsgMark } from "@/components/brand-marks";

export function Hero() {
  return (
    <section className="bg-stadium relative overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 py-24">
        {/* Partnership lockup — Bitexen-led, prepared for Kaizer Chiefs */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
          <BitexenMark className="h-7 w-auto md:h-8" />
          <span className="text-lg font-light text-[var(--kc-mute)]">×</span>
          <ChiefMark className="h-9 w-auto md:h-10" />
        </div>

        <div className="mt-12 text-[11px] font-semibold uppercase tracking-[0.4em] text-[var(--kc-gold)]">
          Prepared for Kaizer Chiefs Football Club
        </div>

        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-[var(--kc-paper)] md:text-6xl">
          Kaizer Chiefs Digital Fan Economy
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-[var(--kc-paper)]/75">
          Building the digital economy around one of Africa&apos;s largest supporter
          communities.
        </p>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <a
            href="#about-bitexen"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--kc-gold)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--kc-black)] transition hover:bg-[var(--kc-gold-deep)]"
          >
            Explore the proposal
            <ArrowDown className="size-4" />
          </a>
          <a
            href="#conclusion"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--kc-line)] px-6 py-3 text-sm font-medium uppercase tracking-wider text-[var(--kc-paper)] transition hover:border-[var(--kc-gold)]/60 hover:text-[var(--kc-gold)]"
          >
            Let&apos;s build it together
          </a>
        </div>

        {/* Credit line */}
        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--kc-line)] pt-6 text-[12px] uppercase tracking-[0.2em] text-[var(--kc-mute)]">
          <span className="flex items-center gap-2.5">
            Presented by
            <BitexenMark className="h-4 w-auto" />
            <span className="text-[var(--kc-paper)]/80">· Strategic Partnerships</span>
          </span>
          <span className="flex items-center gap-2.5">
            In association with
            <DsgMark className="h-5 w-auto" />
          </span>
          <span>2026 · Confidential</span>
        </div>
      </div>
    </section>
  );
}
