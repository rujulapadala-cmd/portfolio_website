const PX = {
  bg: '#F4F2F5',
  bgDeep: '#E8E6EB',
  slate: '#3D3D48',
  slateSoft: '#6E6E73',
  blush: '#F5DCE0',
  accent: '#E18AAA',
  lavender: '#DCCFED',
  white: '#FFFFFF',
  green: '#6B9E78',
  amber: '#D4A853',
  blue: '#6B8CAE',
}

export function ProjxonCover() {
  return (
    <svg viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="px-cover-bg" x1="0" y1="0" x2="800" y2="520">
          <stop offset="0%" stopColor="#FAFAFC" />
          <stop offset="55%" stopColor={PX.bg} />
          <stop offset="100%" stopColor={PX.bgDeep} />
        </linearGradient>
        <linearGradient id="px-cover-glow" x1="400" y1="80" x2="400" y2="420" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={PX.lavender} stopOpacity="0.35" />
          <stop offset="100%" stopColor={PX.lavender} stopOpacity="0" />
        </linearGradient>
        <filter id="px-cover-shadow" x="-8%" y="-8%" width="116%" height="120%">
          <feDropShadow dx="0" dy="12" stdDeviation="18" floodColor="#3D3D48" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect width="800" height="520" fill="url(#px-cover-bg)" />
      <rect width="800" height="520" fill="url(#px-cover-glow)" />
      <circle cx="680" cy="90" r="120" fill={PX.blush} fillOpacity="0.25" />
      <circle cx="120" cy="430" r="90" fill={PX.lavender} fillOpacity="0.3" />

      <g filter="url(#px-cover-shadow)" transform="translate(72 48)">
        <rect width="656" height="424" rx="18" fill={PX.white} stroke="rgba(61,61,72,0.08)" />
        <rect width="656" height="44" rx="18" fill={PX.slate} />
        <rect y="22" width="656" height="22" fill={PX.slate} />
        <circle cx="28" cy="22" r="5" fill="#FF6B6B" fillOpacity="0.85" />
        <circle cx="48" cy="22" r="5" fill="#FFD166" fillOpacity="0.85" />
        <circle cx="68" cy="22" r="5" fill="#6BCB77" fillOpacity="0.85" />
        <text x="328" y="28" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="11" letterSpacing="0.12em">
          OPERATIONS · REQUEST DASHBOARD
        </text>

        <rect x="0" y="44" width="148" height="380" fill="#F8F8FA" />
        <rect x="148" y="44" width="1" height="380" fill="rgba(61,61,72,0.08)" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i}>
            <rect x="20" y={68 + i * 44} width="108" height="28" rx="8" fill={i === 0 ? PX.slate : PX.white} stroke="rgba(61,61,72,0.06)" />
            {i === 0 && <rect x="28" y={78 + i * 44} width="56" height="8" rx="4" fill="rgba(255,255,255,0.7)" />}
            {i !== 0 && <rect x="28" y={78 + i * 44} width={72 - i * 8} height="8" rx="4" fill={PX.bgDeep} />}
          </g>
        ))}

        <g transform="translate(168 60)">
          {[
            { val: '142', label: 'Open requests', color: PX.accent, w: 130 },
            { val: '38', label: 'In review', color: PX.amber, w: 130 },
            { val: '89%', label: 'On track', color: PX.green, w: 130 },
            { val: '7', label: 'Team views', color: PX.blue, w: 130 },
          ].map((kpi, i) => (
            <g key={kpi.label} transform={`translate(${i * 142} 0)`}>
              <rect width={kpi.w} height="72" rx="12" fill={PX.white} stroke="rgba(61,61,72,0.07)" />
              <text x="16" y="32" fill={PX.slate} fontSize="26" fontWeight="700" fontFamily="system-ui, sans-serif">
                {kpi.val}
              </text>
              <text x="16" y="52" fill={PX.slateSoft} fontSize="10">
                {kpi.label}
              </text>
              <rect x="16" y="60" width="40" height="3" rx="1.5" fill={kpi.color} fillOpacity="0.7" />
            </g>
          ))}
        </g>

        <g transform="translate(168 152)">
          <rect width="300" height="140" rx="12" fill={PX.white} stroke="rgba(61,61,72,0.07)" />
          <text x="16" y="24" fill={PX.slateSoft} fontSize="10" fontWeight="600" letterSpacing="0.06em">
            STATUS BREAKDOWN
          </text>
          {[82, 58, 44, 28, 18].map((h, i) => (
            <rect
              key={i}
              x={24 + i * 48}
              y={140 - h}
              width="32"
              height={h}
              rx="6"
              fill={i === 0 ? PX.slate : i === 1 ? PX.accent : PX.lavender}
              fillOpacity={i === 0 ? 0.85 : 0.55 + i * 0.05}
            />
          ))}
          <rect x="16" y="118" width="268" height="1" fill="rgba(61,61,72,0.06)" />
        </g>

        <g transform="translate(488 152)">
          <rect width="168" height="140" rx="12" fill={PX.white} stroke="rgba(61,61,72,0.07)" />
          <text x="16" y="24" fill={PX.slateSoft} fontSize="10" fontWeight="600" letterSpacing="0.06em">
            WORKFLOW
          </text>
          {['Submitted', 'Review', 'Approved'].map((step, i) => (
            <g key={step} transform={`translate(16 ${40 + i * 32})`}>
              <circle cx="8" cy="8" r="8" fill={i === 2 ? PX.green : PX.lavender} fillOpacity={i === 2 ? 0.9 : 0.5} />
              <text x="24" y="12" fill={PX.slate} fontSize="11">
                {step}
              </text>
              {i < 2 && (
                <path d="M8 18 L8 26" stroke={PX.slateSoft} strokeWidth="1" strokeOpacity="0.35" />
              )}
            </g>
          ))}
        </g>

        <g transform="translate(168 310)">
          <rect width="488" height="100" rx="12" fill={PX.white} stroke="rgba(61,61,72,0.07)" />
          <text x="16" y="22" fill={PX.slateSoft} fontSize="10" fontWeight="600" letterSpacing="0.06em">
            RECENT REQUESTS
          </text>
          {[0, 1, 2].map((row) => (
            <g key={row} transform={`translate(16 ${34 + row * 22})`}>
              <circle cx="6" cy="6" r="4" fill={row === 0 ? PX.green : row === 1 ? PX.amber : PX.accent} fillOpacity="0.75" />
              <rect x="20" y="2" width={180 - row * 20} height="8" rx="4" fill={PX.bgDeep} />
              <rect x="240" y="2" width="60" height="8" rx="4" fill={PX.bg} />
              <rect x="360" y="0" width="52" height="14" rx="7" fill={row === 0 ? '#E8F5EC' : row === 1 ? '#FFF8E8' : PX.blush} />
              <text x="386" y="10" textAnchor="middle" fill={PX.slateSoft} fontSize="8">
                {row === 0 ? 'Open' : row === 1 ? 'Review' : 'Done'}
              </text>
            </g>
          ))}
        </g>
      </g>
    </svg>
  )
}

