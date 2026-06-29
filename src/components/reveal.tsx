"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Reveal — fades + rises its children into view on scroll via an
 * IntersectionObserver. Pairs with the `[data-reveal]` / `[data-reveal-stagger]`
 * CSS in globals.css, which is itself gated behind
 * `prefers-reduced-motion: no-preference`, so reduced-motion users get the
 * final state with no animation.
 *
 * - `stagger` cascades the container's direct children instead of revealing the
 *   whole block at once.
 * - The observer disconnects after first reveal (one-shot).
 */
export function Reveal({
  children,
  stagger = false,
  className,
}: {
  children: ReactNode;
  stagger?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      // threshold 0 + negative bottom margin: reveal as soon as the element's
      // top scrolls into view, independent of element height (robust for tall
      // section bodies where a ratio threshold may never be reached).
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );
    io.observe(el);

    // Safety net: if the element is already within the viewport at mount
    // (e.g. above the fold after unlock), reveal without waiting for a scroll.
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) setVisible(true);

    return () => io.disconnect();
  }, []);

  const revealProps = stagger
    ? { "data-reveal-stagger": "" }
    : { "data-reveal": "" };

  return (
    <div
      ref={ref}
      {...revealProps}
      className={cn(visible && "is-visible", className)}
    >
      {children}
    </div>
  );
}
