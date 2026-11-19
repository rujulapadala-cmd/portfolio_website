// Stand-in "front pages" for projects without a public site or screenshot yet.
// Text comes from each project's own one-liner; no metrics, no fake numbers.
const SERIF = 'Cormorant Garamond, Georgia, serif'
const SANS = 'Inter, system-ui, sans-serif'

function Shell({ id, stops, children }) {
  return (
    <svg viewBox="0 0 1280 800" fill="none" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1280" y2="800" gradientUnits="userSpaceOnUse">
          {stops.map(([o, c]) => (
            <stop key={o} offset={o} stopColor={c} />
          ))}
        </linearGradient>
      </defs>
      <rect width="1280" height="800" fill={`url(#${id}-bg)`} />
      {children}
    </svg>
  )
}

function Nav({ brand, links, ink, pill }) {
  return (
    <g>
      <text x="64" y="66" fontFamily={SERIF} fontSize="30" fontWeight="600" fill={ink}>{brand}</text>
      {links.map((l, i) => (
        <text key={l} x={760 + i * 120} y="64" fontFamily={SANS} fontSize="17" fill={ink} opacity="0.7">{l}</text>
      ))}
      <rect x="1100" y="40" width="116" height="38" rx="19" fill={pill} />
    </g>
  )
}

export function ProjxonMock() {
  const tiles = Array.from({ length: 7 })
  return (
    <Shell id="mpx" stops={[[0, '#0c1735'], [0.6, '#112250'], [1, '#1a3270']]}>
      <Nav brand="PROJXON" links={['Requests', 'Teams', 'Docs']} ink="#eaf1fc" pill="#6ea8ff" />
      <text x="64" y="270" fontFamily={SERIF} fontSize="84" fontWeight="500" fill="#eaf1fc">Request tracking,</text>
      <text x="64" y="360" fontFamily={SERIF} fontSize="84" fontStyle="italic" fill="#8fbdf5">in one workflow.</text>
      <text x="64" y="428" fontFamily={SANS} fontSize="22" fill="#9fb0cf">AI-powered dashboards, one clear view.</text>
      <rect x="64" y="470" width="200" height="56" rx="28" fill="#6ea8ff" />
      <rect x="92" y="494" width="104" height="9" rx="4.5" fill="#0c1735" opacity="0.85" />
      <g transform="translate(700 190)">
        {tiles.map((_, i) => (
          <g key={i} transform={`translate(${(i % 3) * 190} ${Math.floor(i / 3) * 170})`}>
            <rect width="170" height="150" rx="18" fill="#16295a" fillOpacity="0.9" stroke="rgba(143,178,238,0.25)" />
            <rect x="18" y="20" width="70" height="9" rx="4.5" fill="#eaf1fc" opacity="0.3" />
            {[40, 62, 28, 52].map((h, j) => (
              <rect key={j} x={20 + j * 34} y={128 - h} width="22" height={h} rx="6" fill={j === 1 ? '#6ea8ff' : '#3a528f'} />
            ))}
          </g>
        ))}
      </g>
    </Shell>
  )
}

export function GlasshouseMock() {
  return (
    <Shell id="mgh" stops={[[0, '#0b1633'], [0.5, '#12214a'], [1, '#1c3270']]}>
      <circle cx="260" cy="560" r="190" fill="#4d7fd0" fillOpacity="0.3" />
      <circle cx="1020" cy="220" r="230" fill="#6a7ee0" fillOpacity="0.28" />
      <Nav brand="Glasshouse" links={['Prototype', 'Notes']} ink="#eaf1fc" pill="#a9cff0" />
      <g>
        <rect x="150" y="180" width="560" height="360" rx="30" fill="#a9cff0" fillOpacity="0.1" stroke="#a9cff0" strokeOpacity="0.5" />
        <rect x="190" y="220" width="12" height="12" rx="6" fill="#eaf1fc" opacity="0.5" />
        <rect x="214" y="220" width="12" height="12" rx="6" fill="#eaf1fc" opacity="0.35" />
        <rect x="190" y="290" width="260" height="62" rx="22" fill="#eaf1fc" fillOpacity="0.22" />
        <rect x="360" y="380" width="300" height="62" rx="22" fill="#6ea8ff" fillOpacity="0.5" />
      </g>
      <g>
        <rect x="520" y="300" width="620" height="400" rx="34" fill="#a9cff0" fillOpacity="0.12" stroke="#a9cff0" strokeOpacity="0.6" />
        <text x="830" y="470" textAnchor="middle" fontFamily={SERIF} fontSize="70" fontStyle="italic" fill="#eaf1fc" fillOpacity="0.95">Glasshouse</text>
        <text x="830" y="530" textAnchor="middle" fontFamily={SANS} fontSize="21" fill="#9fb0cf">How we interpret each other online.</text>
        <rect x="740" y="580" width="180" height="50" rx="25" fill="#6ea8ff" />
      </g>
    </Shell>
  )
}

export function MindWellMock() {
  return (
    <Shell id="mmw" stops={[[0, '#0c1735'], [0.55, '#12234f'], [1, '#17335f']]}>
      <circle cx="1040" cy="170" r="210" fill="#5f9fc0" fillOpacity="0.25" />
      <Nav brand="MindWell" links={['Check in', 'Journal', 'Resources']} ink="#eaf1fc" pill="#7fb5d8" />
      <text x="64" y="290" fontFamily={SERIF} fontSize="92" fontWeight="500" fill="#eaf1fc">A calmer way</text>
      <text x="64" y="388" fontFamily={SERIF} fontSize="92" fontStyle="italic" fill="#8cc4e3">to check in.</text>
      <text x="64" y="456" fontFamily={SANS} fontSize="22" fill="#9fb0cf">Designed for emotional safety.</text>
      <rect x="64" y="496" width="210" height="56" rx="28" fill="#7fb5d8" />
      <rect x="96" y="520" width="104" height="9" rx="4.5" fill="#0c1735" opacity="0.9" />
      <g transform="translate(820 140)">
        <rect width="270" height="560" rx="44" fill="#13244f" stroke="rgba(143,178,238,0.3)" strokeWidth="2" />
        <text x="30" y="82" fontFamily={SANS} fontSize="15" fill="#8d9bb8">Good morning</text>
        <text x="30" y="116" fontFamily={SERIF} fontSize="26" fill="#eaf1fc">How are you feeling?</text>
        {['Calm', 'Okay', 'Low', 'Heavy'].map((m, i) => (
          <g key={m} transform={`translate(${30 + i * 56} 148)`}>
            <rect width="48" height="48" rx="16" fill={i === 0 ? '#2a5878' : '#1c3166'} stroke={i === 0 ? '#7fb5d8' : 'none'} strokeWidth="1.5" />
          </g>
        ))}
        <rect x="30" y="226" width="210" height="130" rx="18" fill="#1c3166" />
        <rect x="30" y="376" width="210" height="80" rx="16" fill="#2a4a86" fillOpacity="0.7" />
        <rect x="30" y="480" width="210" height="46" rx="23" fill="#7fb5d8" />
      </g>
    </Shell>
  )
}
