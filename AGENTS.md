# we-move-site

Guidance for Claude Code when working in this repository. See the monorepo root `../CLAUDE.md` for cross-project conventions (this file covers only this project).

## What this is

Static institutional/marketing website ("vitrine") for We Move — a university transport management system. This site targets **prospects** (universities, outsourced transport operators, student associations), not existing product users. No auth, no offline support, no real-time features.

Built with **Astro, deliberately without React** — the site has no complex client state, so shipping a component framework would be over-engineering. Interactivity (mobile hamburger menu, FAQ accordion, forms) is plain `<script>` JS per component.

## Commands

```bash
npm run dev        # Astro dev server (self-daemonizes — see "Development" below)
npm run build      # astro build (static output to dist/)
npm run preview    # preview built output
```

## Architecture

- **Pages** (`src/pages/`): Início (`index.astro`), Como funciona, Para quem é, Sobre nós, Depoimentos/Cases, Contato — all wrapped by `src/layouts/BaseLayout.astro`.
- **`BaseLayout.astro`**: fixed header (`Header.astro`) with CTAs "Entrar em contato" and "Agendar uma apresentação" always visible (including mobile), institutional footer (`Footer.astro`) linking to Sobre nós and FAQ, floating WhatsApp button (`WhatsAppButton.astro`).
- **`src/config/site.ts`**: central config — `SITE_NAME`, `SITE_TAGLINE` ("Feito por estudantes, para estudantes"), `SHOW_CASES` flag, `API_URL`, `WHATSAPP_NUMBER`/`WHATSAPP_LINK`, `NAV_LINKS`.
- **Design tokens** (`src/styles/tokens.css`): brand/gray/error/success/warning color scales, copied verbatim from `we-move-admin/src/index.css` as a local, non-imported copy — the four projects are independent repos, so this is intentionally duplicated rather than shared.
- **Forms** (`src/components/LeadForm.astro`): contact and presentation-request forms; submit via `fetch` (must include `Accept: application/json` — the backend redirects instead of returning JSON on validation failure without it) to the backend's public `POST {PUBLIC_API_URL}/v1/institutional/leads`; includes a hidden honeypot field (`_website`, `sr-only`) for spam filtering; no auth, no CRM integration yet — leads are just persisted.

## Cases section toggle

The Depoimentos/Cases page (`src/pages/cases.astro`) has no real client content yet. It's controlled by `PUBLIC_SHOW_CASES` (env var, read in `src/config/site.ts`):
- `true` (default): section/nav link visible — used for internal demos to colleagues.
- `false`: nav/footer link hidden, but the page remains reachable by direct URL (`/cases`) either way.

**Must be set to `false` in production** before any real launch, until real client testimonials exist.

## Environment variables

See `.env.example`:
- `PUBLIC_API_URL` — backend base URL for the lead forms (e.g. `http://localhost/api`)
- `PUBLIC_SHOW_CASES` — `true`/`false`, see above
- `PUBLIC_WHATSAPP_NUMBER` — digits only, used to build the `wa.me` link

## Conventions

- No React/UI framework — plain `.astro` components + vanilla `<script>` for interactivity.
- Tailwind v4 via `@tailwindcss/vite` (not `@astrojs/tailwind`, which targets v3).
- `@/` import alias maps to `src/` (see `tsconfig.json`).
- All user-facing copy in Portuguese.
- Prefer editing existing `.astro` components over introducing new abstractions — this is a small, mostly-static site.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
