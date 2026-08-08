# CONTEXT.md — internal orientation notes

Internal working notes for the GRMI official website repo. Not user-facing docs — see
`README.md` for the contributor-facing setup instructions. Written 2026-08-08 against
`main` @ `7787944`.

---

## 1. What this is

The public marketing/content website for **GRMI — Geohazards Risk Mapping Initiative**, a
non-profit doing flood and geohazard risk mapping in Africa (primarily Nigeria, plus Ghana).
The site exists to publish the organisation's work: flood extent maps, dashboards, research
papers, news coverage, awards, events, and a schools/children outreach programme
("Children & Disaster").

It is a **content-only single-page app**. There is no backend, no auth, no database, and no
API layer in this repo. Every piece of "data" is either hardcoded in `.vue`/`.js` files or
embedded from a third-party service (ArcGIS, Google Earth Engine, Cloudinary, YouTube).

## 2. Stack

| Concern | Choice |
| --- | --- |
| Framework | Vue 3 (SFC, `<script setup>`, Composition API) |
| Build | Vite 4 (`@vitejs/plugin-vue`, `@vitejs/plugin-vue-jsx`) |
| Routing | vue-router 4, `createWebHistory` |
| State | Pinia — one tiny store, barely used (`src/store/store.js`) |
| Head/SEO | `@vueuse/head` via `src/utils/usePageHead.js` |
| Styling | Tailwind CSS 3 **plus** hand-written SCSS **plus** scoped `<style>` blocks |
| Animation | AOS, ScrollReveal (`vue-scroll-reveal`), animate.css (CDN) |
| UI bits | `@headlessui/vue`, `vue3-carousel` |
| Forms | `emailjs-com` (client-side email, no server) |
| Analytics | Google Analytics gtag, hardcoded in `index.html` (`G-ZRES4EZMMR`) |
| Hosting | Vercel (`vercel.json` rewrites everything to `/index.html`) |

Node modules are **not** installed in this working copy — run `npm install` first.

## 3. Branching & deploy

From `README.md`, confirmed by the git history (every commit on `main` is a merge of `dev`):

- `main` → **live** site
- `dev` → **test/staging** site
- Feature branches are cut from `dev` and merged back via PR.

`origin` is `github.com/Georiskmap22/official-website`. Design source of truth is a Figma
file linked at the bottom of `README.md`.

## 4. Layout of `src/`

```
src/
  main.js              app bootstrap: pinia, router, @vueuse/head, AOS.init()
  App.vue              nothing but <router-view />
  router/index.js      all 16 routes, flat, no guards, no nested routes
  store/store.js       Pinia `frames` store — controls the map iframe modal only
  views/               HomeView.vue (the homepage composition). AboutView.vue is dead.
  pages/               one component per route; each renders its own <Navbar>/<Footer>
  components/          section components + shared UI
    Buttons/ Cards/ Dropdowns/ carousel/ icons/ modals/ sections/ ui/
  utils/               hardcoded content arrays + the usePageHead helper
  assets/              icons/, img/, maps/, styles/
```

**There is no layout component.** Every page imports and renders `Navbar` and `Footer`
itself. Adding a route means remembering to do the same.

`components/sections/` (Header, SectionOne…SectionSeven) belongs exclusively to the
**Children & Disaster** page (`pages/schools/Homepage.vue`) — the names are generic but the
content is not reusable.

## 5. Routes

| Path | Component | Notes |
| --- | --- | --- |
| `/` | `views/HomeView.vue` | eagerly imported |
| `/about` | `pages/AboutUs.vue` | |
| `/team` | `pages/Team.vue` | route exists but is commented out of the nav |
| `/cartographic-maps` | `pages/Projects/CompletedProjects.vue` | nav label "Cartographic Map" |
| `/ongoing-projects` | `pages/Projects/OngoingProject.vue` | not linked from nav |
| `/proposed-projects` | `pages/Projects/ProposedProjects.vue` | not linked from nav |
| `/dashboard` | `pages/Dashboard.vue` | nav label "Past Flood Events" |
| `/career` | `pages/Career.vue` | commented out of the nav |
| `/news` | `pages/Insights.vue` | **name mismatch**: route `/news` → `Insights.vue` |
| `/events` | `pages/EventsPage.vue` | |
| `/research` | `pages/Research.vue` | |
| `/floodMaps` | `pages/FloodEvent.vue` | nav label "Webmap & StoryMap"; camelCase path |
| `/awards` | `pages/Awards.vue` | |
| `/reports` | `pages/Reports.vue` | |
| `/gallery` | `pages/Gallery.vue` | largest page, 514 lines |
| `/Children&Disaster` | `pages/schools/Homepage.vue` | literal `&` in the path |