const ST = {
  lavender: '#F1EEF8',
  cream: '#FBF8F2',
  sage: '#C8D9C4',
  violet: '#9B82C8',
  purple: '#6F57A8',
  pink: '#E8B7C8',
  muted: '#6F6780',
  text: '#2B2940',
}

export function SustainCover() {
  return (
    <svg viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="st-cover-bg" x1="0" y1="0" x2="800" y2="520">
          <stop offset="0%" stopColor={ST.cream} />
          <stop offset="50%" stopColor={ST.lavender} />
          <stop offset="100%" stopColor="#E8F0E6" />
        </linearGradient>
        <filter id="st-cover-shadow" x="-8%" y="-8%" width="116%" height="120%">
          <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor={ST.purple} floodOpacity="0.15" />
        </filter>
      </defs>
      <rect width="800" height="520" fill="url(#st-cover-bg)" />
      <ellipse cx="700" cy="420" rx="160" ry="100" fill={ST.sage} fillOpacity="0.25" />
      <ellipse cx="100" cy="100" rx="120" ry="80" fill={ST.pink} fillOpacity="0.2" />

      <g filter="url(#st-cover-shadow)" transform="translate(56 44)">
        <rect width="688" height="432" rx="20" fill="#fff" stroke="rgba(111,87,168,0.12)" />
        <rect x="20" y="20" width="420" height="392" rx="14" fill={ST.cream} stroke={ST.lavender} strokeWidth="1" />
        <path d="M60 140 C120 90, 200 110, 260 80 S380 60, 420 100" stroke={ST.sage} strokeWidth="2.5" fill="none" opacity="0.55" />
        <path d="M50 260 C130 220, 210 280, 300 240 S400 200, 430 280" stroke={ST.violet} strokeWidth="2" fill="none" opacity="0.45" />
        <path d="M80 340 C160 300, 240 360, 340 320" stroke={ST.purple} strokeWidth="1.5" fill="none" opacity="0.35" />
        {[
          [140, 160, 32, ST.violet],
          [260, 120, 24, ST.purple],
          [320, 240, 20, ST.pink],
          [180, 280, 18, ST.sage],
          [360, 320, 16, ST.violet],
        ].map(([cx, cy, r, fill], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={r} fill={fill} fillOpacity="0.2" stroke={ST.purple} strokeWidth="1.5" />
            <circle cx={cx} cy={cy} r="4" fill={ST.purple} />
          </g>
        ))}
        <rect x="20" y="20" width="420" height="28" rx="14" fill="rgba(255,255,255,0.85)" />
        {['Energy', 'Water', 'Grid'].map((layer, i) => (
          <g key={layer} transform={`translate(${28 + i * 72} 28)`}>
            <rect width="64" height="22" rx="11" fill={i === 0 ? ST.purple : ST.lavender} fillOpacity={i === 0 ? 0.15 : 0.5} stroke={ST.violet} strokeWidth="0.75" />
            <text x="32" y="15" textAnchor="middle" fill={ST.text} fontSize="9" fontWeight="500">
              {layer}
            </text>
          </g>
        ))}

        <rect x="460" y="20" width="208" height="392" rx="14" fill={ST.lavender} fillOpacity="0.35" stroke="rgba(111,87,168,0.1)" />
        <text x="480" y="52" fill={ST.purple} fontSize="10" fontWeight="600" letterSpacing="0.08em">
          SUSTAINABILITY SCORE
        </text>
        <circle cx="564" cy="130" r="56" stroke={ST.violet} strokeWidth="7" strokeDasharray="240 352" strokeLinecap="round" transform="rotate(-90 564 130)" />
        <circle cx="564" cy="130" r="56" stroke={ST.lavender} strokeWidth="7" strokeOpacity="0.4" fill="none" />
        <text x="564" y="128" textAnchor="middle" fill={ST.text} fontSize="32" fontWeight="700" fontFamily="Georgia, serif">
          87
        </text>
        <text x="564" y="152" textAnchor="middle" fill={ST.muted} fontSize="11">
          Strong fit
        </text>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x="480" y={190 + i * 48} width="168" height="36" rx="10" fill="#fff" stroke="rgba(111,87,168,0.08)" />
            <rect x="492" y={202 + i * 48} width={100 - i * 15} height="8" rx="4" fill={ST.violet} fillOpacity={0.7 - i * 0.1} />
            <rect x="492" y={214 + i * 48} width="60" height="5" rx="2.5" fill={ST.sage} fillOpacity="0.5" />
          </g>
        ))}
        <rect x="480" y="380" width="168" height="20" rx="10" fill={ST.lavender} />
        <rect x="480" y="380" width="120" height="20" rx="10" fill={ST.purple} fillOpacity="0.7" />
      </g>
    </svg>
  )
}

