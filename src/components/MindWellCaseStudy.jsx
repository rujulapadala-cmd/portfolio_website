import { useEffect, useState } from 'react'
import FadeIn from './FadeIn'
import {
  HeroPhoneMock,
  UserFlowVisual,
  UIShowcaseVisual,
  ColorSystemGrid,
  MicrocopyVisual,
} from './MindWellVisuals'
import './CaseStudyShared.css'
import './MindWellCaseStudy.css'

const STICKY_NAV = [
  { id: 'mw-overview', label: 'Overview' },
  { id: 'mw-problem', label: 'Problem' },
  { id: 'mw-research', label: 'Research' },
  { id: 'mw-principles', label: 'Principles' },
  { id: 'mw-decisions', label: 'Decisions' },
  { id: 'mw-flow', label: 'User Flow' },
  { id: 'mw-microcopy', label: 'Microcopy' },
  { id: 'mw-ui', label: 'UI Showcase' },
  { id: 'mw-reflection', label: 'Reflection' },
]

const PROBLEM_POINTS = [
  'Most apps feel overwhelming before they help',
  'Clinical interfaces make check-ins feel like homework',
  'Too much text and too many features on day one',
  'Streak mechanics create guilt instead of support',
]

const RESEARCH_FINDINGS = [
  {
    title: 'Simplicity over features',
    text: 'People said they wanted one clear action, not a dashboard of tools waiting for them.',
  },
  {
    title: 'Emotional safety first',
    text: 'Copy tone mattered as much as layout. Judgmental language made people close the app immediately.',
  },
  {
    title: 'Consistency is fragile',
    text: 'Missed days were normal. Users needed the product to welcome them back without punishment.',
  },
]

const COMPETITORS = [
  {
    name: 'Daylio',
    focus: 'Fast mood logging, but streak mechanics and dense charts add pressure over time.',
  },
  {
    name: 'Reflectly',
    focus: 'Guided journaling with AI prompts — helpful, but the interface can feel busy on first open.',
  },
  {
    name: 'Headspace',
    focus: 'Strong brand calm, but the product spans meditation, sleep, and focus — not a simple check-in.',
  },
  {
    name: 'Apple Health',
    focus: 'Tracks mood alongside vitals, but the experience feels clinical rather than emotionally supportive.',
  },
]

const DESIGN_DECISIONS = [
  {
    title: 'No streak mechanics',
    rationale: 'Streaks create guilt, not wellbeing. MindWell celebrates showing up — even after a gap — with warm, non-judgmental copy.',
  },
  {
    title: 'Single-action home screen',
    rationale: 'One primary action per visit reduces decision fatigue. Check in first; explore resources when ready.',
  },
  {
    title: 'Soft, accessible color system',
    rationale: 'Calming sage and blue-mist tones with WCAG-compliant contrast. The interface feels gentle without sacrificing readability.',
  },
]

const PRINCIPLES = [
  { title: 'Reduce overwhelm', text: 'One primary action per screen. Everything else waits.' },
  { title: 'Encourage reflection', text: 'Short prompts that invite honesty without forcing depth.' },
  { title: 'Celebrate consistency', text: 'Acknowledge showing up. No streak counters or guilt mechanics.' },
  { title: 'Create emotional safety', text: 'Soft visuals, accessible contrast, and language that feels human.' },
]

function StoryBlock({ label, title, lead, children, id, className = '' }) {
  return (
    <section className={`mw-block ${className}`} id={id}>
      <FadeIn>
        {label && <span className="mw-label">{label}</span>}
        {title && <h2 className="mw-title">{title}</h2>}
        {lead && <p className="mw-lead">{lead}</p>}
        {children}
      </FadeIn>
    </section>
  )
}

