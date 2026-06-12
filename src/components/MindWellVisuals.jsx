const MW = {
  bg: '#FAFBFC',
  mist: '#EEF4F5',
  sage: '#DCE8E2',
  blueMist: '#DDE8F7',
  text: '#1D2939',
  muted: '#667085',
  subtle: '#98A2B3',
  accent: '#7BA892',
  accentSoft: '#A8C9B8',
  border: 'rgba(29, 41, 57, 0.08)',
}

export { MW }

function PhoneFrame({ children, label }) {
  return (
    <figure className="mw-phone">
      {label && <figcaption className="mw-phone__label">{label}</figcaption>}
      <div className="mw-phone__shell">
        <div className="mw-phone__notch" aria-hidden="true" />
        <div className="mw-phone__screen">{children}</div>
      </div>
    </figure>
  )
}

function CheckInScreen() {
  return (
    <svg viewBox="0 0 280 520" fill="none" aria-hidden="true" className="mw-screen-svg">
      <rect width="280" height="520" fill={MW.bg} />
      <rect x="0" y="0" width="280" height="120" fill="url(#mw-cloud-top)" opacity="0.9" />
      <defs>
        <linearGradient id="mw-cloud-top" x1="0" y1="0" x2="280" y2="120">
          <stop offset="0%" stopColor={MW.blueMist} />
          <stop offset="100%" stopColor={MW.bg} />
        </linearGradient>
      </defs>
      <text x="32" y="56" fill={MW.subtle} fontSize="12">
        Good morning
      </text>
      <text x="32" y="82" fill={MW.text} fontSize="18" fontFamily="Georgia, serif">
        How are you feeling?
      </text>
      <g transform="translate(32 120)">
        {[
          ['Calm', 0],
          ['Okay', 72],
          ['Low', 144],
          ['Heavy', 216],
        ].map(([mood, x]) => (
          <g key={mood} transform={`translate(${x} 0)`}>
            <rect width="56" height="56" rx="16" fill={mood === 'Calm' ? MW.sage : MW.mist} stroke={mood === 'Calm' ? MW.accent : MW.border} />
            <text x="28" y="34" textAnchor="middle" fill={MW.text} fontSize="11">
              {mood}
            </text>
          </g>
        ))}
      </g>
      <rect x="32" y="220" width="216" height="120" rx="16" fill={MW.mist} />
      <text x="48" y="252" fill={MW.subtle} fontSize="11">
        Reflection prompt
      </text>
      <text x="48" y="278" fill={MW.muted} fontSize="12">
        What is taking up space today?
      </text>
      <rect x="32" y="368" width="216" height="48" rx="24" fill={MW.accent} fillOpacity="0.85" />
      <text x="140" y="398" textAnchor="middle" fill="#fff" fontSize="13">
        Save check-in
      </text>
    </svg>
  )
}

function JournalScreen() {
  return (
    <svg viewBox="0 0 280 520" fill="none" aria-hidden="true" className="mw-screen-svg">
      <rect width="280" height="520" fill={MW.bg} />
      <text x="32" y="56" fill={MW.text} fontSize="17" fontFamily="Georgia, serif">
        Journal
      </text>
      <rect x="32" y="80" width="80" height="28" rx="14" fill={MW.sage} />
      <text x="72" y="99" textAnchor="middle" fill={MW.text} fontSize="11">
        Today
      </text>
      <rect x="32" y="132" width="216" height="280" rx="16" fill={MW.mist} stroke={MW.border} />
      <text x="48" y="168" fill={MW.muted} fontSize="12">
        I noticed I felt lighter after
      </text>
      <text x="48" y="190" fill={MW.muted} fontSize="12">
        taking a walk. Small things
      </text>
      <text x="48" y="212" fill={MW.muted} fontSize="12">
        helped more than I expected.
      </text>
      <line x1="48" y1="240" x2="232" y2="240" stroke={MW.border} />
      <text x="48" y="268" fill={MW.subtle} fontSize="11">
        Keep writing…
      </text>
    </svg>
  )
}

function ProgressScreen() {
  return (
    <svg viewBox="0 0 280 520" fill="none" aria-hidden="true" className="mw-screen-svg">
      <rect width="280" height="520" fill={MW.bg} />
      <text x="32" y="56" fill={MW.text} fontSize="17" fontFamily="Georgia, serif">
        Your week
      </text>
      <text x="32" y="80" fill={MW.muted} fontSize="12">
        4 check-ins · no streak pressure
      </text>
      <g transform="translate(32 108)">
        {[MW.sage, MW.blueMist, MW.sage, MW.mist, MW.sage, MW.blueMist, MW.mist].map((fill, i) => (
          <rect key={i} x={i * 30} y={80 - (i % 3) * 12} width="20" height={40 + (i % 3) * 12} rx="6" fill={fill} />
        ))}
      </g>
      <rect x="32" y="280" width="216" height="88" rx="16" fill={MW.blueMist} />
      <text x="48" y="312" fill={MW.text} fontSize="13" fontFamily="Georgia, serif">
        You showed up 4 times
      </text>
      <text x="48" y="336" fill={MW.muted} fontSize="11">
        That counts, even on quiet days.
      </text>
    </svg>
  )
}

