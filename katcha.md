# katcha.md — build plan for the Katcha Ward page

Internal plan for a single new page documenting the GRMI Katcha Ward mission
(FARO 67 seed handover + Sentinel-1 flood assessment, Niger State, July 2026).

Design brief: **reuse the Children & Disaster page's design language and composition
logic exactly**, swap in Katcha content, use the real field photos and map sheets, and
leave explicit placeholders where the assets don't exist yet (press scatter, articles,
videos).

Source material: `Katcha photos/` (28 photos, 12 map sheets as PNG + PDF, 4 .docx).

---

## 1. Source audit — what actually exists

### 1.1 Documents (`Katcha photos/*.docx`)

| File | What it is | Use |
| --- | --- | --- |
| `GRMI_Katcha_Field_Report.docx` | Full technical field report — exec summary, key figures, methodology, results, Sendai mapping, recommendations | Primary source for all page copy and statistics |
| `Katcha_Ward_FARO67_Field_Report (2).docx` | Earlier/parallel version of the same report | Cross-check only |
| `How Satellite Flood Maps and a Submergence-Tolerant Rice…docx` | Two **unpublished** press-article drafts ("Newspaper" and "Geospatial - B") with attributed quotes | Source of the three pull-quotes; confirms the Articles section must be a placeholder |
| `16 Weeks GRMI Katcha Social Media Posts.docx` | 16-week campaign calendar, LinkedIn/Instagram/X copy | Source of the campaign line **#OutlastTheFlood** and short-form phrasing |

### 1.2 Key figures (verbatim from the field report, "Key Figures at a Glance")

