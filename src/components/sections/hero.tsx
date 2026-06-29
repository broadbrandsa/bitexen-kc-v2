import { ArrowDown } from "lucide-react";
import { ChiefMark } from "@/components/chief-mark";

export function Hero() {
  return (
    <section className="bg-stadium relative overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-24">
        {/* Partnership lockup */}
        <div className="flex items-center gap-4">
          <ChiefMark className="h-10 w-auto md:h-12" />
          <span className="text-2xl font-light text-[var(--kc-mute)]">×</span>
          <span className="text-xl font-semibold uppercase tracking-[0.28em] text-[var(--bx-blue-soft)] md:text-2xl">
            Bitexen
          </span>
        </div>

        <div className="mt-10 text-[11px] font-semibold uppercase tracking-[0.4em] text-[var(--kc-gold)]">
          Kaizer Chiefs × Bitexen
        </div>

        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-[var(--kc-paper)] md:text-6xl">
          Building the Digital Economy Around One of Africa&apos;s Largest Supporter Communities
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-[var(--kc-paper)]/75">
          A vision for the future of supporter engagement, loyalty and commercial
          growth.
        </p>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <a
            href="#about-bitexen"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--kc-gold)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--kc-black)] transition hover:bg-[var(--kc-gold-deep)]"
          >
            Explore the vision
            <ArrowDown className="size-4" />
          </a>
          <a
            href="#discussion"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--kc-line)] px-6 py-3 text-sm font-medium uppercase tracking-wider text-[var(--kc-paper)] transition hover:border-[var(--kc-gold)]/60 hover:text-[var(--kc-gold)]"
          >
            Jump to discussion
          </a>
        </div>
      </div>
    </section>
  );
}
