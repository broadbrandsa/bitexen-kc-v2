# Scope

## Pages included

- **`/`** — the single-page proposal (lock-screen gated). All content lives here
  as a long-form scroll.

## Sections included

Rendered in order on the home page (see `src/data/sections.ts`):

1. **Hero** — title and Bitexen × Kaizer Chiefs partnership lockup (in association with DSG).
2. **About Bitexen** — experience, scale, vision.
3. **The Changing Game** — spectatorship shift (watch → engage → participate).
4. **The Opportunity** — today's vs tomorrow's commercial model.
   - _Interstitial — "The thesis."_
5. **Why Kaizer Chiefs** — existing strengths and audience scale.
6. **The Digital Fan Economy** — the participation cycle.
7. **Why a Token** — the token as ecosystem infrastructure.
8. **Launching the Economy** — what the launch achieves.
9. **How the Ecosystem Creates Value** — the four-layer value model.
10. **New Revenue Streams** — opportunity/benefit table + commercial flywheel.
11. **Value for Everyone** — stakeholder benefits (commercial, supporters, sponsors, club).
12. **The Growth Engine** — the value flywheel.
13. **The Business Case** — the MOSO 12-month model: KPIs, P&L chart, assumptions, milestone table, downloadable XLSX.
14. **Building Long-Term Value** — lessons learned + our approach.
15. **Bringing It to Life** — matchday, rewards, community, sponsor experiences.
16. **Beyond Fan Engagement** — club growth, exclusive access, recognition, future.
    - _Interstitial — "A reminder" (mobile-first, invisible technology)._
17. **Strategic Alignment** — Bitexen as long-term ecosystem partner.
18. **How Bitexen Enables It** — the underlying infrastructure.
19. **Why Bitexen** — KC × Bitexen capability comparison.
20. **The Bigger Vision** — the long-term roadmap.
21. **Conclusion** — synthesis + "Let's build it together" / working-session next step.

## Navigation & UX

- Sticky header with a chapter/contents dropdown and "Download PDF" (print).
- Hover-to-expand left side-rail with active-section tracking.
- Top reading-progress bar.
- Lock screen (access code **1970**).
- Print/PDF stylesheet for a clean A4 export.

## Excluded (out of scope)

- Authentication beyond the static lock screen.
- CMS / dynamic content — content is hard-coded in section components.
- Forms, lead capture, or backend services.
- Live/connected data feeds or interactive financial-model calculators (the Business Case shows a fixed, pre-computed model with a downloadable source workbook).
- Multi-language support.
- A full annex / document library (the only downloadable asset is the Business Case workbook).

## Launch milestones

1. **M0 — Build complete:** site builds locally (`pnpm build`) and renders all sections.
2. **M1 — Deployed to Vercel:** preview URL live behind the lock screen.
3. **M2 — Internal review:** Bitexen sign-off on content and design.
4. **M3 — Shared with Kaizer Chiefs:** access code distributed to stakeholders.
5. **M4 — Post-feedback iteration:** refine based on discussion outcomes.
