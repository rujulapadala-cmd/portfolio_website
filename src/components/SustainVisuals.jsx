const LIVE_URL = 'https://sustain-data-centers.vercel.app/'

const ST = {
  lavender: '#F1EEF8',
  cream: '#FBF8F2',
  lavenderSoft: '#E2DBF2',
  violet: '#9B82C8',
  purple: '#6F57A8',
  pink: '#E8B7C8',
  muted: '#6F6780',
  text: '#2B2940',
}

export { LIVE_URL }

function Star({ cx, cy, r = 3, fill = ST.pink, opacity = 0.55 }) {
  return (
    <path
      d={`M${cx} ${cy - r} L${cx + r * 0.35} ${cy - r * 0.35} L${cx + r} ${cy} L${cx + r * 0.35} ${cy + r * 0.35} L${cx} ${cy + r} L${cx - r * 0.35} ${cy + r * 0.35} L${cx - r} ${cy} L${cx - r * 0.35} ${cy - r * 0.35} Z`}
      fill={fill}
      fillOpacity={opacity}
    />
  )
}

export function HeroConceptVisual() {
  return (
    <figure className="st-visual st-hero-concept">
      <svg viewBox="0 0 720 420" fill="none" aria-labelledby="st-hero-title">
        <title id="st-hero-title">SustAIn concept: map layers and sustainability scoring</title>
        <rect width="720" height="420" rx="20" fill={ST.lavender} />
        <Star cx="48" cy="36" r={4} />
        <Star cx="672" cy="52" r={3} fill={ST.violet} opacity={0.4} />
        <Star cx="640" cy="380" r={3.5} />
        <rect x="24" y="24" width="420" height="372" rx="16" fill={ST.cream} stroke={ST.lavenderSoft} strokeWidth="1.5" />
        <path d="M80 120c40-30 90-20 120 10s70 40 110 20 80-10 120 30" stroke={ST.violet} strokeWidth="2" opacity="0.45" />
        <path d="M60 240c50 20 100 0 150-20s100-30 160 10 90 40 140 10" stroke={ST.purple} strokeWidth="2" opacity="0.4" />
        <circle cx="180" cy="180" r="28" fill={ST.violet} fillOpacity="0.18" stroke={ST.purple} strokeWidth="2" />
        <circle cx="320" cy="140" r="22" fill={ST.pink} fillOpacity="0.22" stroke={ST.violet} strokeWidth="1.5" />
        <circle cx="260" cy="260" r="18" fill={ST.violet} fillOpacity="0.2" stroke={ST.purple} strokeWidth="1.5" />
        <circle cx="380" cy="220" r="14" fill={ST.pink} fillOpacity="0.28" stroke={ST.violet} strokeWidth="1.5" />
        <rect x="468" y="24" width="228" height="372" rx="16" fill="#fff" stroke={ST.lavenderSoft} strokeWidth="1.5" />
        <text x="488" y="58" fill={ST.purple} fontSize="11" fontWeight="600" letterSpacing="0.08em">SUSTAINABILITY SCORE</text>
        <circle cx="582" cy="130" r="52" stroke={ST.violet} strokeWidth="8" strokeDasharray="220 327" strokeLinecap="round" transform="rotate(-90 582 130)" />
        <text x="582" y="128" textAnchor="middle" fill={ST.text} fontSize="28" fontWeight="700">87</text>
        <text x="582" y="148" textAnchor="middle" fill={ST.muted} fontSize="11">Strong fit</text>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x="488" y={190 + i * 44} width="188" height="32" rx="8" fill={ST.lavender} stroke={ST.lavenderSoft} />
            <rect x="500" y={202 + i * 44} width={120 - i * 18} height="8" rx="4" fill={ST.violet} fillOpacity={0.85 - i * 0.12} />
          </g>
        ))}
        <rect x="488" y="368" width="188" height="12" rx="6" fill={ST.lavenderSoft} />
        <rect x="488" y="368" width="140" height="12" rx="6" fill={ST.purple} />
      </svg>
      <figcaption>Map on the left, score panel on the right</figcaption>
    </figure>
  )
}

const PROBLEM_FACTORS = [
  { icon: '⚡', label: 'Energy Availability', color: ST.pink },
  { icon: '💧', label: 'Water Resources', color: ST.violet },
  { icon: '🌎', label: 'Environmental Impact', color: ST.purple },
  { icon: '📡', label: 'Infrastructure Access', color: '#B8A4D8' },
  { icon: '💰', label: 'Operational Cost', color: ST.muted },
]

export function ProblemInfographic() {
  return (
    <figure className="st-visual st-problem-infographic">
      <div className="st-problem-center">
        <span className="st-problem-center__label">Location decision</span>
        <strong>Five factors</strong>
      </div>
      <div className="st-problem-factors">
        {PROBLEM_FACTORS.map((factor, i) => (
          <div key={factor.label} className="st-problem-factor" style={{ '--factor-accent': factor.color, '--factor-i': i }}>
            <span className="st-problem-factor__icon" aria-hidden="true">{factor.icon}</span>
            <span className="st-problem-factor__label">{factor.label}</span>
          </div>
        ))}
      </div>
      <figcaption>The five inputs we had to account for</figcaption>
    </figure>
  )
}

