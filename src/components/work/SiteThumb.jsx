import './thumb.css'

// Thumbnails are drawn for the portfolio, not screenshots: one small
// composition per project, all in the same navy, grid-and-glow language.
const LINE = '#a9cff0'
const ink = (o) => ({ stroke: LINE, strokeOpacity: o, fill: 'none', strokeWidth: 1.4 })

function Stage({ id, accent, children }) {
  return (
    <svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="640" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0b1530" />
          <stop offset="1" stopColor="#16296064" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={accent} stopOpacity="0.45" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <pattern id={`${id}-grid`} width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="#8fb2ee" strokeOpacity="0.08" />
        </pattern>
      </defs>
      <rect width="640" height="400" fill="#0b1530" />
      <rect width="640" height="400" fill={`url(#${id}-bg)`} />
      <rect width="640" height="400" fill={`url(#${id}-grid)`} />
      <ellipse cx="400" cy="170" rx="260" ry="190" fill={`url(#${id}-glow)`} />
      {children}
    </svg>
  )
}

// Glasshouse: a round glass chamber, panes around it, one lit card inside
function Glasshouse() {
  const panes = Array.from({ length: 14 }, (_, i) => {
    const a = (Math.PI * 2 * i) / 14 - Math.PI / 2
    return { x: 320 + Math.cos(a) * 150, y: 200 + Math.sin(a) * 118, r: (a * 180) / Math.PI + 90 }
  })
  return (
    <Stage id="gh" accent="#6aa6ff">
      <ellipse cx="320" cy="200" rx="190" ry="150" {...ink(0.25)} />
      <ellipse cx="320" cy="200" rx="150" ry="118" {...ink(0.18)} strokeDasharray="3 7" />
      {panes.map((p, i) => (
        <rect
          key={i}
          x={p.x - 16}
          y={p.y - 22}
          width="32"
          height="44"
          rx="6"
          transform={`rotate(${p.r} ${p.x} ${p.y})`}
          fill="#a9cff0"
          fillOpacity={i % 3 === 0 ? 0.18 : 0.07}
          stroke={LINE}
          strokeOpacity="0.35"
        />
      ))}
      <rect x="268" y="130" width="104" height="140" rx="14" fill="#10224a" stroke={LINE} strokeOpacity="0.7" strokeWidth="1.5" />
      <circle cx="292" cy="156" r="9" fill="#a9cff0" fillOpacity="0.85" />
      <rect x="308" y="150" width="46" height="6" rx="3" fill="#a9cff0" fillOpacity="0.5" />
      <rect x="308" y="161" width="30" height="5" rx="2.5" fill="#a9cff0" fillOpacity="0.3" />
      <rect x="282" y="184" width="76" height="40" rx="8" fill="#a9cff0" fillOpacity="0.16" />
      <rect x="282" y="234" width="50" height="6" rx="3" fill="#a9cff0" fillOpacity="0.4" />
      <rect x="282" y="246" width="66" height="5" rx="2.5" fill="#a9cff0" fillOpacity="0.25" />
    </Stage>
  )
}

// SFR: requests flowing left to right through a short pipeline
function Sfr() {
  const stops = [90, 195, 300, 405, 510]
  return (
    <Stage id="sfr" accent="#6ea8ff">
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <rect x="40" y={96 + r * 74} width="92" height="46" rx="12" fill="#12275a" stroke={LINE} strokeOpacity="0.35" />
          <rect x="54" y={110 + r * 74} width="44" height="7" rx="3.5" fill="#a9cff0" fillOpacity="0.55" />
          <rect x="54" y={124 + r * 74} width="62" height="6" rx="3" fill="#a9cff0" fillOpacity="0.25" />
          <path d={`M132 ${119 + r * 74} C 200 ${119 + r * 74}, 210 200, 262 200`} {...ink(0.4)} />
        </g>
      ))}
      <rect x="262" y="150" width="116" height="100" rx="18" fill="#12275a" stroke="#6ea8ff" strokeOpacity="0.8" strokeWidth="1.5" />
      {['#6ea8ff', '#a9cff0', '#4d7fd0'].map((c, i) => (
        <g key={c}>
          <circle cx="288" cy={178 + i * 24} r="6" fill={c} />
          <rect x="304" y={174 + i * 24} width={52 - i * 8} height="7" rx="3.5" fill="#a9cff0" fillOpacity="0.45" />
        </g>
      ))}
      <path d="M378 200 H 440" {...ink(0.5)} />
      <rect x="440" y="106" width="170" height="188" rx="16" fill="#0f2150" stroke={LINE} strokeOpacity="0.4" />
      {[34, 58, 42, 74, 52].map((h, i) => (
        <rect key={i} x={462 + i * 28} y={262 - h} width="18" height={h} rx="5" fill={i === 3 ? '#6ea8ff' : '#3a5aa6'} />
      ))}
      <rect x="458" y="124" width="60" height="8" rx="4" fill="#a9cff0" fillOpacity="0.55" />
      <path d="M458 164 C 490 140, 520 176, 556 150 S 592 140, 596 142" {...ink(0.7)} />
      {stops.map((x) => (
        <circle key={x} cx={x} cy="340" r="4" fill="#a9cff0" fillOpacity="0.7" />
      ))}
      <path d="M90 340 H510" {...ink(0.35)} strokeDasharray="4 6" />
    </Stage>
  )
}

