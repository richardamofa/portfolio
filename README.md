# Richard Amofa — Portfolio

A production-quality personal portfolio built with React, TypeScript, Vite, Tailwind CSS v4, Framer Motion, React Router, and Lucide React.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/   Navbar, Footer, SectionHeading, Reveal, ScrollManager
  sections/     Homepage sections (Hero, Ownership, SelectedWork, Systems, ...)
  pages/        Route-level pages (Home, Work, WorkDetail, Thinking, About, Contact, NotFound)
  data/         Content as typed data (projects, articles, experience, principles, capabilities, systems)
  types/        Shared TypeScript interfaces for the data layer
  hooks/        useScrolled — scroll-position hook for the navbar
  lib/          useSeo — lightweight per-page document title/meta helper
```

Case studies, articles, experience, and repos are all plain TypeScript data objects in `src/data/` — nothing is hardcoded into JSX, so adding a new case study or note means adding an entry to the relevant file, not touching a component.

## Before you deploy — replace these placeholders

Real personal details weren't available when this was built, so the following are intentionally left as clearly marked placeholders rather than invented:

- **`src/data/experience.ts`** — real company/organization names, roles, dates, and impact bullets.
- **`src/data/experience.ts` (`repos`)** — real GitHub repo names, descriptions, and URLs.
- **`src/pages/Contact.tsx`** — the real email address (currently `hello@example.com`), and wiring the form's `handleSubmit` up to a real endpoint (Formspree, a serverless function, etc. — it currently only simulates success).
- **`src/pages/About.tsx`** — the photo placeholder block, and the bracketed detail line (location, current focus, education, etc.).
- **`src/components/Footer.tsx` / `Contact.tsx`** — real GitHub and LinkedIn URLs (currently placeholder links).
- **`src/data/projects.ts`** — the three case studies describe realistic, technically detailed systems but are written as generalized/placeholder examples rather than claims about specific real employers. Swap in your real projects, or replace the two bracketed metric callouts (`[Add real production metrics here...]`) with real numbers once you have them.
- **`index.html`** — swap `og-image.png` for a refreshed version if you change the headline copy, and update the canonical domain once it's live.

## Design notes

- Palette, type system, and the floating "capsule" navbar follow the original brief exactly (monochrome, no accent color).
- Fonts (Space Grotesk / IBM Plex Sans / IBM Plex Mono) load from Google Fonts via `index.html` — swap for self-hosted files if you'd rather not depend on that.
- Motion respects `prefers-reduced-motion` globally (see `src/index.css`).
# portfolio