const JY = {
  moon: '#F7F8FC',
  moonlight: '#EEF2FF',
  star: '#C7D2FE',
  sky: '#DCE7FF',
  accent: '#7C8BFF',
  gold: '#E8C26A',
  cream: '#FFFBF7',
  text: '#1A1A1A',
}

export function JosyamCover() {
  const stars = [
    [120, 80], [680, 60], [720, 200], [90, 380], [640, 420], [400, 50], [250, 450], [550, 100],
  ]
  return (
    <svg viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="jy-cover-bg" x1="400" y1="0" x2="400" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor={JY.moonlight} />
          <stop offset="100%" stopColor={JY.sky} />
        </linearGradient>
        <radialGradient id="jy-cover-glow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor={JY.star} stopOpacity="0.5" />
          <stop offset="100%" stopColor={JY.moon} stopOpacity="0" />
        </radialGradient>
        <filter id="jy-cover-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="20" floodColor={JY.accent} floodOpacity="0.18" />
        </filter>
      </defs>
      <rect width="800" height="520" fill="url(#jy-cover-bg)" />
      <rect width="800" height="520" fill="url(#jy-cover-glow)" />
      {stars.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 2 === 0 ? 2 : 1.5} fill={i % 3 === 0 ? JY.gold : JY.star} fillOpacity={0.4 + (i % 3) * 0.15} />
      ))}
      <path d="M100 120 Q200 80 320 140 T540 100 T700 160" stroke={JY.star} strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M80 360 Q240 300 400 340 T720 300" stroke={JY.gold} strokeWidth="0.75" fill="none" opacity="0.35" />
      <circle cx="400" cy="200" r="3" fill={JY.gold} />
      <circle cx="320" cy="140" r="2" fill={JY.accent} fillOpacity="0.5" />
      <circle cx="540" cy="100" r="2.5" fill={JY.gold} fillOpacity="0.6" />

      <g filter="url(#jy-cover-shadow)">
        <g transform="translate(200 100) rotate(-14 60 90)">
          <rect width="120" height="180" rx="12" fill={JY.moonlight} stroke="rgba(124,139,255,0.2)" />
          <rect x="18" y="20" width="84" height="20" rx="4" fill={JY.star} fillOpacity="0.4" />
          <text x="60" y="130" textAnchor="middle" fill={JY.gold} fontSize="28" opacity="0.5">
            ☽
          </text>
        </g>
        <g transform="translate(340 72)">
          <rect width="120" height="180" rx="12" fill={JY.cream} stroke={JY.gold} strokeWidth="1.5" strokeOpacity="0.55" />
          <rect x="18" y="20" width="84" height="20" rx="4" fill={JY.moonlight} />
          <circle cx="60" cy="88" r="28" fill={JY.star} fillOpacity="0.35" stroke={JY.gold} strokeWidth="0.75" strokeOpacity="0.45" />
          <text x="60" y="94" textAnchor="middle" fill={JY.accent} fontSize="18">
            ✦
          </text>
          <text x="60" y="148" textAnchor="middle" fill={JY.text} fontSize="13" fontFamily="Georgia, serif">
            Fortune
          </text>
        </g>
        <g transform="translate(480 100) rotate(12 60 90)">
          <rect width="120" height="180" rx="12" fill={JY.moonlight} stroke="rgba(124,139,255,0.2)" />
          <rect x="24" y="36" width="72" height="108" rx="4" stroke={JY.gold} strokeWidth="0.5" strokeOpacity="0.35" fill="none" />
          <text x="60" y="100" textAnchor="middle" fill={JY.gold} fontSize="24" opacity="0.45">
            ✦
          </text>
        </g>
      </g>

      <text x="400" y="420" textAnchor="middle" fill={JY.accent} fontSize="10" letterSpacing="0.2em" opacity="0.7">
        CHOOSE · REVEAL · REFLECT
      </text>
      <path d="M280 380 Q400 360 520 380" stroke={JY.gold} strokeWidth="0.75" fill="none" opacity="0.4" />
    </svg>
  )
}

