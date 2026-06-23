# Rebuild MangoBliz as Vite + React SPA for GitHub Pages

Scrap the current TanStack Start setup and rebuild as a clean single-page React app that deploys cleanly to GitHub Pages and maps to `mangobliz.com`. The build errors you keep seeing come from TanStack Start's prerender step — removing that stack removes the whole class of errors.

## What gets removed
- `src/routes/` (TanStack file-based routing), `src/router.tsx`, `src/start.ts`, `src/routeTree.gen.ts`
- `vite.config.ts` TanStack plugin config, all server functions (`src/lib/api/*.functions.ts`, `*.server.ts`)
- `.github/workflows/deploy.yml` (current broken one), `public/.nojekyll` placement, existing `CNAME` files
- Supabase/auth integration files (not needed for static marketing site)

## What gets built (fresh)

**Stack**
- Vite 7 + React 19 + TypeScript (strict)
- Tailwind v4 (kept from current project, simplified `src/styles.css`)
- `react-router-dom` v6 with `HashRouter` — required so GitHub Pages never 404s on refresh/deep links (no server rewrites available)
- `framer-motion` for scroll/hover animations
- `lucide-react` icons (already installed)

**Folder structure**
```text
src/
  main.tsx              # ReactDOM root + HashRouter
  App.tsx               # Single-page layout, all sections stacked
  styles.css            # Tailwind v4 + design tokens
  components/
    Navbar.tsx          # Sticky glass nav, smooth-scroll to sections
    Hero.tsx            # Gradient + glass + floating mango
    About.tsx
    Products.tsx        # Grid of mango variety cards
    WhyChooseUs.tsx     # Feature grid with icons
    Testimonials.tsx    # Carousel/grid of reviews
    Contact.tsx         # Form (mailto:) + details
    Footer.tsx
    ui/Section.tsx      # Shared section wrapper w/ scroll animation
  assets/               # Generated hero + product images (jpg)
public/
  CNAME                 # mangobliz.com
  .nojekyll
index.html              # Single entry, correct <title>/meta/OG
vite.config.ts          # base: './'  (works for both project pages and custom domain)
.github/workflows/deploy.yml
```

**Design direction (MangoBliz branding preserved)**
- Palette: deep mango `#F59E0B` → `#EA580C` gradients, cream `#FFFBEB` background, leaf green `#15803D` accents, ink `#1C1917` text
- Glassmorphism cards: `backdrop-blur-xl bg-white/60 border border-white/40`
- Hero gradient: radial mango-orange glow on cream; floating mango illustration with `framer-motion` y-axis loop
- Scroll reveals: `whileInView` fade+rise on every section
- Hover: scale 1.03 on product cards, gradient shimmer on CTAs
- Fonts via `@fontsource/fraunces` (headings) + `@fontsource/inter` (body)
- Fully responsive (mobile nav drawer, fluid grids `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)

**Sections** (single-page, smooth-scroll anchors)
1. Hero — headline, sub, two CTAs, floating mango visual
2. About — story + stat strip (orchards, varieties, years)
3. Products — 6 mango variety cards (Alphonso, Kesar, Banganapalli, Dasheri, Himsagar, Sampler) with generated images
4. Why Choose Us — 4 feature tiles (farm-fresh, hand-picked, cold-chain, satisfaction guarantee)
5. Testimonials — 3 customer quote cards
6. Contact — name/email/message form (mailto submit) + phone/email/address
7. Footer — brand, quick links, social, copyright

**GitHub Pages config**
- `vite.config.ts`: `base: './'` so assets resolve under both `mangobliz.com/` and any project-page subpath
- `HashRouter` (URLs like `/#/about`) — guarantees zero 404 on refresh, no `404.html` hack needed
- `public/CNAME` containing `mangobliz.com`
- `public/.nojekyll` so Vite's `_`-prefixed assets serve
- `.github/workflows/deploy.yml`: on push to `main`, runs `bun install && bun run build`, uploads `dist/` via `actions/upload-pages-artifact@v3`, deploys via `actions/deploy-pages@v4`. Uses `permissions: pages: write, id-token: write` and the `github-pages` environment.

**Assets**
- Generate hero mango illustration + 6 product photos via `imagegen` (jpg, optimized sizes)
- No external image hosts

**Build validation**
- Run `bun run build` after wiring everything
- Fix any TS/ESLint errors that surface (strict mode on)
- Verify `dist/index.html` exists and `dist/assets/*` are referenced with relative paths

## Notes for you
- Once merged to `main`, in your GitHub repo go to **Settings → Pages → Source: GitHub Actions**. The workflow handles the rest.
- DNS for `mangobliz.com`: at your registrar add A records `185.199.108.153`, `.109.153`, `.110.153`, `.111.153` pointing `@` to GitHub Pages, and a `CNAME` for `www` → `<your-github-username>.github.io`.
- The Lovable in-app preview will still work but won't reflect the GitHub Pages base path — the deployed site is the source of truth.