// OrkaOS: tokens, a component, and a composed layout, stacked as layers
function Orka() {
  return (
    <Stage id="ok" accent="#3d7bff">
      <rect x="64" y="70" width="300" height="190" rx="18" fill="#0f2150" stroke={LINE} strokeOpacity="0.4" />
      <rect x="64" y="70" width="70" height="190" rx="18" fill="#12275a" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="78" y={92 + i * 28} width="42" height="14" rx="7" fill={i === 0 ? '#3d7bff' : '#a9cff0'} fillOpacity={i === 0 ? 0.95 : 0.25} />
      ))}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={150 + i * 70} y="90" width="60" height="44" rx="10" fill="#17306e" stroke={LINE} strokeOpacity="0.3" />
      ))}
      <rect x="150" y="148" width="200" height="94" rx="10" fill="#17306e" stroke={LINE} strokeOpacity="0.3" />
      {[30, 52, 40, 64, 46, 70].map((h, i) => (
        <rect key={i} x={164 + i * 30} y={232 - h} width="18" height={h} rx="5" fill={i === 5 ? '#3d7bff' : '#3a5aa6'} />
      ))}
      {['#04152d', '#071a3d', '#0958d9', '#1677ff', '#4096ff', '#e6f0ff'].map((c, i) => (
        <g key={c}>
          <rect x={64 + i * 50} y="290" width="40" height="40" rx="10" fill={c} stroke={LINE} strokeOpacity="0.4" />
        </g>
      ))}
      <rect x="400" y="120" width="190" height="130" rx="16" fill="#12275a" stroke="#3d7bff" strokeOpacity="0.7" strokeWidth="1.5" />
      <rect x="418" y="140" width="80" height="9" rx="4.5" fill="#a9cff0" fillOpacity="0.6" />
      <rect x="418" y="160" width="140" height="6" rx="3" fill="#a9cff0" fillOpacity="0.25" />
      <rect x="418" y="173" width="110" height="6" rx="3" fill="#a9cff0" fillOpacity="0.25" />
      <rect x="418" y="206" width="64" height="26" rx="13" fill="#3d7bff" />
      <rect x="492" y="206" width="64" height="26" rx="13" fill="none" stroke={LINE} strokeOpacity="0.5" />
    </Stage>
  )
}

// SustAIn: contour lines of a map with scored sites
function Sustain() {
  const sites = [[210, 150, 14], [330, 230, 20], [450, 130, 11], [500, 270, 15], [150, 280, 9]]
  return (
    <Stage id="su" accent="#7a8cff">
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path
          key={i}
          d={`M-20 ${70 + i * 46} C 120 ${30 + i * 46}, 220 ${120 + i * 40}, 330 ${80 + i * 44} S 540 ${40 + i * 50}, 660 ${90 + i * 42}`}
          {...ink(0.14 + i * 0.03)}
        />
      ))}
      <path d="M210 150 L330 230 L450 130 M330 230 L500 270" {...ink(0.4)} strokeDasharray="4 6" />
      {sites.map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r * 2.4} fill="#7a8cff" fillOpacity="0.12" />
          <circle cx={x} cy={y} r={r} fill="#10224a" stroke="#a9cff0" strokeWidth="1.5" />
          <circle cx={x} cy={y} r={r * 0.38} fill="#dbe9ff" />
        </g>
      ))}
      <g transform="translate(60 56)">
        <rect width="96" height="86" rx="14" fill="#10224a" stroke={LINE} strokeOpacity="0.4" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <circle cx="20" cy={26 + i * 22} r="5" fill={i === 0 ? '#a9cff0' : 'none'} stroke={LINE} strokeOpacity="0.7" />
            <rect x="34" y={22 + i * 22} width={44 - i * 6} height="7" rx="3.5" fill="#a9cff0" fillOpacity="0.4" />
          </g>
        ))}
      </g>
    </Stage>
  )
}

