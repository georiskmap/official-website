// Content for the Katcha Ward page (/katcha).
// Every figure here traces to GRMI_Katcha_Field_Report.docx; see katcha.md section 1.2.

export const KeyFigures = [
  { id: 1, value: '200 kg', label: 'FARO 67 seed distributed' },
  { id: 2, value: '20', label: 'farmers reached, 10 kg each' },
  { id: 3, value: '8,891 ha', label: 'of ward assessed' },
  { id: 4, value: '65%', label: 'of the ward is rice cropland' },
  { id: 5, value: '2020–2025', label: 'Sentinel-1 flood record' },
  { id: 6, value: '4,109 ha', label: 'of cropland at highest hazard' },
]

export const Quotes = [
  {
    id: 1,
    text: 'A flood arrives, the reports get written, the photographs get shared, and then the farmer who has lost everything is left with a season that will not wait. Our work in Katcha is about turning what we know about the risk into something useful while there is still time to plant.',
    name: 'Taiwo Ogunwumi',
    role: 'Founder, GRMI',
  },
  {
    id: 2,
    text: 'For a long time this kind of flood analysis was slow and costly. The real change has been the workflow. The honest measure of any tool is simply whether it puts a better seed in a farmer’s hands sooner, or helps a community see a flood coming in time to move.',
    name: 'Kayode Adeniyi',
    role: 'Head of Research and Innovation, GRMI',
  },
  {
    id: 3,
    text: 'On the day itself the satellites feel far away, and you find yourself simply sitting with people who know this river intimately. What stays with me is the trust in it, because they are the ones carrying the risk on their own land.',
    name: 'Hussaini Usman',
    role: 'Field Project Manager, GRMI',
  },
]