export default function MindWellCaseStudy({ project }) {
  const [activeSection, setActiveSection] = useState('mw-overview')

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
    <article className="mindwell-case-study" id={`case-study-${project.id}`}>
      <nav className="mw-sticky-nav" aria-label="Case study sections">
        <ul>
          {STICKY_NAV.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                className={activeSection === id ? 'mw-sticky-nav--active' : ''}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <header className="mw-hero" id="mw-overview">
        <div className="mw-hero__clouds" aria-hidden="true" />
        <div className="mw-hero__inner">
          <FadeIn className="mw-hero__copy">
            <span className="mw-label">{project.showcase.displayCategory}</span>
            <h1 className="mw-hero-title">MindWell</h1>
            <p className="mw-hero-tagline">{project.showcase.tagline}</p>
            <div className="mw-hero-tags">
              <span>UX/UI Design</span>
              <span>Digital Wellbeing</span>
              <span>Figma</span>
              <span className="mw-hero-badge">Product Design</span>
            </div>
            <dl className="mw-meta">
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
                <dd>{project.tools.join(' · ')}</dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>Calmer check-in flow with no streak guilt</dd>
              </div>
            </dl>
          </FadeIn>
          <FadeIn delay={120} className="mw-hero__visual">
            <HeroPhoneMock />
          </FadeIn>
        </div>
      </header>

      <StoryBlock
        id="mw-problem"
        label="Problem"
        title="People ignore mental health apps for a reason"
        lead="Most wellness products ask for too much too soon. They feel clinical, crowded, or guilt-driven before they feel supportive."
        className="mw-block--muted"
      >
        <ul className="mw-list">
          {PROBLEM_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </StoryBlock>

      <StoryBlock
        id="mw-research"
        label="Research"
        title="Listening for emotional barriers"
        lead="I reviewed journaling and mood tracking apps and talked through common drop-off points with peers managing stress. The same patterns kept showing up."
      >
        <div className="mw-research-grid">
          {RESEARCH_FINDINGS.map((item) => (
            <div key={item.title} className="mw-research-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <h3 className="mw-subheading">Competitive audit</h3>
        <div className="mw-competitive-grid">
          {COMPETITORS.map((c) => (
            <div key={c.name} className="mw-competitive-card">
              <strong>{c.name}</strong>
              <p>{c.focus}</p>
            </div>
          ))}
        </div>
        <p className="mw-research-insight">
          The pattern was consistent: useful data, unsupportive tone. MindWell&apos;s opportunity
          was not more features — it was fewer decisions and warmer language.
        </p>
      </StoryBlock>

      <StoryBlock
        id="mw-principles"
        label="Design principles"
        title="What every screen had to do"
        lead="These four principles became my filter. If a design choice added pressure, it did not ship."
        className="mw-block--muted"
      >
        <div className="mw-principles-grid">
          {PRINCIPLES.map((principle) => (
            <div key={principle.title} className="mw-principle-card">
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </div>
          ))}
        </div>
        <h3 className="mw-subheading">Color system</h3>
        <p className="mw-body mw-body--tight">
          Airy sage and blue mist tones keep the interface soft without losing readability.
        </p>
        <ColorSystemGrid />
      </StoryBlock>

      <StoryBlock
        id="mw-decisions"
        label="Design decisions"
        title="Intentional choices"
        lead="Every screen was evaluated for cognitive load and emotional safety. These three decisions shaped the whole experience."
      >
        <div className="mw-decisions-grid">
          {DESIGN_DECISIONS.map((decision) => (
            <div key={decision.title} className="mw-decision-card">
              <h3>{decision.title}</h3>
              <p>{decision.rationale}</p>
            </div>
          ))}
        </div>
      </StoryBlock>

      <StoryBlock
        id="mw-flow"
        label="User flow"
        title="A gentle loop from check-in to reflection"
        lead="Five steps. Each one optional enough to feel safe, clear enough to feel guided."
      >
        <UserFlowVisual />
      </StoryBlock>

      <StoryBlock
        id="mw-microcopy"
        label="Microcopy"
        title="Language as a design material"
        lead="In a mental health context, a single word can feel supportive or punishing. I rewrote key moments to reduce pressure and invite honesty."
        className="mw-block--muted"
      >
        <MicrocopyVisual />
      </StoryBlock>

      <StoryBlock
        id="mw-ui"
        label="UI showcase"
        title="Screens from the prototype"
        lead="Large layouts, generous spacing, and one focal action per screen."
        className="mw-block--showcase"
      >
        <UIShowcaseVisual />
      </StoryBlock>

      <StoryBlock
        id="mw-reflection"
        label="Reflection"
        title="Looking back"
        className="mw-block--closing"
      >
        <div className="mw-reflection-grid">
          <div className="mw-reflection-card mw-reflection-card--worked">
            <h3>What worked</h3>
            <ul>
              <li>Single-action home screen reduced first-visit overwhelm in peer walkthroughs</li>
              <li>Removing streak counters changed the tone of the whole product</li>
              <li>Sage and blue-mist palette kept screens readable without feeling clinical</li>
            </ul>
          </div>
          <div className="mw-reflection-card mw-reflection-card--didnt">
            <h3>What didn&apos;t</h3>
            <ul>
              <li>Early wireframes still had too many secondary actions on the home screen</li>
              <li>Some reflection prompts felt too open-ended for low-energy days</li>
              <li>I did not test with users managing clinical anxiety or depression</li>
            </ul>
          </div>
          <div className="mw-reflection-card mw-reflection-card--improve">
            <h3>If I had more time</h3>
            <ul>
              <li>Run moderated sessions with people managing anxiety or burnout</li>
              <li>Test motion timing so transitions feel calming, not sluggish</li>
              <li>Build a clearer resource hub for crisis vs. daily support</li>
            </ul>
          </div>
          <div className="mw-reflection-card mw-reflection-card--learned">
            <h3>What I learned</h3>
            <p>
              Psychology showed up in every decision. Reducing cognitive load is an emotional
              design choice. Microcopy is part of the interface. Accessibility and emotional
              safety are the same priority.
            </p>
          </div>
        </div>
      </StoryBlock>
    </article>
  )
}