const MW = {
  bg: '#FAFBFC',
  mist: '#EEF4F5',
  sage: '#DCE8E2',
  blue: '#DDE8F7',
  text: '#1D2939',
  muted: '#667085',
  subtle: '#98A2B3',
  accent: '#7BA892',
}

export function MindWellCover() {
  return (
    <svg viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="mw-cover-bg" x1="0" y1="0" x2="800" y2="520">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor={MW.blue} />
          <stop offset="100%" stopColor={MW.mist} />
        </linearGradient>
        <filter id="mw-cover-shadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="16" stdDeviation="22" floodColor={MW.accent} floodOpacity="0.12" />
        </filter>
      </defs>
      <rect width="800" height="520" fill="url(#mw-cover-bg)" />
      <ellipse cx="650" cy="100" rx="140" ry="90" fill={MW.sage} fillOpacity="0.35" />
      <ellipse cx="150" cy="400" rx="120" ry="80" fill={MW.blue} fillOpacity="0.4" />

      <g filter="url(#mw-cover-shadow)" transform="translate(268 36)">
        <rect x="8" y="8" width="248" height="448" rx="36" fill="rgba(255,255,255,0.5)" />
        <rect width="248" height="448" rx="36" fill={MW.bg} stroke="rgba(29,41,57,0.08)" strokeWidth="1.5" />
        <rect x="80" y="14" width="88" height="6" rx="3" fill="rgba(29,41,57,0.08)" />
        <rect x="0" y="0" width="248" height="100" fill="url(#mw-cover-bg)" opacity="0.6" />
        <text x="28" y="52" fill={MW.subtle} fontSize="12">
          Good morning
        </text>
        <text x="28" y="82" fill={MW.text} fontSize="17" fontFamily="Georgia, serif">
          How are you feeling?
        </text>
        <g transform="translate(28 112)">
          {[
            ['Calm', true],
            ['Okay', false],
            ['Low', false],
            ['Heavy', false],
          ].map(([mood, active], i) => (
            <g key={mood} transform={`translate(${i * 52} 0)`}>
              <rect
                width="44"
                height="44"
                rx="14"
                fill={active ? MW.sage : MW.mist}
                stroke={active ? MW.accent : 'rgba(29,41,57,0.06)'}
                strokeWidth={active ? 1.5 : 1}
              />
              <text x="22" y="28" textAnchor="middle" fill={MW.text} fontSize="9">
                {mood}
              </text>
            </g>
          ))}
        </g>
        <rect x="28" y="180" width="192" height="100" rx="16" fill={MW.mist} />
        <text x="44" y="208" fill={MW.subtle} fontSize="10">
          Reflection prompt
        </text>
        <text x="44" y="232" fill={MW.muted} fontSize="11">
          What is taking up space today?
        </text>
        <rect x="28" y="300" width="192" height="72" rx="14" fill={MW.blue} fillOpacity="0.45" />
        <text x="44" y="328" fill={MW.muted} fontSize="10">
          Journal
        </text>
        <line x1="44" y1="348" x2="180" y2="348" stroke="rgba(29,41,57,0.08)" />
        <line x1="44" y1="360" x2="140" y2="360" stroke="rgba(29,41,57,0.06)" />
        <rect x="28" y="392" width="192" height="40" rx="20" fill={MW.accent} fillOpacity="0.88" />
        <text x="124" y="418" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="500">
          Save check-in
        </text>
      </g>

      <g transform="translate(560 160)" opacity="0.85">
        <rect width="120" height="80" rx="14" fill="rgba(255,255,255,0.7)" stroke="rgba(123,168,146,0.2)" />
        <text x="16" y="28" fill={MW.text} fontSize="11" fontFamily="Georgia, serif">
          Your week
        </text>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect
            key={i}
            x={16 + i * 14}
            y={72 - (i % 3) * 8}
            width="10"
            height={24 + (i % 3) * 8}
            rx="4"
            fill={i % 2 === 0 ? MW.sage : MW.blue}
            fillOpacity="0.7"
          />
        ))}
      </g>
    </svg>
  )
}

const COVERS = {
  projxon: ProjxonCover,
  sustain: SustainCover,
  josyam: JosyamCover,
  mindwell: MindWellCover,
}

export default function ProjectCardCover({ projectId, alt }) {
  const Cover = COVERS[projectId]
  if (!Cover) return null

  return (
    <div className="project-card__cover" role="img" aria-label={alt}>
      <div className="project-card__cover-inner">
        <Cover />
      </div>
    </div>
  )
}
