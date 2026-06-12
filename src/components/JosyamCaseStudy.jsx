import { useEffect, useState } from 'react'
import FadeIn from './FadeIn'
import {
  HeroShowpiece,
  RitualExperienceVisual,
  CardDesignSystemVisual,
  CardDeckExamples,
  InteractionStatesVisual,
  DesignSystemGrid,
  AIExperienceVisual,
  FinalProductVisual,
  LIVE_URL,
} from './JosyamVisuals'
import './CaseStudyShared.css'
import './JosyamCaseStudy.css'

const STICKY_NAV = [
  { id: 'josyam-overview', label: 'Overview' },
  { id: 'josyam-origin', label: 'Origin' },
  { id: 'josyam-challenge', label: 'Challenge' },
  { id: 'josyam-cards', label: 'Card System' },
  { id: 'josyam-interaction', label: 'Interaction Design' },
  { id: 'josyam-ai', label: 'AI Experience' },
  { id: 'josyam-prototype', label: 'Final Product' },
  { id: 'josyam-reflection', label: 'Reflection' },
]

const CHALLENGE_POINTS = [
  'Digital experiences can feel flat compared to cultural traditions',
  'Random card selection needed to feel intentional, not arbitrary',
  'AI responses needed to feel personal and reflective, not generic',
  'Visual design needed to feel immersive without overwhelming the user',
]

function StoryBlock({ label, title, lead, children, id, className = '' }) {
  return (
    <section className={`jy-block ${className}`} id={id}>
      <FadeIn>
        {label && <span className="jy-label">{label}</span>}
        {title && <h2 className="jy-title">{title}</h2>}
        {lead && <p className="jy-lead">{lead}</p>}
        {children}
      </FadeIn>
    </section>
  )
}