export function HeroPhoneMock() {
  return (
    <PhoneFrame label="">
      <div className="mw-phone__float">
        <CheckInScreen />
      </div>
    </PhoneFrame>
  )
}

const FLOW_STEPS = [
  { label: 'Open app', note: 'Soft landing, one greeting' },
  { label: 'Mood check-in', note: 'Pick a feeling, no labels to decode' },
  { label: 'Reflection prompt', note: 'One gentle question' },
  { label: 'Journal entry', note: 'Optional, open text field' },
  { label: 'Progress tracking', note: 'Patterns without streak guilt' },
]

export function UserFlowVisual() {
  return (
    <figure className="mw-visual mw-flow" aria-labelledby="mw-flow-title">
      <figcaption id="mw-flow-title" className="mw-visual__caption">
        Five screens, one calm loop. Each step adds space instead of pressure.
      </figcaption>
      <ol className="mw-flow__steps">
        {FLOW_STEPS.map((step, i) => (
          <li key={step.label} className="mw-flow__step">
            <div className="mw-flow__rail" aria-hidden="true">
              <span className="mw-flow__dot" />
              {i < FLOW_STEPS.length - 1 && <span className="mw-flow__line" />}
            </div>
            <div className="mw-flow__content">
              <span className="mw-flow__num">{String(i + 1).padStart(2, '0')}</span>
              <strong>{step.label}</strong>
              <p>{step.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  )
}

export function UIShowcaseVisual() {
  return (
    <figure className="mw-visual mw-showcase" aria-labelledby="mw-showcase-title">
      <figcaption id="mw-showcase-title" className="mw-visual__caption">
        Three core screens from the prototype: check-in, journal, and weekly progress.
      </figcaption>
      <div className="mw-showcase__grid">
        <PhoneFrame label="Mood check-in">
          <CheckInScreen />
        </PhoneFrame>
        <PhoneFrame label="Journal">
          <JournalScreen />
        </PhoneFrame>
        <PhoneFrame label="Progress">
          <ProgressScreen />
        </PhoneFrame>
      </div>
    </figure>
  )
}

const PALETTE = [
  { name: 'Background', hex: '#FAFBFC', use: 'Page base' },
  { name: 'Mist', hex: '#EEF4F5', use: 'Soft panels' },
  { name: 'Sage', hex: '#DCE8E2', use: 'Calm accents' },
  { name: 'Blue mist', hex: '#DDE8F7', use: 'Breathing gradients' },
  { name: 'Deep text', hex: '#1D2939', use: 'Typography' },
]

export function ColorSystemGrid() {
  return (
    <div className="mw-palette">
      {PALETTE.map((swatch) => (
        <div key={swatch.name} className="mw-palette__item">
          <span className="mw-palette__chip" style={{ background: swatch.hex }} aria-hidden="true" />
          <div>
            <strong>{swatch.name}</strong>
            <span>{swatch.use}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

const MICROCOPY_PAIRS = [
  {
    context: 'Return visit',
    before: 'You missed 3 days. Get back on track!',
    after: 'Welcome back. Every check-in counts.',
  },
  {
    context: 'Daily prompt',
    before: 'Log your mood now',
    after: 'How are you feeling today?',
  },
  {
    context: 'Weekly summary',
    before: 'Complete your streak!',
    after: 'You showed up 4 times this week.',
  },
]

export function MicrocopyVisual() {
  return (
    <figure className="mw-visual mw-microcopy" aria-labelledby="mw-microcopy-title">
      <figcaption id="mw-microcopy-title" className="mw-visual__caption">
        Three moments where tone changed the emotional experience — not just the words on screen.
      </figcaption>
      <div className="mw-microcopy__grid">
        {MICROCOPY_PAIRS.map((pair) => (
          <div key={pair.context} className="mw-microcopy__pair">
            <span className="mw-microcopy__context">{pair.context}</span>
            <div className="mw-microcopy__line mw-microcopy__line--before">
              <span className="mw-microcopy__tag">Before</span>
              <p>{pair.before}</p>
            </div>
            <div className="mw-microcopy__line mw-microcopy__line--after">
              <span className="mw-microcopy__tag">After</span>
              <p>{pair.after}</p>
            </div>
          </div>
        ))}
      </div>
    </figure>
  )
}
