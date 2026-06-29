/**
 * Section + chapter registry for the Kaizer Chiefs × Bitexen proposal.
 *
 * `SECTIONS` is the flat ordered list of in-page sections (each maps to an
 * anchor id rendered by a section component). `CHAPTERS` groups those sections
 * for the side-rail and header navigation.
 */

/** Background theme — drives the alternating white / dark / blue section bands. */
export type SectionTheme = "dark" | "light" | "blue";

export type SectionMeta = {
  id: string;
  label: string;
  theme: SectionTheme;
};

export type ChapterMeta = {
  id: string;
  label: string;
  sectionIds: string[];
};

/**
 * Theme assignment alternates light/dark for clear context breaks, with navy
 * "blue" bands reserved for the Bitexen-identity sections. Image-backed
 * sections (why-kc, vision, conclusion) stay dark so their photo reads.
 */
export const SECTIONS: SectionMeta[] = [
  { id: "about-bitexen", label: "About Bitexen", theme: "blue" },
  { id: "spectatorship", label: "The Changing Game", theme: "dark" },
  { id: "opportunity", label: "The Opportunity", theme: "light" },
  { id: "why-kc", label: "Why Kaizer Chiefs", theme: "dark" },
  { id: "fan-economy", label: "The Digital Fan Economy", theme: "light" },
  { id: "token", label: "Why a Token", theme: "blue" },
  { id: "launch", label: "Launching the Economy", theme: "dark" },
  { id: "ecosystem-value", label: "How the Ecosystem Creates Value", theme: "light" },
  { id: "revenue", label: "New Revenue Streams", theme: "dark" },
  { id: "stakeholders", label: "Value for Everyone", theme: "light" },
  { id: "growth-engine", label: "The Growth Engine", theme: "dark" },
  { id: "long-term-value", label: "Building Long-Term Value", theme: "light" },
  { id: "experiences", label: "Bringing It to Life", theme: "dark" },
  { id: "beyond", label: "Beyond Fan Engagement", theme: "light" },
  { id: "sponsorship", label: "Strategic Alignment", theme: "dark" },
  { id: "bitexen-enables", label: "How Bitexen Enables It", theme: "blue" },
  { id: "why-bitexen", label: "Why Bitexen", theme: "light" },
  { id: "vision", label: "The Bigger Vision", theme: "dark" },
  { id: "conclusion", label: "Conclusion", theme: "dark" },
];

export const CHAPTERS: ChapterMeta[] = [
  { id: "about-bitexen", label: "Introduction", sectionIds: ["about-bitexen"] },
  {
    id: "spectatorship",
    label: "The Opportunity",
    sectionIds: ["spectatorship", "opportunity", "why-kc"],
  },
  {
    id: "fan-economy",
    label: "The Model",
    sectionIds: ["fan-economy", "token", "launch"],
  },
  {
    id: "ecosystem-value",
    label: "The Commercial Case",
    sectionIds: [
      "ecosystem-value",
      "revenue",
      "stakeholders",
      "growth-engine",
      "long-term-value",
    ],
  },
  {
    id: "experiences",
    label: "The Experience",
    sectionIds: ["experiences", "beyond"],
  },
  {
    id: "sponsorship",
    label: "The Partnership",
    sectionIds: [
      "sponsorship",
      "bitexen-enables",
      "why-bitexen",
      "vision",
      "conclusion",
    ],
  },
];

/** Total number of top-level sections — used for the chapter ribbon counter. */
export function getSectionPosition(id: string): { index: number; total: number } | null {
  const index = SECTIONS.findIndex((s) => s.id === id);
  if (index === -1) return null;
  return { index, total: SECTIONS.length };
}

/** Background theme for a section (defaults to dark for unknown ids). */
export function getSectionTheme(id: string): SectionTheme {
  return SECTIONS.find((s) => s.id === id)?.theme ?? "dark";
}
