![Vendr Roadmap](docs/vendr-roadmap-current.svg)

# SV — VNTA Subsidiary (SvelteKit)

This repository contains a **SvelteKit project scaffolded with [`sv`](https://github.com/sveltejs/cli)** and maintained as a **subsidiary of VNTA (Vantanéant International)**.

The project adheres to VNTA’s principles of restraint, clarity, and long-term maintainability.
All technical and design decisions are intentional and aligned with holding-company standards.

---

## Relationship to VNTA

**VNTA (Vantanéant International)** is the parent holding company.
This repository represents a **subsidiary implementation** operating under VNTA’s brand, technical, and philosophical direction.

> Design systems, tone of voice, and structural decisions are governed by the
> **VNTA Brand Guidelines (Felixto Brandworks, v1.0)** — not included in this repository.

---

## Tooling Overview

* **Framework:** SvelteKit
* **Bundler:** Vite
* **Scaffolding:** [`sv`](https://github.com/sveltejs/cli)
* **Styling:** Bespoke CSS (no Tailwind, no UI kits)
* **Approach:** Minimal, explicit, maintainable

---

## Creating a Project (sv)

If this repository was not already scaffolded, `sv` can be used as follows:

```sh
# create a new project in the current directory
npx sv create

# create a new project in a specific directory
npx sv create my-app
```

---

## Requirements

* **Node.js:**
  SvelteKit expects **Node ^20.19 or ^22.12 (LTS recommended)**
  Current environments may work on Node 21.x with `--ignore-engines`, but upgrading to **Node 22 LTS** is advised.

---

## Install

```sh
npm install --ignore-engines
```

---

## Developing

Start the local development server:

```sh
npm run dev
```

Open automatically in a new browser tab:

```sh
npm run dev -- --open
```

---

## Building

Create a production build:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

> Deployment may require a SvelteKit adapter appropriate to the target environment.
> See the SvelteKit adapter documentation.

---

## Project Structure Notes

* **Favicon:** `static/favicon.svg`
* **Primary page:** `src/routes/+page.svelte`
* **Global layout / fonts:** `src/routes/+layout.svelte`
* **Contact:** `mailto:hello@vendr.ie`
* **Styling:** No utility frameworks — spacing and layout are deliberate

---

## Vendr — design system & build notes

Executed to the **Felixto Brand Guidelines v1.0** (the law), with structure/interaction
ideas taken from the static HTML wireframes. Two scoped exceptions only.

### Typography

* **Andale Mono** runs everything — body, lede, eyebrows, labels, data rows, UI, buttons.
  Single weight. Web-served fallbacks (`JetBrains Mono`, `IBM Plex Mono`) ship in `app.html`
  since Andale isn't a Google webfont; the stack lives in `--mono`.
* **Newsreader** (one editorial serif) is permitted for **large display headlines only**
  (`.display`, ≥28px) and never for body/labels/UI. Token: `--serif`.
* The **`vendr.` wordmark** is the bold-sans logotype (the sole brand identifier — no symbol).

### Tokens

One source: [`src/app.css`](src/app.css). Palette (`--bg --ink --warm --grey` + line alphas),
type scale (`--t-64/48/36/24`), and a spacing scale (`--s-4/8/16/24/40/64/96/160`).
Components import tokens only — none redefine them.

### Site modes (feature flag)

The home route switches between three states via the build-time flag `PUBLIC_SITE_MODE`:

```
PUBLIC_SITE_MODE = coming_soon | maintenance | live      # default: coming_soon
```

Set it in `.env` (see `.env.example`) for local dev, or in the GitHub Actions build step
for production. The site is statically prerendered, so a mode change requires a redeploy
(automatic on push to `main`, ~1–2 min). Sections live in `src/lib/sections/`.

### Brand assets

* **Favicon:** `static/favicon.svg` — `v.` wordmark, warm off-white on black.
* **OG card:** `static/og.png` (1200×630, near-mono). Source: `assets/og.svg` →
  `rsvg-convert -w 1200 -h 630 assets/og.svg -o static/og.png`.
* **Wordmark:** `static/wordmark.png` — **drop the official Felixto `vendr.` logotype here**
  (warm off-white on transparent). A Helvetica placeholder currently ships; the
  `Wordmark` component reads `/wordmark.png` and sizes by height.

> **Admin panel** is intentionally NOT in this static repo — it needs real auth, which
> GitHub Pages can't provide. Planned as a separate Supabase-backed app.

---

## Roadmap / Checklist

### Brand & Content

* [x] VNTA holding-company positioning
* [x] Restrained tone of voice
* [x] Motto integrated conceptually (*ex nihilo, nihil fit*)
* [x] Finalise hero statement
* [x] Lock CTA microcopy
* [x] Add legal entity reference where required

### Design

* [x] Black / white palette only
* [x] Typography aligned with brand guidelines
* [x] Confirm licensed Optima web font or substitute
* [x] Finalise vertical rhythm
* [x] Define button states

### Technical

* [x] SvelteKit + Vite configured
* [x] Lightweight build (no Tailwind)
* [x] Accessibility pass
* [x] SEO baseline (meta, canonical)
* [ ] OpenGraph placeholders
* [ ] Production build validation

### Launch

* [x] Connect production domain
* [x] Enable HTTPS
* [x] Configure production environment variables
* [ ] Replace “Coming Soon” with soft-launch content
* [ ] Archive v1 snapshot

---

## Philosophy

> VNTA exists at the intersection of **structure and creation**.
> We build the invisible systems that allow brands to endure.

---

## Brand Assets & Guidelines

* Official VNTA Brand Guidelines are **not included**
* Proprietary assets remain private
* Public consistency is enforced through implementation, not distribution

---

## Notes

* Favicon lives at `static/favicon.svg`
* Contact link: `hello@vendr.ie`
* Update this README as the subsidiary evolves
