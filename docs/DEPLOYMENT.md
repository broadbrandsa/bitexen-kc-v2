# Deployment

## GitHub repository

- **Repo:** https://github.com/broadbrandsa/bitexen-kc-v2
- The project root **is** the repository root (no monorepo, no nested app dir).

First push (from inside `bitexen-kc-v2/`):

```bash
git init
git add -A
git commit -m "Initial commit — Kaizer Chiefs × Bitexen proposal site"
git branch -M main
git remote add origin https://github.com/broadbrandsa/bitexen-kc-v2.git
git push -u origin main
```

## Vercel project setup

Import the GitHub repo at https://vercel.com/new and use these settings:

| Setting             | Value                          |
| ------------------- | ------------------------------ |
| Framework preset    | **Next.js** (auto-detected)    |
| Root directory      | **`./`** (repository root)     |
| Build command       | `pnpm build`                   |
| Install command     | `pnpm install`                 |
| Output directory    | **leave blank** (Next.js default) |
| Node.js version     | 20.x (or project default)      |

> Do **not** add a `vercel.json` unless a specific override is required — the
> Next.js preset handles everything by default.

## Root directory rules

- The Next.js app, `package.json`, and `pnpm-lock.yaml` all live at the repo
  root. Vercel's root directory must therefore stay `./`.
- Do not point Vercel at a subfolder.

## Build command

- **Build:** `pnpm build` → runs `next build`.
- **Install:** `pnpm install` (a `pnpm-lock.yaml` is committed for reproducible
  installs; Vercel auto-detects pnpm from it).
- **Dev (local):** `pnpm dev` → serves on `http://localhost:3002`.

## Environment variable management

- **None are required** for the current build (the site is fully static content
  with a client-side lock screen).
- When analytics is added (see `TRACKING_PLAN.md`), set public vars in the Vercel
  dashboard under **Settings → Environment Variables**, e.g.:
  - `NEXT_PUBLIC_GA_ID` — GA4 measurement ID.
- Prefix browser-exposed vars with `NEXT_PUBLIC_`. Never commit secrets; `.env*`
  is gitignored.

## How to redeploy

- **Automatic:** every push to `main` triggers a production deployment; pushes to
  other branches and PRs get preview deployments.
- **Manual:** in the Vercel dashboard, open the project → **Deployments** →
  **Redeploy** on the desired commit.
- **CLI:** `vercel --prod` from the project root (requires the Vercel CLI and a
  linked project).

## Note on access

The site is gated by a client-side lock screen (access code **1970**). This is a
soft gate for private sharing, **not** a security boundary — all content ships in
the client bundle. Do not rely on it to protect genuinely sensitive material.