`Insights.vue` is imported eagerly alongside `HomeView`; every other page is lazy
(`() => import(...)`). There is **no catch-all / 404 route** — unknown paths render a blank
`<router-view>` because Vercel serves `index.html` for everything.

## 6. Navigation

The navbar is data-driven from two files, both plain arrays:

- `src/utils/NavConstants.js` — internal router links, grouped into dropdowns
  (About Us / Projects / Data / Knowledge). Large blocks are commented out: Services,
  Partners, Team, News-and-media, Career.
- `src/utils/CustomNavConstant.js` — **external** links, rendered by `CustomDrop.vue`
  instead of `Drop.vue`. Currently just the Google Earth Engine flood-extent apps for
  Ghana and Nigeria.

`Navbar.vue` renders `Drop` for the first list and `CustomDrop` for the second; below the
`break` breakpoint (`max-width: 1058px`) it swaps to `MobileNav.vue`. The "Report Flood"
button is a hard link to an ArcGIS Survey123 form.

## 7. Content & data

All content lives in the repo or in third-party embeds:

- `src/utils/AppsData.js` — flood-map catalogue (state / LGA / country / `map_url` /
  local placeholder image). Feeds `AppsAndData.vue` and the carousel.
- `src/utils/data.js` — partner logos.
- Everything else (team bios, awards, articles, events, gallery) is inlined in the page
  component's `<template>`/`<script>`.

External hosts referenced from `src/` (counts are occurrences):

- `res.cloudinary.com` (~213) — the main image CDN for map outputs, under the `waleszn`
  Cloudinary account.
- `upcdn.io` — a second, inconsistent image CDN used for a handful of maps.
- `arcgis.com` / `storymaps.arcgis.com` / `survey123.arcgis.com` — dashboard iframe,
  story maps, flood-report form.
- `*.projects.earthengine.app` — Google Earth Engine flood-extent viewers.
- `youtube.com` — embedded videos.
- News outlets (BusinessDay, Vanguard, Tribune, New Telegraph, The Africa Report, ICIR,
  Medium) — outbound press links.
- UNDRR / PreventionWeb / UN / YouthMappers / ResearchGate — partner and publication links.

Images are duplicated between `src/assets/` (bundled, hashed) and `public/` (copied
verbatim, ~108 tracked files). Which one a component uses is inconsistent — check before
adding a new asset.

## 8. Styling

Three overlapping systems, in practice all three are in use at once:

1. **Tailwind** — the primary one. Custom theme in `tailwind.config.js`: brand colours
   (`brandgreen #134A39`, `primary500 #2DB187`, `foundation #207E60`, `lightgreen`,
   `brandgray`, `tertiary`), custom `gridTemplateColumns` (`temp`…`temp6`, `customGrid*`),
   custom fonts (`cabin`, `merri`), and **custom max-width breakpoints**:
   `mob ≤600`, `midDesk ≤800`, `tab ≤900`, `tab3`/`break` ≤1058, `break2` ≤1030,
   `tab2` ≤1200, plus min-width `break3 ≥1030`, `desk ≥900`, `window ≥1300`.
   Note these are mostly **max-width** — they are not Tailwind's normal mobile-first
   `sm/md/lg`, so `tab:hidden` means "hidden on small screens".
2. **SCSS** — `src/assets/styles/App.scss` and partials, imported per-page. The design-token
   partial `style-assets/_colors.scss` is **entirely commented out**; the palette lives in
   `tailwind.config.js` instead.
3. **Scoped `<style>`** blocks in individual components, often containing large commented-out
   chunks.

`animate.css` classes (`animate__animated animate__fadeInDown`) come from a CDN link in
`index.html`, not from a package.

## 9. Head / SEO

`src/utils/usePageHead.js` wraps `@vueuse/head` and prefixes every title with `GRMI | `.
Call it at the top of a page's `<script setup>`:

```js
usePageHead({ title: '…', description: '…', keywords: ['GRMI', '…'] })
```

