# Tracking Plan

> Status: **placeholders only.** No analytics or tracking is wired up in the
> current build. This document describes the intended setup for when measurement
> is approved.

## Google Analytics (placeholder)

- **Intended:** GA4 via `@next/third-parties` `GoogleAnalytics` component or a
  `<Script>` tag in `src/app/layout.tsx`.
- **Measurement ID:** store as `NEXT_PUBLIC_GA_ID` (see `DEPLOYMENT.md` for env
  var management). Render only when the ID is present.
- **Not yet added** — no GA script ships in the current build.

## Event tracking (placeholder)

Candidate events once analytics is enabled:

| Event              | Trigger                                            |
| ------------------ | -------------------------------------------------- |
| `unlock_success`   | Correct access code entered on the lock screen      |
| `unlock_failed`    | Incorrect access code entered                       |
| `section_view`     | A section scrolls into view (IntersectionObserver)  |
| `nav_click`        | Header dropdown or side-rail link clicked           |
| `cta_click`        | Hero CTA ("Explore the proposal" / "Let's build it together") |

Implementation note: the side-rail and reading-progress already use scroll/
IntersectionObserver logic that `section_view` could hook into.

## Form submission tracking (placeholder)

- **No forms exist** in the current scope (see `SCOPE.md`).
- If a contact / interest form is added later, track `form_submit` with the
  form name and outcome (success/error).

## Vercel Analytics (option)

- **Recommended lightweight option:** Vercel Web Analytics + Speed Insights.
- Enable in the Vercel project dashboard, then add the `@vercel/analytics` and
  `@vercel/speed-insights` React components to `layout.tsx`.
- Privacy-friendly and requires no cookie banner for basic page metrics.

## Conversion goals (placeholder)

Primary "conversions" for a proposal site are engagement signals, not purchases:

- **Engaged read:** reached the **Conclusion** section (`#conclusion` in view).
- **Full scroll:** reading-progress reaches ~100%.
- **Return visit:** unlocked session (localStorage `bitexen_kc_v2_unlocked`).

Define exact thresholds with stakeholders before instrumenting.
