import Image from "next/image";

/**
 * Partner logo marks, rendered as crisp white knockouts so they read on the
 * dark theme.
 *
 * - Bitexen's source logo has a dark charcoal wordmark (invisible on dark), so
 *   it's flattened to solid white via `brightness(0) invert(1)`. The site's
 *   `--bx-blue` accent carries the brand colour elsewhere.
 * - DSG's source asset is already white-on-transparent, so it ships as-is.
 */

export function BitexenMark({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/bitexen-logo.png"
      alt="Bitexen"
      width={2346}
      height={495}
      priority
      className={className}
      style={{ filter: "brightness(0) invert(1)" }}
    />
  );
}

export function DsgMark({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/dsg-logo-white.png"
      alt="DSG"
      width={200}
      height={81}
      className={className}
    />
  );
}
