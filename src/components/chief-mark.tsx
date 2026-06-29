import Image from "next/image";

/**
 * Kaizer Chiefs official horizontal logo.
 * Rendered via next/image to inherit Next.js asset optimisation;
 * the SVG itself lives in /public/kc-logo.svg.
 *
 * Sizing: the source viewBox is 293.5 × 98.3 (≈ 2.99:1 aspect ratio).
 * Pass a wrapper with the desired height — width auto-scales via the
 * className ratio.
 */
export function ChiefMark({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/kc-logo.svg"
      alt="Kaizer Chiefs"
      width={294}
      height={98}
      priority
      className={className}
    />
  );
}