Currently used by: AboutUs, Insights, CompletedProjects, schools/Homepage, Awards, Gallery,
Dashboard, EventsPage, FloodEvent, Reports, Research.

**Not** used by: HomeView, Team, Career, OngoingProject, ProposedProjects — those fall back
to the static `<title>` in `index.html`, which `main.js` also re-sets imperatively on mount.

## 10. Forms

Both forms use EmailJS directly from the browser. Service/template/public keys are
**hardcoded in source** (`service_8r4m70n`, `template_f7qkatb`, public key
`qMdxhbqTaNmmFVE2s`). There is no `.env` file and no `import.meta.env` usage anywhere.
EmailJS public keys are designed to be client-visible, so this is not a secret leak, but it
does mean rotating them is a code change and the endpoint is open to abuse.

- `components/GetInvolved.vue` — the live one, on the homepage. Validates that name and
  email are non-empty, then `emailjs.sendForm(service, template, '#myForm', publicKey)`.
  The `sendForm` promise is **not awaited** and the "success" state is a hardcoded 2 s
  `setTimeout` — the UI reports success regardless of whether the send actually worked.
- `components/modals/GetInvolvedModal.vue` — **dead code**, its only usage in
  `GetInvolved.vue:111` is commented out. Its `sendForm` call is also malformed: it passes
  a template-params object where the 4th argument should be the public key.
- `components/modals/SubscribeNewsletterModal.vue` — rendered by `Footer.vue`.

## 11. Known rough edges

Things to be aware of before changing anything:

- **`dist/` is committed.** `.gitignore` has `# dist` commented out, so 248 build artefacts
  are tracked. Builds produce noisy diffs. Vercel builds from source, so the checked-in
  `dist/` serves no purpose and is almost certainly stale.
- **`tailwindcss()` is registered as a Vite plugin** in `vite.config.js` *and* as a PostCSS
  plugin in `postcss.config.js`. Tailwind 3 is a PostCSS plugin, not a Vite plugin — the
  `vite.config.js` entry is a no-op at best. PostCSS is what actually does the work.
- **ScrollReveal is loaded twice** — a `<script src="unpkg.com/scrollreveal">` in
  `index.html` and the `scrollreveal`/`vue-scroll-reveal` npm packages.
- **Three animation libraries** (AOS, ScrollReveal, animate.css) are used side by side, with
  AOS durations on `HomeView` stepped 1000→7000 ms to fake a stagger.
- **Dead files**: `pages/bloobb.vue`, `pages/NewsAndMedia.vue`, `pages/Waterlevel.vue`,
  `views/AboutView.vue`, `components/sections/Sample.vue`,
  `components/modals/GetInvolvedModal.vue`. None are routed or imported.
- **`Dashboard.vue` fakes loading** with a 3 s `setTimeout` before revealing the ArcGIS
  iframe; the spinner is unrelated to the iframe's real load state.
- **No tests, no CI, no type checking.** ESLint (`vue3-essential` + prettier skip-formatting)
  and Prettier are configured but must be run manually; `npm run lint` auto-fixes.
- Route paths are inconsistently cased (`/floodMaps`, `/Children&Disaster`) and one route
  name doesn't match its component (`/news` → `Insights.vue`).
- Duplicate `id` values exist in `NavConstants.js` link arrays (used as `:key`).

## 12. Commands

```sh
npm install       # required — node_modules is not present
npm run dev       # Vite dev server on port 3000
npm run build     # production build into dist/  (note: dist/ is tracked in git)
npm run preview   # serve the built output
npm run lint      # eslint --fix over .vue/.js/.jsx/.cjs/.mjs
npm run format    # prettier --write src/
```

## 13. Adding things — the local conventions

- **New page**: create `src/pages/Foo.vue`, import `Navbar` + `Footer` inside it, register a
  lazy route in `src/router/index.js`, call `usePageHead({...})`, and add a link to
  `src/utils/NavConstants.js` (or `CustomNavConstant.js` if it's an external URL).
- **New section on the homepage**: create `src/components/Foo.vue` and add it to
  `views/HomeView.vue`, giving it a `data-aos` duration one step above the previous section.
- **New image**: prefer `src/assets/` with a relative `import`/`src="../assets/..."` so it
  gets hashed by Vite. `public/` is only for things referenced by absolute path string.
- **Styling**: use Tailwind classes with the custom theme tokens above. Remember the
  breakpoints are max-width — desktop-first.
