function BrainIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="universe-card__art-svg">
      <path
        d="M32 10c-8 0-14 6-14 14 0 3 1 6 3 8-2 2-3 5-3 8 0 7 6 12 14 12s14-5 14-12c0-3-1-6-3-8 2-2 3-5 3-8 0-8-6-14-14-14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M32 10v44M22 22c4 2 8 2 10 0M22 32c4 2 8 2 10 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function StickyNotesIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="universe-card__art-svg">
      <rect x="14" y="18" width="28" height="28" rx="3" fill="currentColor" opacity="0.12" transform="rotate(-8 28 32)" />
      <rect x="22" y="14" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="1.5" transform="rotate(4 36 28)" />
      <line x1="28" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="1.2" opacity="0.45" transform="rotate(4 36 28)" />
      <line x1="28" y1="30" x2="40" y2="30" stroke="currentColor" strokeWidth="1.2" opacity="0.35" transform="rotate(4 36 28)" />
    </svg>
  )
}

function StoryIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="universe-card__art-svg">
      <path d="M38 14c0 8-6 12-10 16-4-4-10-8-10-16a10 10 0 1 1 20 0Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M28 30v18l8-4 8 4V30" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="48" cy="16" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="52" cy="24" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="14" cy="20" r="1" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

function SystemsIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="universe-card__art-svg">
      <rect x="12" y="14" width="40" height="36" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="24" x2="52" y2="24" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <rect x="18" y="30" width="10" height="8" rx="1.5" fill="currentColor" opacity="0.15" />
      <rect x="32" y="30" width="10" height="8" rx="1.5" fill="currentColor" opacity="0.15" />
      <rect x="18" y="42" width="24" height="4" rx="1" fill="currentColor" opacity="0.2" />
    </svg>
  )
}

function WhisperButterfly() {
  return (
    <svg
      className="universe-whimsy-icon universe-whimsy-icon--butterfly"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3C9 7 5.5 8.5 3 7c1.5 4 4 6.5 9 7.5 5-1 7.5-3.5 9-7.5-2.5 1.5-6 0-9-4Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.5v5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  )
}

function WhisperSpark() {
  return (
    <svg
      className="universe-whimsy-icon universe-whimsy-icon--spark"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 1.5v13M1.5 8h13M3.8 3.8l8.4 8.4M12.2 3.8l-8.4 8.4"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="8" cy="8" r="1.6" fill="currentColor" />
    </svg>
  )
}

function WhimsyFloat({ trackClass, kind = 'spark' }) {
  return (
    <div className={`universe-whimsy-track ${trackClass}`}>
      {kind === 'butterfly' ? <WhisperButterfly /> : <WhisperSpark />}
    </div>
  )
}

const CARDS = [
  {
    id: 'psychology',
    title: 'Psychology',
    tagline: 'Understanding behavior',
    Illustration: BrainIllustration,
    tone: 'lavender',
    position: 'one',
  },
  {
    id: 'research',
    title: 'Research',
    tagline: 'Finding patterns',
    Illustration: StickyNotesIllustration,
    tone: 'cream',
    position: 'two',
  },
  {
    id: 'storytelling',
    title: 'Storytelling',
    tagline: 'Creating meaning',
    Illustration: StoryIllustration,
    tone: 'blush',
    position: 'three',
  },
  {
    id: 'systems',
    title: 'Systems',
    tagline: 'Designing clarity',
    Illustration: SystemsIllustration,
    tone: 'blush-deep',
    position: 'four',
  },
]

export default function DesignUniverse() {
  return (
    <div className="design-universe" aria-label="Personal design universe">
      <div className="design-universe__glow" aria-hidden="true" />

      <div className="design-universe__cluster">
        {CARDS.map((card) => (
          <article
            key={card.id}
            className={`universe-card universe-card--${card.tone}`}
          >
            <div className="universe-card__art">
              <card.Illustration />
            </div>
            <h2 className="universe-card__title">{card.title}</h2>
            <p className="universe-card__tagline">{card.tagline}</p>
          </article>
        ))}
      </div>

      <div className="design-universe__whimsy" aria-hidden="true">
        <WhimsyFloat trackClass="universe-whimsy-track--one" kind="butterfly" />
        <WhimsyFloat trackClass="universe-whimsy-track--two" kind="spark" />
        <WhimsyFloat trackClass="universe-whimsy-track--three" kind="spark" />
        <WhimsyFloat trackClass="universe-whimsy-track--four" kind="butterfly" />
        <WhimsyFloat trackClass="universe-whimsy-track--five" kind="spark" />
      </div>
    </div>
  )
}