// 12 of 13 sheets. MAP_12 is absent from the source folder — see katcha.md section 8.
// `pdf` stays null until the PDFs are hosted off-site (katcha.md section 4).
export const MapSheets = [
  {
    id: 1,
    sheet: '01',
    file: 'MAP_01_regional_setting',
    title: 'Regional Setting and the Upstream Dam Chain',
    theme: 'Study area',
    takeaway:
      'Katcha sits 187 km below Jebba Dam and 284 km below Kainji on the Niger. Lagdo is on the Benue and joins downstream, so it does not reach this ward.',
    pdf: null,
  },
  {
    id: 2,
    sheet: '02',
    file: 'MAP_02_ward_area_correction',
    title: 'Ward Boundary and the Area Denominator',
    theme: 'Administrative basis',
    takeaway:
      'Measured against the authoritative GRID3 boundary the ward is 11,002 ha, not the 8,891 ha classified extent — a 19.2% gap in the denominator.',
    pdf: null,
  },
  {
    id: 3,
    sheet: '03',
    file: 'MAP_03_terrain_drainage',
    title: 'Terrain and Drainage',
    theme: 'Physical basis',
    takeaway:
      '42% of the analysis window is flatter than one degree, and the channel network falls 69 m across it, which is why a single flood datum cannot describe the whole ward.',
    pdf: null,
  },
  {
    id: 4,
    sheet: '04',
    file: 'MAP_04_hand_susceptibility',
    title: 'Height Above Nearest Drainage',
    theme: 'Terrain susceptibility',
    takeaway:
      'The ward median is 0.8 m above its own drainage, and 4,636 ha of it lies within half a metre. This surface underlies every hazard class in the series.',
    pdf: null,
  },
  {
    id: 5,
    sheet: '05',
    file: 'MAP_05_landcover_baseline',
    title: 'Land Cover and the Cropland Baseline',
    theme: 'Exposure baseline',
    takeaway:
      'Cropland and herbaceous wetland total 5,736 ha, 52% of the ward, and agree with the report’s own rice classes to within 1%.',
    pdf: null,
  },
  {
    id: 6,
    sheet: '06',
    file: 'MAP_06_method_comparison',
    title: 'Inundation Method: HAND against the Bathtub',
    theme: 'Method comparison',
    takeaway:
      'At a 2 m stage the terrain-normalised method maps 21,038 ha where a single water-level datum maps 2,668 ha — a factor of 7.9 across the decision-relevant range.',
    pdf: null,
  },
  {
    id: 7,
    sheet: '07',
    file: 'MAP_07_stage_exposure',
    title: 'Stage and Exposure',
    theme: 'Exposure scenarios',
    takeaway:
      '52% of ward cropland is exposed at a 0.5 m stage and 69% at 2 m. The eight metres up to the 10 m headline scenario add only 17 further points.',
    pdf: null,
  },
  {
    id: 8,
    sheet: '08',
    file: 'MAP_08_observed_water_history',
    title: 'Observed Water History and Network Validation',
    theme: 'Observed evidence',
    takeaway:
      '38 years of Landsat map 1,415 ha of the ward as water-affected against 1,257–1,374 ha from the Sentinel-1 analysis. Two sensors, two periods, agreement within 7%.',
    pdf: null,
  },
  {
    id: 9,
    sheet: '09',
    file: 'MAP_09_hazard_classification',
    title: 'Composite Flood Hazard Classification',
    theme: 'Hazard classes',
    takeaway:
      'Terrain susceptibility reinforced by observed water puts 6,645 ha, 66% of the ward, in the top two hazard classes.',
    pdf: null,
  },
  {
    id: 10,
    sheet: '10',
    file: 'MAP_10_priority_zonation',
    title: 'Deployment Priority and Seed Scale-up',
    theme: 'Targeting decision',
    takeaway:
      '4,109 ha of cropland is Priority 1. The 200 kg distributed plants about 3.3 ha of it directly, so the intervention rests on cooperative multiplication over successive seasons.',
    pdf: null,
  },
  {
    id: 11,
    sheet: '11',
    file: 'MAP_11_settlement_exposure',
    title: 'Settlement Exposure and Elevated Ground',
    theme: 'Settlement exposure',
    takeaway:
      'Built-up land sits a median 19.3 m above drainage against 3.4 m for cropland. People are on the high ground and their fields are low, which is the pattern the report describes at Baro.',
    pdf: null,
  },
  {
    id: 12,
    sheet: '13',
    file: 'MAP_13_geoai_random_forest',
    title: 'GeoAI Flood Susceptibility: Random Forest',
    theme: 'Machine learning',
    takeaway:
      'Spatially blocked ROC-AUC of 0.998, with an ablation showing that absolute elevation alone carries 56% of the model’s importance.',
    pdf: null,
  },
]

const workshopPhoto = (i) => {
  const n = String(i).padStart(2, '0')
  return {
    id: `workshop-${n}`,
    src: `/media/katcha/photos/workshop-${n}.jpg`,
    thumb: `/media/katcha/photos/thumb/workshop-${n}.jpg`,
    alt: `Farmers and GRMI staff at the FARO 67 sensitization workshop and seed handover in Katcha Ward, Niger State (${i} of 25)`,
  }
}

// Two rows of six on desktop. The remaining frames (13–24) stay on disk unused; widen this
// range to bring them back.
export const WorkshopGallery = Array.from({ length: 12 }, (_, i) => workshopPhoto(i + 1))

// Closes the section full width, below the grid.
export const GroupPhoto = {
  ...workshopPhoto(25),
  alt: 'The twenty farmers of the Katcha Ward Farmers’ Association with their 10 kg FARO 67 seed packs, alongside GRMI staff and community leaders, after the handover',
}

export const FloodplainGallery = [
  {
    id: 'floodplain-01',
    src: '/media/katcha/photos/floodplain-01.jpg',
    thumb: '/media/katcha/photos/thumb/floodplain-01.jpg',
    alt: 'A GRMI team member on flooded ground in Katcha Ward, with a canoe and residents in the water behind',
  },
  {
    id: 'floodplain-02',
    src: '/media/katcha/photos/floodplain-02.jpg',
    thumb: '/media/katcha/photos/thumb/floodplain-02.jpg',
    alt: 'A GRMI team member crossing the River Niger by canoe during the Katcha field mission',
  },
  {
    id: 'floodplain-03',
    src: '/media/katcha/photos/floodplain-03.jpg',
    thumb: '/media/katcha/photos/thumb/floodplain-03.jpg',
    alt: 'A GRMI team member recording field observations in a standing rice field on the Katcha floodplain',
  },
]