- Seed: **FARO 67**, submergence-tolerant, carries the **SUB1A** gene
- **200 kg** distributed to **20 farmers** at **10 kg** each (Katcha Ward Farmers' Association)
- Ward area assessed: **8,891 ha** (~88.9 km²); GRID3 authoritative boundary is **11,002 ha**
- Rice cropland: **~65%** of the ward (52.4% rice field + 12.8% flooded rice field)
- Flood analysis period **2020–2025**, Sentinel-1 C-band SAR (Copernicus)
- Mapped annual flood extent: **12.61 → 13.27 km²** (peak 13.74 km² in 2023)
- Stage exposure: **52%** of ward cropland exposed at 0.5 m, **69%** at 2 m, **86%** at 10 m
- Hazard: **4,109 ha** of cropland in the top two hazard classes (76% of classified cropland)
- Context: 2024 rains put **118,000+ ha** of Niger State farmland under water, affecting **41,000+** people; the 16 April 2025 Jebba Dam release hit **30+ communities**, **5,000+ farmers**, **10+ deaths**

### 1.3 Photographs (28 usable)

| Group | Files | Content |
| --- | --- | --- |
| Workshop & handover | `DSC_0869`–`DSC_0894` (25 files, 2256×1496 mostly) | Classroom sensitization workshop, chalkboard, seed bags being handed over, farmers seated, group photo with 10 kg packs |
| Floodplain | `1783695274374.jpg`, `1783695274583.jpg`, `1783695274668.jpg` (3000×4000+) | GRMI staff on a canoe on the River Niger, wading a flooded field, standing in a standing-rice field |
| **EXCLUDED** | `1784895568683.jpg` | **Do not publish.** Scanned NCRI Badeggi official receipt — payee, ₦460,000 amount, signature, official stamp. A financial document, not a field photo. |

### 1.4 Map sheets (`Katcha photos/mapsheets/`)

Twelve finished A3-landscape analytical sheets, 4962×3506 px PNG (1.3–4.4 MB each,
69 MB total) plus matching PDFs (36 MB total). Each is branded
"GRMI Katcha Flood Scope · Sheet N of 13" with a main map panel, 3–5 side charts, and a
footer bar of legend / data sources / method / key results / limitations.

| # | File | Title | One-line takeaway for the card |
| --- | --- | --- | --- |
| 01 | `MAP_01_regional_setting` | Regional Setting and the Upstream Dam Chain | Katcha sits 187 km below Jebba and 284 km below Kainji; Lagdo is on the Benue and does not reach it |
| 02 | `MAP_02_ward_area_correction` | Ward Boundary and the Area Denominator | The ward measures 11,002 ha against the report's 8,891 ha — a 19.2% gap in the denominator |
| 03 | `MAP_03_terrain_drainage` | Terrain and Drainage | 42% of the window is flatter than 1°; the channel falls 69 m, so one flood datum cannot describe it |
| 04 | `MAP_04_hand_susceptibility` | Height Above Nearest Drainage | Ward median is 0.8 m above its own drainage; 4,636 ha lies within 0.5 m of it |
| 05 | `MAP_05_landcover_baseline` | Land Cover and the Cropland Baseline | 5,736 ha of cropland and herbaceous wetland — 52% of the ward, an upper bound on rice |
| 06 | `MAP_06_method_comparison` | Inundation Method: HAND against the Bathtub | At a 2 m stage HAND maps 21,038 ha where the bathtub maps 2,668 ha — a factor of 7.9 |
| 07 | `MAP_07_stage_exposure` | Stage and Exposure | 69% of cropland is exposed at 2 m; the last 8 m of the headline scenario add only 17 points |
| 08 | `MAP_08_observed_water_history` | Observed Water History and Network Validation | 38 years of Landsat give 1,415 ha water-affected against Sentinel-1's 1,257–1,374 ha — agreement within 7% |
| 09 | `MAP_09_hazard_classification` | Composite Flood Hazard Classification | 6,645 ha, 66% of the ward, sits in the top two hazard classes |
| 10 | `MAP_10_priority_zonation` | Deployment Priority and Seed Scale-up | 4,109 ha is Priority 1; the 200 kg plants 3.3 ha of it, so the value is in cooperative multiplication |
| 11 | `MAP_11_settlement_exposure` | Settlement Exposure and Elevated Ground | Built-up land sits 19.3 m above drainage against 3.4 m for cropland — people are on the high ground |
| 13 | `MAP_13_geoai_random_forest` | GeoAI Flood Susceptibility: Random Forest | Spatially blocked ROC-AUC 0.998, but absolute elevation alone carries 56% of the importance |

**Note:** sheets are numbered "of 13" and **MAP_12 is absent** from the folder. The page
will ship 12 sheets; flag the gap to the team.

---

## 2. Design contract — what "same design, same logic" means

Mirroring `src/pages/schools/Homepage.vue` and `src/components/sections/*`:

**Kept identical**
- Thin page shell: one `<section class="bg-[#0E1C16]">` wrapping the section components, `Navbar` above, `Footer` below.
- The dark → light → dark → white progression (emotive half, then evidence half).
- Palette: `#0E1C16` base, `#E9EBF8` body text on dark, `#436256` dim-word state, `#EAF7F3` transition band, `#4E695D` accent pill, white for the evidence half. Arbitrary hex, not the Tailwind brand tokens — same as the Children page.
- Type: `font-cabin` display, `font-merri` body; rem-based arbitrary sizes at the same scale (`text-[3.8rem]` hero, `text-[1.94rem]` section body, `text-[2.25rem]` white-half headings), with `midDesk:` and `mob:` overrides.
- Container widths: `w-[83.47%]` for text blocks, `w-[95.8%]` for full-bleed media, `pl-[5rem]` for white-half section headings.
- The three shared motion primitives, reused **unmodified**: `ui/animatedText.vue` (scroll-linked word highlight), `ui/videoPlayer.vue` (poster + cursor-following play icon), `ui/slider.vue` (auto-scroll marquee).
- Typewriter hero with blinking cursor, copied from `sections/Header.vue`.
- `usePageHead()` for title/description/keywords.

**Deliberate deviations, with reasons**

| Deviation | Reason |
| --- | --- |
| New components live in `src/components/katcha/` with **semantic names**, not `SectionOne…Seven` | `components/sections/` is already occupied by the Children page's `SectionOne…Seven`; reusing those names would collide. Positional names also lie the moment the page is reordered. |
| Content in `src/utils/KatchaData.js` rather than inlined per component | 12 map sheets + 27 photos + captions is too much to inline. `utils/AppsData.js` and `utils/data.js` are the existing repo precedent for exactly this. |
| Local images referenced by plain absolute path (`/katcha/photos/x.jpg`), **not** the `new URL('…/public/'+path, import.meta.url)` helper | That helper is unreliable: Vite cannot statically analyse a templated `new URL()`, so the literal string survives into the built chunk (verified in the committed `dist/`) and resolves relative to `/assets/` in production. Files in `public/` are served from the site root, so a plain `/katcha/...` path is correct in both dev and prod. |
| No `@media (max-width:1280px){ html{font-size:…} }` block | The Children page has this in a **scoped** style block, where it cannot match `html` — it has never applied. Copying it would copy a dead rule. Responsive behaviour comes from the `midDesk`/`mob` variants instead. |
| `ui/slider.vue` is passed `:images`, not `:posters` | `SectionFour.vue` passes `:posters` while the component declares `images`, so that carousel currently renders zero slides. Not repeating the bug. |
| Map sheets get a purpose-built lightbox | `modals/ShowMap.vue` is hard-coded to an `AppsData` slide shape (`slide.state`, `slide.map_url`). The new one follows its headlessui `Dialog` + `TransitionRoot` structure but takes a Katcha map object and adds a PDF link. |

---

## 3. Page structure

Route `/katcha` → `src/pages/katcha/Homepage.vue`

| # | Component | Band | Children-page analogue | Content |
| --- | --- | --- | --- | --- |
| 1 | `KatchaHeader.vue` | dark | `sections/Header.vue` | Typewriter: "Outlast the Flood" / "Satellite flood mapping and a rice that survives the water — Katcha Ward, Niger State". Then **video PLACEHOLDER**. |
| 2 | `PressScatter.vue` | dark | `SectionOne.vue` | `animatedText` with the flood-context paragraph, then the scattered-clipping collage as a **PLACEHOLDER** — same absolute-positioned layout, 16 empty labelled tiles. |
| 3 | `TheSeed.vue` | dark | `SectionTwo.vue` | `animatedText` on FARO 67 + SUB1A, then a **key-figures strip** (200 kg / 20 farmers / 8,891 ha / 65% / 2020–2025) in place of the Children page's static `Group9.png`. |
| 4 | `FarmerVoices.vue` | `#EAF7F3` | `SectionThree.vue` | Two lead-in headings + two **video PLACEHOLDERS** (farmer interviews). |
| 5 | `MapRoom.vue` + `MapViewer.vue` | dark | `SectionFour.vue` | `animatedText` on the Earth-observation method, then the **12 real map sheets** as a responsive card grid (thumbnail + sheet no. + title + takeaway). Click → full-resolution lightbox. Footer button "Download map sheets". |
| 6 | `KatchaMedia.vue` | white | `ui/MediaAppearance.vue` | "MEDIA APPEARANCES" + `ui/slider.vue` marquee of **PLACEHOLDER** press logos. |
| 7 | `ArticlesGrid.vue` | white | `SectionFive.vue` | "ARTICLES" + 4-card grid, all **PLACEHOLDER** cards (the two drafts are unpublished). |
| 8 | `FieldGallery.vue` | white | `SectionSix.vue` | **Real photos**, two headed grids: "THE WORKSHOP AND THE HANDOVER" (25 DSC frames) and "ON THE FLOODPLAIN" (3 river/field frames). |
| 9 | `ClosingCall.vue` | white | `SectionSeven.vue` | Sendai Framework paragraph with the rotating pill link (→ undrr.org), then a "Support this work" button. |
| 10 | `KatchaPartners.vue` | white | `ui/ChildrenDisasterPartners.vue` | "PARTNERS" + `ui/slider.vue`, **PLACEHOLDER** tiles pending confirmation of which logos GRMI has rights to use. |

### 3.0 Real content now live

- **Articles, card 1** — *"GRMI trains Niger rice farmers, distributes flood-tolerant seeds"*, The Nation, [thenationonlineng.net](https://thenationonlineng.net/grmi-trains-niger-rice-farmers-distributes-flood-tolerant-seeds/). ⚠️ The headline is **reconstructed from the URL slug**: the site sits behind a Cloudflare bot challenge, so the exact headline, date, byline and lead image could not be read and were not worked around. Confirm the title. The card uses GRMI's own handover photo (`workshop-11`) rather than the paper's lead image.
- **Media Appearances, tile 1** — The Nation, linking the same article. No logo artwork, so it renders as a wordmark.
- **Partners, tile 1** — **National Cereals Research Institute, Badeggi**. No logo artwork yet, so it renders as a named lockup.

Both `MediaAppearances` and `Partners` entries follow the rule: `logo: null` → name set in
type; supply a path under `public/media/katcha/press/` or `public/media/katcha/partners/`
and the tile switches to the image with no other change.

### 3.1 Placeholder treatment

All four placeholder zones share one visual language so they read as intentional, not
broken: a `#16281F` panel, a dashed `#436256` border, a centred `#E9EBF8`/`#436256` label,
and a `data-placeholder` attribute so they are greppable when the real assets land.

- **Video** — a 16:9 panel at the same `h-[90vh] max-h-[48.5rem]` as `videoPlayer.vue`, labelled "Field film — coming soon".
- **Press scatter** — 16 tiles at the same absolute offsets as `SectionOne`'s papercuts, labelled "Press coverage".
- **Articles** — 4 cards matching `SectionFive`'s grid and aspect ratio, labelled "Article — publication pending".
- **Media/Partner logos** — grey tiles in the marquee.

---

## 4. Asset pipeline

Source is **144 MB**; nothing goes into `public/` untouched. Processing uses `sips`
(built into macOS, no new dependency).

```
public/media/katcha/
  photos/          28 field photos, max 1400 px wide, JPEG q60      (~230 KB each)
  photos/thumb/    grid thumbnails, max 640 px, JPEG q55            (~45 KB each)
  maps/            12 sheets, max 2000 px wide, JPEG q78            (~600 KB each)
  maps/thumb/      card thumbnails, max 800 px, JPEG q70            (~100 KB each)
```

> **Why `public/media/katcha/` and not `public/katcha/`:** everything in `public/` is served
> from the site root, so a `public/katcha/` directory shadows the `/katcha` **route**. Vite's
> dev server returns a 500 for `/katcha` ("This file is in /public and will be copied as-is…")
> and the static file would win over the SPA rewrite in production too. Any future page whose
> route name matches a `public/` folder hits the same trap.

Actual committed weight: **14 MB**. Rules:

1. `1784895568683.jpg` (the NCRI receipt) is **excluded**.
2. Map sheets convert PNG → JPEG at 2000 px. At that width the main map panel and the
   chart labels stay legible; the footer method text does not, which is why every card
   also links the **PDF**.
3. PDFs (36 MB) are **not committed**. The repo already links large documents off-site
   (`Reports.vue` uses Google Drive). Upload the 12 PDFs to Drive or Cloudinary and put
   the URLs in `KatchaData.js`; until then the `pdf` field stays `null` and the card
   renders without a PDF link.
4. Every `<img>` gets `loading="lazy"` and a real `alt`.

Follow-up (not in this change): migrate the images to the Cloudinary account the rest of
the site uses, and drop them from the repo.

---

## 5. Wiring

- `src/router/index.js` — add a lazy route: `{ path: '/katcha', name: 'Katcha', component: () => import('../pages/katcha/Homepage.vue') }`
- `src/utils/NavConstants.js` — add "Katcha: Outlast the Flood" to the **Projects** dropdown, beside "Children & Disaster". Give it a unique `id` (the existing Projects entries have duplicate ids used as `:key`).
- `usePageHead({ title: 'Katcha Ward: Outlasting the Flood', description: …, keywords: […] })`

---

## 6. Copy rules

The report and the article drafts contain unfilled placeholders (`[Full Name]`,
`[Name], Chairman of the Katcha Ward Farmers' Association`). Therefore:

- **No invented names.** Farmers named in the drafts (Idris Mohammed, Nda Bala) appear in the press draft; on the page they are described without names until the team confirms consent.
- Three attributed quotes are usable, all from the article drafts: **Taiwo Ogunwumi** (founder), **Kayode Adeniyi** (head of research and innovation), **Hussaini Usman** (field project manager).
- Every statistic on the page traces to §1.2 above. No rounding up, no new numbers.
- Dates: the report gives the field mission as **10 July 2026** but the workshop as **18 July 2026** in §3.2. The page says "July 2026" until the team resolves which is right.

---

## 7. Build order — status

1. ✅ Assets processed into `public/media/katcha/` (14 MB; receipt excluded).
2. ✅ `src/utils/KatchaData.js` — maps, photo groups, key figures, quotes, scatter slots.
3. ✅ 11 components in `src/components/katcha/` + `MapViewer.vue` + `VideoPlaceholder.vue`.
4. ✅ `src/pages/katcha/Homepage.vue`.
5. ✅ Route `/katcha` + Projects nav entry.
6. ✅ `npm run build` passes; `npx eslint` on the new files is clean.
7. ⚠️ Dev server serves `/katcha` and all assets with 200, and every new component
   transforms without error — but the page has **not been viewed in a browser**
   (the Chrome extension is not connected in this environment). Visual QA is outstanding:
   the press-scatter absolute offsets, the map-card grid at each breakpoint, and the
   lightbox on mobile all need eyes on them.

## 8. Open questions for the team

1. **MAP_12 is missing** from `mapsheets/` — is there a twelfth sheet to include?
2. Field-mission date: 10 or 18 July 2026?
3. Consent to name the farmers quoted in the press draft?
4. Which partner logos may be shown (NCRI Badeggi, AfricaRice, IRRI, Copernicus/ESA)?
5. Where should the "Support this work" button point? The Children page's Donate button has no handler; this one should not repeat that.
6. Confirm the PDFs can be hosted off-site, and supply the destination.