export default function JosyamCaseStudy({ project }) {
  const [activeSection, setActiveSection] = useState('josyam-overview')

  useEffect(() => {
    const sections = STICKY_NAV.map((n) => document.getElementById(n.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <article className="josyam-case-study" id="case-study-josyam">
      <nav className="jy-sticky-nav" aria-label="Case study sections">
        <ul>
          {STICKY_NAV.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                className={activeSection === id ? 'jy-sticky-nav--active' : ''}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <header className="jy-hero" id="josyam-overview">
        <div className="jy-hero__stars" aria-hidden="true" />
        <div className="jy-hero__inner">
          <FadeIn className="jy-hero__copy">
            <span className="jy-label">{project.showcase.displayCategory}</span>
            <h1 className="jy-hero-title">Josyam</h1>
            <p className="jy-hero-tagline">{project.showcase.tagline}</p>
            <div className="jy-hero-tags">
              <span>UX/UI Design</span>
              <span>Cultural Storytelling</span>
              <span>Gemini AI</span>
              <span className="jy-hero-badge">24-Hour Hackathon</span>
            </div>
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="jy-live-btn"
            >
              View Live Experience →
            </a>
            <dl className="jy-meta">
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>{project.timeline}</dd>
              </div>
              <div>
                <dt>Tools</dt>
                <dd>{project.tools.slice(0, 3).join(' · ')}</dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>Ritual flow preserved in digital form</dd>
              </div>
            </dl>
          </FadeIn>
          <FadeIn delay={120} className="jy-hero__visual">
            <HeroShowpiece />
          </FadeIn>
        </div>
      </header>

      <StoryBlock
        id="josyam-origin"
        label="Origin"
        title="The ritual experience"
        lead="Chilaka Josyam is a tradition where a parrot selects a fortune card and a reader interprets its meaning. I mapped that ritual into four connected moments users move through in the product."
        className="jy-block--muted"
      >
        <p className="jy-body jy-body--tight">
          Every screen in Josyam exists to serve one of these steps. Nothing floats on its own.
          The cards and the oracle only appear inside this flow.
        </p>
        <RitualExperienceVisual />
      </StoryBlock>

      <StoryBlock
        id="josyam-challenge"
        label="The challenge"
        title="How do you make a digital interaction feel like a ritual?"
        lead="We were not building a productivity app. We were building an experience that needed to feel intentional, personal, and a little magical."
      >
        <ul className="jy-challenge-list">
          {CHALLENGE_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </StoryBlock>

      <StoryBlock
        id="josyam-cards"
        label="Card system"
        title="Fortune cards, front and back"
        lead="Each card pairs a celestial symbol with a short meaning. I wrote and structured these so the reading could stand on its own before Gemini expanded it into conversation."
        className="jy-block--muted"
      >
        <CardDesignSystemVisual />
        <h3 className="jy-subheading">Example cards</h3>
        <CardDeckExamples />
        <h3 className="jy-subheading">Design system</h3>
        <p className="jy-body jy-body--tight">
          Moonlit blues carry the celestial mood. Gold accents mark ritual moments. Cream cards
          and white space keep the experience readable.
        </p>
        <DesignSystemGrid />
      </StoryBlock>

      <StoryBlock
        id="josyam-interaction"
        label="Interaction design"
        title="Designing surprise and anticipation"
        lead="The card reveal was the heart of Josyam. Suspenseful enough to build anticipation, simple enough to understand in an instant."
      >
        <InteractionStatesVisual />
      </StoryBlock>

      <StoryBlock
        id="josyam-ai"
        label="AI experience"
        title="Turning a card meaning into a personal reflection"
        lead="Gemini generated personalized interpretations from each selected card. The response needed to feel reflective and conversational, never robotic."
        className="jy-block--muted"
      >
        <p className="jy-body">
          After the reveal, users could continue in chat. I shaped the prompt tone so Gemini
          would mirror the card&apos;s themes, ask questions back, and leave space to sit
          with the answer rather than rush forward.
        </p>
        <AIExperienceVisual />
      </StoryBlock>

      <section className="jy-block jy-block--prototype" id="josyam-prototype">
        <FadeIn>
          <span className="jy-label">Final product</span>
          <h2 className="jy-title">Live experience</h2>
          <p className="jy-lead">
            One card. One moment of stillness. One reading that feels like it was waiting for you.
          </p>
          <div className="jy-prototype-stage">
            <FinalProductVisual />
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="jy-launch-btn"
            >
              Launch Josyam
            </a>
            <p className="jy-prototype-url">{LIVE_URL}</p>
          </div>
        </FadeIn>
      </section>

      <StoryBlock
        id="josyam-reflection"
        label="Reflection"
        title="Looking back"
        className="jy-block--closing"
      >
        <div className="jy-reflection-grid">
          <div className="jy-reflection-card jy-reflection-card--worked">
            <h3>What worked</h3>
            <ul>
              <li>The card reveal created real anticipation in user testing</li>
              <li>Gold accents made ritual moments feel distinct from navigation</li>
              <li>Gemini follow-up turned a static reading into a conversation</li>
            </ul>
          </div>
          <div className="jy-reflection-card jy-reflection-card--didnt">
            <h3>What didn&apos;t</h3>
            <ul>
              <li>Early versions felt too much like a generic tarot app</li>
              <li>Some card meanings were too long for a quick reveal moment</li>
              <li>We did not have time to test with people familiar with the tradition</li>
            </ul>
          </div>
          <div className="jy-reflection-card jy-reflection-card--improve">
            <h3>If I had more time</h3>
            <ul>
              <li>Research with people who grew up around Chilaka Josyam</li>
              <li>More nuanced card selection animation during the reveal</li>
              <li>Accessibility pass on contrast and motion</li>
            </ul>
          </div>
          <div className="jy-reflection-card jy-reflection-card--learned">
            <h3>What I learned</h3>
            <p className="jy-reflection-body">
              Josyam taught me that interaction design can carry emotion. Small details like
              pacing, animation, visual tone, and language can make a simple card selection
              feel meaningful. The biggest challenge was balancing cultural inspiration with
              a modern digital interface.
            </p>
          </div>
        </div>
      </StoryBlock>
    </article>
  )
}
