"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CHAPTERS, SECTIONS } from "@/data/sections";

/**
 * SideMenu — left-rail navigation.
 *
 * Collapsed to a strip of chapter dots; expands on hover to reveal chapter
 * labels and their sub-sections. The active chapter is tracked via an
 * IntersectionObserver on each chapter's anchor element.
 */
export function SideMenu() {
  const [active, setActive] = useState<string>(CHAPTERS[0]?.id ?? "");

  useEffect(() => {
    const elements = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="no-print group/nav pointer-events-none fixed left-0 top-24 z-30 hidden h-[calc(100vh-6rem)] w-12 transition-[width] duration-300 ease-out hover:w-72 lg:block"
    >
      <div className="pointer-events-auto h-full overflow-y-auto rounded-r-2xl px-2 py-4 transition-[padding,background] duration-300 ease-out group-hover/nav:bg-[var(--kc-ink)]/85 group-hover/nav:px-4 group-hover/nav:shadow-2xl group-hover/nav:shadow-black/40 group-hover/nav:backdrop-blur-md">
        <div className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--kc-mute)] opacity-0 transition-opacity duration-200 group-hover/nav:opacity-100">
          Contents
        </div>

        <ul className="mt-3 space-y-1">
          {CHAPTERS.map((c, i) => {
            const isActive = active === c.id;
            const subs = c.sectionIds
              .map((id) => SECTIONS.find((s) => s.id === id))
              .filter((s): s is NonNullable<typeof s> => Boolean(s));

            return (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  title={c.label}
                  className={cn(
                    "group/item flex items-center gap-2.5 rounded px-2 py-1.5 text-[13px] transition",
                    isActive
                      ? "text-[var(--kc-gold)]"
                      : "text-[var(--kc-paper)]/80 hover:text-[var(--kc-gold)]",
                  )}
                >
                  <span
                    className="relative flex h-4 w-4 shrink-0 items-center justify-center"
                    aria-hidden="true"
                  >
                    {isActive ? (
                      <>
                        <span className="absolute inline-block h-3 w-3 animate-ping rounded-full bg-[var(--kc-gold)]/40" />
                        <span className="relative inline-block h-2 w-2 rounded-full bg-[var(--kc-gold)]" />
                      </>
                    ) : (
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--kc-mute)]" />
                    )}
                  </span>

                  <span className="whitespace-nowrap font-mono text-[10px] tabular-nums text-[var(--kc-mute)] opacity-0 transition-opacity duration-200 group-hover/nav:opacity-100 group-hover/item:text-[var(--kc-paper)]/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate font-semibold opacity-0 transition-opacity duration-200 group-hover/nav:opacity-100">
                    {c.label}
                  </span>
                </a>

                {subs.length > 1 ? (
                  <ul className="ml-5 mt-0.5 hidden space-y-0.5 border-l border-[var(--kc-line)]/60 pl-2 group-hover/nav:block">
                    {subs.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          title={s.label}
                          className="block truncate rounded px-2 py-1 text-[12px] text-[var(--kc-paper)]/55 transition hover:text-[var(--kc-gold)]"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