// Josyam: an arched card with a bird, moon and stars
function Josyam() {
  const stars = [[120, 90], [170, 300], [230, 60], [470, 80], [540, 190], [500, 310], [420, 330], [90, 220]]
  return (
    <Stage id="jo" accent="#d9b36a">
      {stars.map(([x, y], i) => (
        <path key={i} d={`M${x} ${y - 7} L${x + 2} ${y - 2} L${x + 7} ${y} L${x + 2} ${y + 2} L${x} ${y + 7} L${x - 2} ${y + 2} L${x - 7} ${y} L${x - 2} ${y - 2}Z`} fill="#f1d59a" fillOpacity={0.45 + (i % 3) * 0.2} />
      ))}
      <path d="M240 330 V170 A80 80 0 0 1 400 170 V330 Z" fill="#0f1c42" stroke="#d9b36a" strokeOpacity="0.85" strokeWidth="1.8" />
      <path d="M252 322 V172 A68 68 0 0 1 388 172 V322 Z" fill="none" stroke="#d9b36a" strokeOpacity="0.35" />
      <path d="M296 150 A22 22 0 1 0 296 194 A17 17 0 1 1 296 150Z" fill="#f1d59a" />
      <path d="M270 260 C 296 214, 340 222, 366 196 C 360 226, 346 250, 322 262 C 340 266, 352 280, 360 296 C 336 284, 306 280, 270 260Z" fill="#d9b36a" fillOpacity="0.9" />
      <circle cx="358" cy="204" r="2.5" fill="#0f1c42" />
      <path d="M240 330 H400" stroke="#d9b36a" strokeOpacity="0.6" />
    </Stage>
  )
}

// MindWell: calm, soft rings and four mood dots
function Mindwell() {
  return (
    <Stage id="mw" accent="#6fb6d6">
      {[180, 140, 100, 62].map((r, i) => (
        <circle key={r} cx="320" cy="200" r={r} fill="#6fb6d6" fillOpacity={0.04 + i * 0.03} stroke={LINE} strokeOpacity={0.12 + i * 0.05} />
      ))}
      <rect x="262" y="88" width="116" height="224" rx="24" fill="#10224a" stroke={LINE} strokeOpacity="0.55" strokeWidth="1.5" />
      <rect x="282" y="112" width="52" height="7" rx="3.5" fill="#a9cff0" fillOpacity="0.5" />
      <rect x="282" y="126" width="76" height="9" rx="4.5" fill="#a9cff0" fillOpacity="0.8" />
      {['#6fb6d6', '#4d8fc0', '#3a6aa6', '#2c4f8c'].map((c, i) => (
        <circle key={c} cx={296 + i * 24} cy="170" r="9" fill={c} stroke={i === 0 ? '#dbe9ff' : 'none'} strokeWidth="1.5" />
      ))}
      <rect x="282" y="196" width="76" height="50" rx="12" fill="#a9cff0" fillOpacity="0.1" />
      <rect x="282" y="262" width="76" height="26" rx="13" fill="#6fb6d6" fillOpacity="0.85" />
      <path d="M40 330 C 120 300, 200 350, 280 322 S 440 300, 600 336" {...ink(0.25)} />
      <path d="M40 354 C 140 330, 220 372, 320 346 S 480 330, 600 360" {...ink(0.16)} />
    </Stage>
  )
}

const ART = {
  glasshouse: Glasshouse,
  'projxon-sfr': Sfr,
  'projxon-orka': Orka,
  sustain: Sustain,
  josyam: Josyam,
  mindwell: Mindwell,
}

export default function SiteThumb({ project }) {
  const Art = ART[project.id]
  return (
    <div className={`st st--${project.id}`} role="img" aria-label={`${project.name} cover art`}>
      {Art && <Art />}
    </div>
  )
}