const IA_PHASES = [
  {
    phase: 'Find',
    title: 'Search',
    detail: 'Start with a region and note what matters most: energy, water, cost, infrastructure.',
  },
  {
    phase: 'Explore',
    title: 'Map & score',
    detail: 'Open the map, turn on a layer if you need it, and read the sustainability score for each location.',
  },
  {
    phase: 'Compare',
    title: 'Side by side',
    detail: 'Pull up two places next to each other and walk through where they differ.',
  },
  {
    phase: 'Decide',
    title: 'Pick one',
    detail: 'Walk away with a location and enough detail to justify the call.',
  },
]

export function IAUserJourney() {
  return (
    <figure className="st-visual st-journey">
      <ol className="st-journey-phases">
        {IA_PHASES.map((item, i) => (
          <li key={item.phase} className="st-journey-phase">
            <span className="st-journey-phase__marker">{i + 1}</span>
            <span className="st-journey-phase__label">{item.phase}</span>
            <strong className="st-journey-phase__title">{item.title}</strong>
            <p className="st-journey-phase__detail">{item.detail}</p>
          </li>
        ))}
      </ol>
    </figure>
  )
}

const COLOR_GROUPS = [
  {
    group: 'Lavender',
    note: 'Page background and panel borders.',
    swatches: [
      { name: 'Lavender', hex: '#F1EEF8', use: 'Main background' },
      { name: 'Lavender mist', hex: '#E2DBF2', use: 'Panels & borders' },
    ],
  },
  {
    group: 'Purple',
    note: 'Buttons, scores, and accent type.',
    swatches: [
      { name: 'Soft violet', hex: '#9B82C8', use: 'Labels & accents' },
      { name: 'Deep purple', hex: '#6F57A8', use: 'Buttons & headlines' },
    ],
  },
  {
    group: 'Cream & accent',
    note: 'Section backgrounds, body text, and star details.',
    swatches: [
      { name: 'Pale cream', hex: '#FBF8F2', use: 'Content sections' },
      { name: 'Dusty pink', hex: '#E8B7C8', use: 'Star accents' },
      { name: 'Muted', hex: '#6F6780', use: 'Secondary text' },
      { name: 'Dark', hex: '#2B2940', use: 'Primary copy' },
    ],
  },
]

export function ColorPaletteGrid() {
  return (
    <div className="st-palette-grid">
      {COLOR_GROUPS.map((family) => (
        <div key={family.group} className="st-palette-group">
          <h3 className="st-palette-group__title">{family.group}</h3>
          <p className="st-palette-group__note">{family.note}</p>
          <div className="st-palette-swatches">
            {family.swatches.map((swatch) => (
              <div key={swatch.name} className="st-palette-swatch">
                <span
                  className="st-palette-swatch__chip"
                  style={{ background: swatch.hex }}
                  aria-hidden="true"
                />
                <span className="st-palette-swatch__name">{swatch.name}</span>
                <span className="st-palette-swatch__use">{swatch.use}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function WalkthroughPreview({ title, description, feature }) {
  const icons = {
    map: (
      <svg viewBox="0 0 120 80" className="st-walkthrough-icon">
        <rect width="120" height="80" rx="8" fill={ST.cream} />
        <Star cx="18" cy="16" r={2.5} />
        <circle cx="40" cy="40" r="12" fill={ST.violet} fillOpacity="0.5" />
        <circle cx="75" cy="30" r="8" fill={ST.pink} fillOpacity="0.5" />
        <path d="M20 60 Q50 45 100 55" stroke={ST.purple} strokeWidth="2" fill="none" />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 120 80" className="st-walkthrough-icon">
        <rect width="120" height="80" rx="8" fill={ST.lavender} />
        <rect x="20" y="20" width="80" height="40" rx="6" fill="#fff" stroke={ST.violet} />
        <text x="60" y="46" textAnchor="middle" fill={ST.purple} fontSize="12" fontWeight="600">Score</text>
      </svg>
    ),
    compare: (
      <svg viewBox="0 0 120 80" className="st-walkthrough-icon">
        <rect width="120" height="80" rx="8" fill={ST.lavender} />
        <rect x="14" y="16" width="42" height="48" rx="4" fill="#fff" stroke={ST.violet} />
        <rect x="64" y="16" width="42" height="48" rx="4" fill="#fff" stroke={ST.purple} />
      </svg>
    ),
  }

  return (
    <article className="st-walkthrough-card">
      {icons[feature]}
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="st-walkthrough-link">
        Open live site
      </a>
    </article>
  )
}
