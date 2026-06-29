"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChiefMark } from "@/components/chief-mark";
import { BitexenMark } from "@/components/brand-marks";
import { CHAPTERS, SECTIONS } from "@/data/sections";

export function Header() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-[var(--kc-line)] bg-[var(--kc-ink)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <BitexenMark className="h-5 w-auto" />
          <span className="text-base font-light text-[var(--kc-mute)]">×</span>
          <ChiefMark className="h-8 w-auto" />
          <div className="hidden border-l border-[var(--kc-line)] pl-3 leading-none sm:block">
            <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--kc-mute)]">
              Digital Fan Economy
            </div>
            <div className="text-sm font-semibold tracking-tight text-[var(--kc-paper)]">
              Strategic Proposal · 2026
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-md border border-[var(--kc-line)] bg-[var(--kc-charcoal)]/40 px-3 py-1.5 text-[12px] font-medium uppercase tracking-wider text-[var(--kc-paper)] transition hover:border-[var(--kc-gold)]/60 hover:text-[var(--kc-gold)]"
              >
                Contents
                <ChevronDown className="size-3.5 opacity-70" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[320px]">
              {CHAPTERS.map((c, i) => {
                const subs = c.sectionIds
                  .map((id) => SECTIONS.find((s) => s.id === id))
                  .filter((s): s is NonNullable<typeof s> => Boolean(s));
                return (
                  <div
                    key={c.id}
                    className={i > 0 ? "mt-1 border-t border-[var(--kc-line)]/40 pt-1" : undefined}
                  >
                    <DropdownMenuLabel className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--kc-mute)]">
                      {c.label}
                    </DropdownMenuLabel>
                    {subs.map((s) => (
                      <DropdownMenuItem key={s.id} asChild>
                        <a
                          href={`#${s.id}`}
                          className="cursor-pointer text-[12px] font-medium text-[var(--kc-paper)]/80"
                        >
                          {s.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </div>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href="#conclusion"
            className="text-[12px] font-medium uppercase tracking-wider text-[var(--kc-paper)]/70 transition hover:text-[var(--kc-gold)]"
          >
            Conclusion
          </a>
        </div>
      </div>
    </header>
  );
}
