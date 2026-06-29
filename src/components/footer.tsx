import { BitexenMark, DsgMark } from "@/components/brand-marks";

export function Footer() {
  return (
    <footer className="border-t border-[var(--kc-line)] bg-[var(--kc-ink)] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <BitexenMark className="h-6 w-auto" />
            <div className="mt-4 flex flex-wrap items-center gap-2.5 text-xs uppercase tracking-[0.28em] text-[var(--kc-mute)]">
              Prepared for Kaizer Chiefs FC · in association with
              <DsgMark className="h-4 w-auto" />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs uppercase tracking-[0.2em] text-[var(--kc-mute)]">
            <span className="text-[var(--kc-paper)]/70">bitexen.com</span>
            <span aria-hidden="true">·</span>
            <span className="text-[var(--kc-paper)]/70">dsg.co.za</span>
            <span aria-hidden="true">·</span>
            <span className="text-[var(--kc-paper)]/70">kaizerchiefs.com</span>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--kc-line)] pt-6 text-xs uppercase tracking-[0.28em] text-[var(--kc-mute)]">
          2026 · Strategic Proposal · Confidential
        </div>
      </div>
    </footer>
  );
}
