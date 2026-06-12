const LIVE_URL = 'https://josyam.vercel.app/'

const JY = {
  moon: '#F7F8FC',
  moonlight: '#EEF2FF',
  star: '#C7D2FE',
  sky: '#DCE7FF',
  twilight: '#BFCBFF',
  accent: '#7C8BFF',
  gold: '#E8C26A',
  goldSoft: '#F0D48A',
  cream: '#FFFBF7',
  surface: '#ffffff',
  text: '#1A1A1A',
  muted: '#5c5c5c',
  subtle: '#8a8a8a',
  border: 'rgba(124, 139, 255, 0.18)',
}

export { LIVE_URL, JY }

function TarotCard({ x, y, rotate = 0, scale = 1, label, active = false, back = false, w = 88, h = 128 }) {
  const width = w * scale
  const height = h * scale
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate} ${width / 2} ${height / 2})`}>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        rx="10"
        fill={back ? JY.moonlight : active ? JY.cream : JY.surface}
        stroke={active ? JY.gold : JY.border}
        strokeWidth={active ? 2 : 1}
      />
      {!back && (
        <>
          <rect x={width * 0.12} y={height * 0.08} width={width * 0.76} height={height * 0.1} rx="2" fill={JY.star} fillOpacity="0.5" />
          <circle cx={width / 2} cy={height * 0.38} r={width * 0.14} fill={JY.moonlight} stroke={JY.gold} strokeWidth="0.75" strokeOpacity="0.45" />
          <text x={width / 2} y={height * 0.42} textAnchor="middle" fill={JY.accent} fontSize={12 * scale} opacity="0.8">
            ✦
          </text>
          {label && (
            <text
              x={width / 2}
              y={height * 0.82}
              textAnchor="middle"
              fill={JY.text}
              fontSize={10 * scale}
              fontFamily="Georgia, serif"
            >
              {label}
            </text>
          )}
        </>
      )}
      {back && (
        <>
          <rect x={width * 0.15} y={height * 0.15} width={width * 0.7} height={height * 0.7} rx="4" stroke={JY.gold} strokeWidth="0.5" strokeOpacity="0.4" fill="none" />
          <text x={width / 2} y={height / 2 + 5} textAnchor="middle" fill={JY.gold} fontSize={20 * scale} opacity="0.55">
            ☽
          </text>
        </>
      )}
    </g>
  )
}

export function HeroShowpiece() {
  return (
    <figure className="jy-visual jy-hero-card" aria-labelledby="jy-hero-card-title">
      <title id="jy-hero-card-title">Josyam card selection moment</title>
      <div className="jy-hero-card__frame jy-hero-card__frame--float">
        <svg viewBox="0 0 400 480" fill="none">
          <defs>
            <radialGradient id="jy-hero-glow" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor={JY.star} stopOpacity="0.55" />
              <stop offset="100%" stopColor={JY.moon} stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="480" rx="20" fill={JY.moonlight} />
          <rect width="400" height="480" rx="20" fill="url(#jy-hero-glow)" />
          {[
            [40, 60], [340, 80], [320, 360], [60, 380], [200, 40], [180, 420],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i % 2 === 0 ? 1.5 : 2} fill={JY.gold} fillOpacity={0.35 + (i % 3) * 0.15} />
          ))}
          <path d="M60 100 L140 80 L200 120 L280 90" stroke={JY.star} strokeWidth="0.75" fill="none" opacity="0.6" />
          <TarotCard x={88} y={96} rotate={-12} scale={0.85} back />
          <TarotCard x={118} y={78} rotate={-4} scale={1.1} label="Fortune" active />
          <TarotCard x={168} y={86} rotate={8} scale={0.9} back />
          <TarotCard x={208} y={104} rotate={14} scale={0.8} back />
          <text x="200" y="420" textAnchor="middle" fill={JY.subtle} fontSize="10" letterSpacing="0.16em">
            STEP 01 · CHOOSE A CARD
          </text>
        </svg>
      </div>
    </figure>
  )
}

const RITUAL_STEPS = [
  {
    num: '01',
    title: 'Choose a card',
    note: 'Scroll into the deck and pick one card.',
  },
  {
    num: '02',
    title: 'Receive a fortune',
    note: 'The card reveals a symbol and a short reading.',
  },
  {
    num: '03',
    title: 'Talk to the oracle',
    note: 'Gemini expands the meaning into conversation.',
  },
  {
    num: '04',
    title: 'Reflect & interpret',
    note: 'You sit with the answer and respond in your own words.',
  },
]

function StepIcon({ type }) {
  if (type === 'choose') {
    return (
      <g>
        <rect x="4" y="10" width="40" height="58" rx="6" fill={JY.moonlight} stroke={JY.border} transform="rotate(-12 24 39)" />
        <rect x="18" y="4" width="40" height="58" rx="6" fill={JY.moonlight} stroke={JY.border} transform="rotate(-4 38 33)" />
        <rect x="32" y="0" width="40" height="58" rx="6" fill={JY.cream} stroke={JY.gold} strokeWidth="1" strokeOpacity="0.5" />
        <text x="52" y="34" textAnchor="middle" fill={JY.accent} fontSize="12">
          ✦
        </text>
      </g>
    )
  }
  if (type === 'fortune') {
    return (
      <g>
        <rect x="16" y="8" width="48" height="68" rx="6" fill={JY.cream} stroke={JY.gold} strokeWidth="1.25" />
        <circle cx="40" cy="34" r="12" fill={JY.star} fillOpacity="0.45" />
        <text x="40" y="38" textAnchor="middle" fill={JY.accent} fontSize="14">
          ✦
        </text>
        <path d="M28 52 Q40 46 52 52" stroke={JY.gold} strokeWidth="1" fill="none" opacity="0.5" />
      </g>
    )
  }
  if (type === 'oracle') {
    return (
      <g>
        <rect x="10" y="18" width="56" height="34" rx="10" fill={JY.moonlight} stroke={JY.border} />
        <rect x="18" y="42" width="44" height="28" rx="10" fill={JY.surface} stroke={JY.gold} strokeWidth="1" strokeOpacity="0.45" />
        <circle cx="28" cy="56" r="2" fill={JY.gold} />
        <circle cx="36" cy="56" r="2" fill={JY.gold} opacity="0.5" />
        <circle cx="44" cy="56" r="2" fill={JY.gold} opacity="0.35" />
      </g>
    )
  }
  return (
    <g>
      <rect x="14" y="12" width="52" height="60" rx="6" fill={JY.surface} stroke={JY.border} />
      <line x1="22" y1="28" x2="58" y2="28" stroke={JY.star} strokeWidth="1" />
      <line x1="22" y1="40" x2="50" y2="40" stroke={JY.star} strokeWidth="1" opacity="0.6" />
      <line x1="22" y1="52" x2="54" y2="52" stroke={JY.star} strokeWidth="1" opacity="0.4" />
      <text x="40" y="22" textAnchor="middle" fill={JY.gold} fontSize="10">
        ☽
      </text>
    </g>
  )
}

export function RitualExperienceVisual() {
  const icons = ['choose', 'fortune', 'oracle', 'reflect']
  const stepWidth = 168
  const gap = 48
  const startX = 40
  const centers = RITUAL_STEPS.map((_, i) => startX + i * (stepWidth + gap) + stepWidth / 2)

  return (
    <figure className="jy-visual jy-ritual-flow" aria-labelledby="jy-ritual-flow-title">
      <figcaption id="jy-ritual-flow-title" className="jy-visual__caption">
        The four moments that define Josyam. Each product screen maps to one step in this ritual.
      </figcaption>
      <div className="jy-ritual-flow__frame">
        <svg viewBox="0 0 920 280" fill="none" className="jy-ritual-flow__svg" role="img">
          <title>Josyam ritual experience: choose, receive, talk, reflect</title>
          <defs>
            <linearGradient id="jy-ritual-wash" x1="0" y1="0" x2="920" y2="280">
              <stop offset="0%" stopColor={JY.moonlight} />
              <stop offset="100%" stopColor={JY.moon} />
            </linearGradient>
          </defs>
          <rect width="920" height="280" rx="18" fill={JY.surface} stroke={JY.border} />
          <rect x="1" y="1" width="918" height="278" rx="17" fill="url(#jy-ritual-wash)" opacity="0.6" />
          {centers.slice(0, -1).map((cx, i) => {
            const next = centers[i + 1]
            const mid = (cx + next) / 2
            return (
              <g key={i}>
                <path
                  d={`M${cx + 52} 118 Q${mid} 92 ${next - 52} 118`}
                  stroke={JY.star}
                  strokeWidth="1.25"
                  fill="none"
                />
                <circle cx={mid} cy={92} r="2.5" fill={JY.gold} fillOpacity="0.7" />
                <circle cx={(cx + mid) / 2} cy={102} r="1.5" fill={JY.accent} fillOpacity="0.35" />
                <circle cx={(mid + next) / 2} cy={102} r="1.5" fill={JY.accent} fillOpacity="0.35" />
              </g>
            )
          })}
          {RITUAL_STEPS.map((step, i) => {
            const x = startX + i * (stepWidth + gap)
            const words = step.note.split(' ')
            const line1 = words.slice(0, Math.ceil(words.length / 2)).join(' ')
            const line2 = words.slice(Math.ceil(words.length / 2)).join(' ')
            return (
              <g key={step.num} transform={`translate(${x} 36)`}>
                <rect width={stepWidth} height="208" rx="14" fill={JY.cream} stroke={JY.gold} strokeWidth="1" strokeOpacity="0.35" />
                <text x={stepWidth / 2} y="22" textAnchor="middle" fill={JY.gold} fontSize="11" letterSpacing="0.14em">
                  {step.num}
                </text>
                <g transform={`translate(${stepWidth / 2 - 40} 34)`}>
                  <StepIcon type={icons[i]} />
                </g>
                <text
                  x={stepWidth / 2}
                  y="138"
                  textAnchor="middle"
                  fill={JY.text}
                  fontSize="14"
                  fontFamily="Georgia, serif"
                >
                  {step.title}
                </text>
                <text x={stepWidth / 2} y="162" textAnchor="middle" fill={JY.muted} fontSize="11">
                  <tspan x={stepWidth / 2} dy="0">
                    {line1}
                  </tspan>
                  {line2 && (
                    <tspan x={stepWidth / 2} dy="14">
                      {line2}
                    </tspan>
                  )}
                </text>
              </g>
            )
          })}
        </svg>
        <ol className="jy-ritual-flow__list">
          {RITUAL_STEPS.map((step) => (
            <li key={step.num}>
              <span className="jy-ritual-flow__num">{step.num}</span>
              <div>
                <strong>{step.title}</strong>
                <p>{step.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  )
}

export function CardDesignSystemVisual() {
  return (
    <figure className="jy-visual jy-card-system" aria-labelledby="jy-card-system-title">
      <figcaption id="jy-card-system-title" className="jy-visual__caption">
        Card front, card back, and the shared icon language that ties the deck together.
      </figcaption>
      <svg viewBox="0 0 720 240" fill="none" className="jy-card-system__svg">
        <title>Josyam card design system</title>
        <g transform="translate(32 20)">
          <text x="80" y="0" textAnchor="middle" fill={JY.subtle} fontSize="10" letterSpacing="0.12em">
            CARD FRONT
          </text>
          <rect y="12" width="160" height="200" rx="12" fill={JY.cream} stroke={JY.gold} strokeWidth="1.25" />
          <rect x="20" y="28" width="120" height="24" rx="4" fill={JY.moonlight} />
          <text x="80" y="46" textAnchor="middle" fill={JY.accent} fontSize="14">
            ☽
          </text>
          <circle cx="80" cy="108" r="28" fill={JY.star} fillOpacity="0.4" stroke={JY.gold} strokeWidth="0.5" strokeOpacity="0.45" />
          <text x="80" y="168" textAnchor="middle" fill={JY.text} fontSize="14" fontFamily="Georgia, serif">
            Fortune
          </text>
        </g>
        <g transform="translate(280 20)">
          <text x="80" y="0" textAnchor="middle" fill={JY.subtle} fontSize="10" letterSpacing="0.12em">
            CARD BACK
          </text>
          <rect y="12" width="160" height="200" rx="12" fill={JY.moonlight} stroke={JY.border} />
          <rect x="24" y="36" width="112" height="152" rx="6" stroke={JY.gold} strokeWidth="0.75" strokeOpacity="0.4" fill="none" />
          <text x="80" y="118" textAnchor="middle" fill={JY.gold} fontSize="28" opacity="0.55">
            ✦
          </text>
        </g>
        <g transform="translate(528 20)">
          <text x="80" y="0" textAnchor="middle" fill={JY.subtle} fontSize="10" letterSpacing="0.12em">
            ICON LANGUAGE
          </text>
          <rect y="12" width="160" height="200" rx="12" fill={JY.surface} stroke={JY.border} />
          {[
            ['☽', 'Moon', 48],
            ['✦', 'Star', 88],
            ['☀', 'Sun', 128],
            ['⟡', 'Mark', 168],
          ].map(([sym, label, cy]) => (
            <g key={label}>
              <circle cx="40" cy={cy} r="16" fill={JY.moonlight} />
              <text x="40" y={cy + 5} textAnchor="middle" fill={JY.accent} fontSize="13">
                {sym}
              </text>
              <text x="72" y={cy + 4} fill={JY.text} fontSize="12">
                {label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </figure>
  )
}

const EXAMPLE_CARDS = [
  { title: 'Destiny', symbol: '☽', meaning: 'What you are moving toward' },
  { title: 'Fortune', symbol: '✦', meaning: 'What the moment offers' },
  { title: 'Path', symbol: '⟡', meaning: 'Where patience leads' },
  { title: 'Journey', symbol: '☀', meaning: 'What you carry forward' },
]

export function CardDeckExamples() {
  return (
    <figure className="jy-visual jy-deck" aria-labelledby="jy-deck-title">
      <div className="jy-deck__grid">
        {EXAMPLE_CARDS.map((card) => (
          <div key={card.title} className="jy-deck__card">
            <svg viewBox="0 0 160 220" aria-hidden="true">
              <rect width="160" height="220" rx="12" fill={JY.cream} stroke={JY.gold} strokeWidth="1" strokeOpacity="0.4" />
              <rect x="18" y="16" width="124" height="28" rx="4" fill={JY.moonlight} />
              <text x="80" y="36" textAnchor="middle" fill={JY.accent} fontSize="14">
                {card.symbol}
              </text>
              <circle cx="80" cy="98" r="28" fill={JY.star} fillOpacity="0.35" stroke={JY.gold} strokeWidth="0.5" strokeOpacity="0.4" />
              <text x="80" y="168" textAnchor="middle" fill={JY.text} fontSize="15" fontFamily="Georgia, serif">
                {card.title}
              </text>
            </svg>
            <p className="jy-deck__meaning">{card.meaning}</p>
          </div>
        ))}
      </div>
    </figure>
  )
}

const INTERACTION_STATES = [
  { state: 'Hover', note: 'Card lifts, gold edge glows' },
  { state: 'Selected', note: 'Deck fades, one card holds focus' },
  { state: 'Reveal', note: 'Slow unfold, stars drift in' },
  { state: 'Meaning', note: 'Reading appears beneath the card' },
]

export function InteractionStatesVisual() {
  return (
    <figure className="jy-visual jy-interaction">
      <div className="jy-interaction__grid">
        {INTERACTION_STATES.map((item, i) => (
          <div key={item.state} className="jy-interaction__card">
            <svg viewBox="0 0 140 180" aria-hidden="true">
              <rect width="140" height="180" rx="10" fill={JY.moonlight} stroke={JY.border} />
              <rect
                x="20"
                y={i === 0 ? 28 : i === 1 ? 24 : 32}
                width="100"
                height="120"
                rx="6"
                fill={JY.cream}
                stroke={i >= 1 ? JY.gold : JY.border}
                strokeWidth={i === 1 ? 2 : 1}
              />
              {i === 2 && (
                <path d="M50 90 L70 70 L90 90 L70 110 Z" fill={JY.gold} fillOpacity="0.4" />
              )}
              {i === 3 && (
                <text x="70" y="88" textAnchor="middle" fill={JY.text} fontSize="10" fontFamily="Georgia, serif">
                  The Path
                </text>
              )}
            </svg>
            <strong>{item.state}</strong>
            <p>{item.note}</p>
          </div>
        ))}
      </div>
    </figure>
  )
}

const PALETTE = [
  { name: 'Moon', hex: '#F7F8FC', use: 'Page background' },
  { name: 'Sky', hex: '#DCE7FF', use: 'Soft panels' },
  { name: 'Twilight', hex: '#BFCBFF', use: 'Secondary accent' },
  { name: 'Oracle Gold', hex: '#E8C26A', use: 'Ritual highlights' },
  { name: 'Ink', hex: '#1A1A1A', use: 'Typography' },
]

export function DesignSystemGrid() {
  return (
    <div className="jy-palette-grid">
      {PALETTE.map((swatch) => (
        <div key={swatch.name} className="jy-palette-group">
          <span className="jy-palette-group__chip" style={{ background: swatch.hex }} aria-hidden="true" />
          <div>
            <strong>{swatch.name}</strong>
            <span>{swatch.use}</span>
            <code>{swatch.hex}</code>
          </div>
        </div>
      ))}
    </div>
  )
}

export function AIExperienceVisual() {
  return (
    <figure className="jy-visual jy-ai">
      <div className="jy-ai__frame">
        <div className="jy-ai__header">
          <span className="jy-ai__chip">Path</span>
          <span className="jy-ai__label">Your reading continues</span>
        </div>
        <div className="jy-ai__messages">
          <div className="jy-ai__bubble jy-ai__bubble--oracle">
            <p>A path opens where patience meets intention. What part of that feels true right now?</p>
          </div>
          <div className="jy-ai__bubble jy-ai__bubble--user">
            <p>I keep rushing decisions I should sit with.</p>
          </div>
          <div className="jy-ai__bubble jy-ai__bubble--oracle">
            <p>The card did not ask you to decide faster. It asked you to notice the hurry itself.</p>
          </div>
        </div>
        <div className="jy-ai__input" aria-hidden="true">
          <span>Reflect with Gemini…</span>
        </div>
      </div>
    </figure>
  )
}

export function FinalProductVisual() {
  return (
    <figure className="jy-visual jy-final">
      <svg viewBox="0 0 720 440" fill="none" aria-labelledby="jy-final-title">
        <title id="jy-final-title">Josyam final experience</title>
        <defs>
          <radialGradient id="jy-final-glow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor={JY.star} stopOpacity="0.5" />
            <stop offset="100%" stopColor={JY.moon} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="720" height="440" rx="20" fill={JY.moonlight} />
        <rect width="720" height="440" rx="20" fill="url(#jy-final-glow)" />
        <TarotCard x={286} y={48} rotate={0} scale={1.4} label="Your reading" active />
        <text x="360" y="340" textAnchor="middle" fill={JY.text} fontSize="16" fontFamily="Georgia, serif">
          A path opens where patience meets intention.
        </text>
        <rect x="200" y="368" width="320" height="40" rx="20" fill={JY.surface} stroke={JY.border} />
        <text x="360" y="394" textAnchor="middle" fill={JY.accent} fontSize="12">
          Continue with Gemini
        </text>
      </svg>
    </figure>
  )
}
