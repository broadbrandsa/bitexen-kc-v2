# Structure

## Folder structure

```
bitexen-kc-v2/
├── docs/                       # Project documentation (this folder)
├── public/
│   ├── kc-logo.svg             # Kaizer Chiefs horizontal logo
│   ├── images/                 # Static imagery (currently empty)
│   └── *.svg                   # Misc framework assets
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout — wraps app in <LockScreen>
│   │   ├── page.tsx            # Home page — composes all sections in order
│   │   └── globals.css         # Tailwind v4 theme + KC/Bitexen design tokens
│   ├── components/
│   │   ├── header.tsx          # Sticky header + contents dropdown
│   │   ├── footer.tsx          # Footer
│   │   ├── side-menu.tsx       # Hover-expand left navigation rail
│   │   ├── reading-progress.tsx# Top scroll-progress bar
│   │   ├── lock-screen.tsx     # Access-code gate (code 1970)
│   │   ├── chief-mark.tsx      # KC logo component
│   │   ├── section.tsx         # <Section> shell + <KeyTakeaway> callout
│   │   ├── sections/           # One file per chapter group of sections
│   │   │   ├── primitives.tsx  # PillarCard, FlowChain, Stat, Grid, SimpleList
│   │   │   ├── hero.tsx
│   │   │   ├── about-bitexen.tsx
│   │   │   ├── opportunity-group.tsx
│   │   │   ├── model-group.tsx
│   │   │   ├── commercial-group.tsx
│   │   │   ├── experience-group.tsx
│   │   │   ├── partnership-group.tsx
│   │   │   └── index.ts        # Barrel re-export of all sections
│   │   └── ui/                 # shadcn primitives (button, card, badge, …)
│   ├── data/
│   │   └── sections.ts         # Section + chapter registry (nav source of truth)
│   └── lib/
│       └── utils.ts            # cn() class helper
├── components.json             # shadcn config
├── next.config.ts
├── tailwind via globals.css    # Tailwind v4 (no tailwind.config — CSS-first)
└── package.json
```

## Section composition rules

- **Registry is the source of truth.** `src/data/sections.ts` defines the ordered
  `SECTIONS` (anchor id + label) and the `CHAPTERS` grouping used by both the
  header dropdown and the side rail. Add a section here first.
- **One anchor per section.** Each section component renders a `<Section id="…">`
  whose `id` must match an entry in `SECTIONS`, so deep-links and active-state
  tracking work.
- **Sections are grouped by chapter** into files under `src/components/sections/`
  to keep related content together, then re-exported from `index.ts`.
- **`<Section>` provides the chrome** (chapter ribbon, eyebrow, title, intro).
  Section bodies compose the shared primitives in `primitives.tsx`.
- **`<KeyTakeaway>`** renders the recurring gold callout that closes most slides.

## Content management approach

- Content is **hard-coded in TSX** — there is no CMS. This keeps the site fully
  self-contained and trivially deployable.
- To edit copy: open the relevant file in `src/components/sections/` and edit the
  strings / arrays in place.
- To reorder or rename sections: edit `src/data/sections.ts` (and the import
  order in `src/app/page.tsx`).
- Design tokens (colours, type scale) live in `src/app/globals.css`. The brand
  palette uses `--kc-*` (Kaizer Chiefs gold/ink) and `--bx-*` (Bitexen blue).