// Published pieces first, then placeholders — see katcha.md section 3.1. To add a real
// article, replace a `pending: true` entry with the shape used by article id 1.
//
// NOTE ON ARTICLE 1: the headline below is reconstructed from the URL slug. The Nation's
// site is behind a Cloudflare bot challenge, so the exact headline, date, byline and lead
// image could not be read. Confirm the title and swap `image` for the paper's own lead
// image if GRMI has permission to use it.
export const Articles = [
  {
    id: 1,
    publication: 'The Nation',
    text: 'GRMI trains Niger rice farmers, distributes flood-tolerant seeds',
    href: 'https://thenationonlineng.net/grmi-trains-niger-rice-farmers-distributes-flood-tolerant-seeds/',
    image: '/media/katcha/photos/thumb/workshop-11.jpg',
    imageAlt:
      'A labelled 10 kg pack of FARO 67 seed being handed to a farmer representative at the Katcha Ward handover',
    pending: false,
  },
  { id: 2, label: 'Article', note: 'Publication pending', pending: true },
  { id: 3, label: 'Article', note: 'Publication pending', pending: true },
  { id: 4, label: 'Article', note: 'Publication pending', pending: true },
]

// Press appearances. `logo` is a path under /media/katcha/press/; when it is null the tile
// falls back to the publication's name set in type, which is why The Nation renders without
// an image file.
export const MediaAppearances = [
  {
    id: 1,
    name: 'The Nation',
    logo: null,
    href: 'https://thenationonlineng.net/grmi-trains-niger-rice-farmers-distributes-flood-tolerant-seeds/',
    pending: false,
  },
  { id: 2, label: 'Press logo', pending: true },
  { id: 3, label: 'Press logo', pending: true },
  { id: 4, label: 'Press logo', pending: true },
]

// Partners. Same rule as above: `logo` null → named text lockup. Drop the artwork at
// public/media/katcha/partners/ncri-badeggi.png and set `logo` to that path to upgrade it.
export const Partners = [
  {
    id: 1,
    name: 'National Cereals Research Institute',
    sub: 'Badeggi, Niger State',
    logo: null,
    href: null,
    pending: false,
  },
  { id: 2, label: 'Partner', pending: true },
  { id: 3, label: 'Partner', pending: true },
  { id: 4, label: 'Partner', pending: true },
]

// Same absolute offsets as the Children & Disaster clipping collage
// (components/sections/SectionOne.vue), so the real press cuttings can drop straight in.
export const PressScatterSlots = [
  { id: 1, top: '0', left: '0', zIndex: 1 },
  { id: 2, top: '0', left: '8.775rem', zIndex: 1 },
  { id: 3, top: '0', left: '34.5rem', zIndex: 1 },
  { id: 4, top: '0', right: '27rem', zIndex: 1 },
  { id: 5, top: '0', right: '4.2rem', zIndex: 1 },
  { id: 6, top: '8.19rem', left: '16rem', zIndex: 1 },
  { id: 7, top: '5.19rem', left: '27.3rem', zIndex: 2 },
  { id: 8, top: '14.44rem', left: '3.4rem', zIndex: 1 },
  { id: 9, top: '15.25rem', left: '29.63rem', zIndex: 1 },
  { id: 10, top: '10.25rem', right: '13.06rem', zIndex: 1 },
  { id: 11, top: '25.8rem', left: '0', zIndex: 1 },
  { id: 12, top: '25.44rem', left: '30.12rem', zIndex: 3 },
  { id: 13, top: '15.81rem', right: '0', zIndex: 1 },
  { id: 14, top: '31.125rem', left: '0', zIndex: 1 },
  { id: 15, top: '30.5rem', left: '37.99rem', zIndex: 4 },
  { id: 16, top: '29rem', right: '18.06rem', zIndex: 5 },
]
