/**
 * Section + chapter registry for the Kaizer Chiefs × Bitexen proposal.
 *
 * `SECTIONS` is the flat ordered list of in-page sections (each maps to an
 * anchor id rendered by a section component). `CHAPTERS` groups those sections
 * for the side-rail and header navigation.
 */

export type SectionMeta = {
  id: string;
  label: string;
};

export type ChapterMeta = {
  id: string;
  label: string;
  sectionIds: string[];
};

export const SECTIONS: SectionMeta[] = [
  { id: "about-bitexen", label: "About Bitexen" },
  { id: "spectatorship", label: "The Changing Game" },
  { id: "opportunity", label: "The Opportunity" },
  { id: "why-kc", label: "Why Kaizer Chiefs" },
  { id: "fan-economy", label: "The Digital Fan Economy" },
  { id: "token", label: "Why a Token" },
  { id: "launch", label: "Launching the Economy" },
  { id: "revenue", label: "New Revenue Streams" },
  { id: "stakeholders", label: "Value for Everyone" },
  { id: "growth-engine", label: "The Growth Engine" },
  { id: "long-term-value", label: "Building Long-Term Value" },
  { id: "experiences", label: "Bringing It to Life" },
  { id: "beyond", label: "Beyond Fan Engagement" },
  { id: "sponsorship", label: "Strategic Alignment" },
  { id: "why-bitexen", label: "Why Bitexen" },
  { id: "vision", label: "The Bigger Vision" },
  { id: "discussion", label: "Discussion" },
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
    id: "revenue",
    label: "The Commercial Case",
    sectionIds: ["revenue", "stakeholders", "growth-engine", "long-term-value"],
  },
  {
    id: "experiences",
    label: "The Experience",
    sectionIds: ["experiences", "beyond"],
  },
  {
    id: "sponsorship",
    label: "The Partnership",
    sectionIds: ["sponsorship", "why-bitexen", "vision", "discussion"],
  },
];

/** Total number of top-level sections — used for the chapter ribbon counter. */
export function getSectionPosition(id: string): { index: number; total: number } | null {
  const index = SECTIONS.findIndex((s) => s.id === id);
  if (index === -1) return null;
  return { index, total: SECTIONS.length };
}
