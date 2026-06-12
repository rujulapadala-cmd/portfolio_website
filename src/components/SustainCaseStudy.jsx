import { useEffect, useState } from 'react'
import FadeIn from './FadeIn'
import {
  HeroConceptVisual,
  ProblemInfographic,
  IAUserJourney,
  ColorPaletteGrid,
  WalkthroughPreview,
  LIVE_URL,
} from './SustainVisuals'
import './CaseStudyShared.css'
import './SustainCaseStudy.css'

const STICKY_NAV = [
  { id: 'sustain-overview', label: 'Overview' },
  { id: 'sustain-problem', label: 'Problem' },
  { id: 'sustain-research', label: 'Research' },
  { id: 'sustain-ia', label: 'IA' },
  { id: 'sustain-colors', label: 'Color' },
  { id: 'sustain-walkthrough', label: 'Walkthrough' },
  { id: 'sustain-prototype', label: 'Live product' },
  { id: 'sustain-reflection', label: 'Reflection' },
]

const RESEARCH_QUESTIONS = [
  'Where do people get stuck when comparing sites?',
  'Which factors matter first: energy, water, cost?',
  'What do existing tools make unnecessarily hard?',
  'Does one score help, or oversimplify things?',
]

const COMPETITORS = [
  {
    name: 'Google Data Centers',
    focus: 'Good sustainability reporting, but not really for comparing two candidate sites',
  },
  {
    name: 'Microsoft Sustainability',
    focus: 'High-level environmental goals, less useful for day-to-day site evaluation',
  },
  {
    name: 'AWS Infrastructure',
    focus: 'Deep regional data, but dense if you just need a quick read',
  },
  {
    name: 'GIS & mapping tools',
    focus: 'Powerful maps, but they assume you already know how to read them',
  },
]

function StoryBlock({ label, title, lead, children, id, className = '' }) {
  return (
    <section className={`st-block ${className}`} id={id}>
      <FadeIn>
        {label && <span className="st-label">{label}</span>}
        {title && <h2 className="st-title">{title}</h2>}
        {lead && <p className="st-lead">{lead}</p>}
        {children}
      </FadeIn>
    </section>
  )
}

export default function SustainCaseStudy({ project }) {
  const [activeSection, setActiveSection] = useState('sustain-overview')

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
    <article className="sustain-case-study" id={`case-study-${project.id}`}>
      <nav className="st-sticky-nav" aria-label="Case study sections">
        <ul>
          {STICKY_NAV.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                className={activeSection === id ? 'st-sticky-nav--active' : ''}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <header className="st-hero" id="sustain-overview">
        <FadeIn>
          <span className="st-label">{project.showcase.displayCategory}</span>
          <h1 className="st-hero-title">SustAIn</h1>
          <p className="st-hero-tagline">{project.showcase.tagline}</p>
          <div className="st-hero-tags">
            <span>UX/UI Design</span>
            <span>AI</span>
            <span>Sustainability</span>
            <span className="st-hero-badge">4-Hour Hackathon</span>
          </div>
          <dl className="st-meta">
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
              <dd>One score up top, details behind filters</dd>
            </div>
          </dl>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="st-live-banner">
            <div className="st-live-banner__text">
              <span className="st-live-banner__eyebrow">Live product</span>
              <strong>It&apos;s deployed. Link below.</strong>
              <p>
                The write-up covers what I did in the sprint. The site is the thing we shipped.
              </p>
            </div>
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="st-live-banner__link"
            >
              Visit SustAIn →
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={180}>
          <div className="st-hero-visual">
            <HeroConceptVisual />
          </div>
        </FadeIn>
      </header>

      <StoryBlock
        id="sustain-problem"
        label="The problem"
        title="Too much data, not an easy way to compare"
        lead="Picking a data center site means weighing energy, water, environmental impact, infrastructure, and cost. We had datasets for all of it. The hard part was getting someone to compare two regions without opening spreadsheets, a GIS tool, and three browser tabs."
        className="st-block--muted"
      >
        <ProblemInfographic />
      </StoryBlock>

      <StoryBlock
        id="sustain-research"
        label="Research & discovery"
        title="Research before designing"
        lead="Four hours isn't much. I spent the first chunk skimming a few existing tools and writing down what the UI needed to do before I started laying anything out."
      >
        <div className="st-research-grid">
          <div className="st-research-questions">
            <h3>Questions I asked</h3>
            <ul>
              {RESEARCH_QUESTIONS.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
          <div className="st-competitive">
            <h3>Competitive analysis</h3>
            <div className="st-competitive-cards">
              {COMPETITORS.map((c) => (
                <FadeIn key={c.name}>
                  <div className="st-competitive-card">
                    <strong>{c.name}</strong>
                    <p>{c.focus}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
        <p className="st-research-insight">
          Same pattern everywhere: plenty of data, no obvious place to start. I tried
          leading with one sustainability score and tucking the breakdown behind filters.
        </p>
      </StoryBlock>

      <StoryBlock
        id="sustain-ia"
        label="Information architecture"
        title="Four steps, four screens"
        lead="I split the product into search, map, compare, and decide. Not because that's the only way to do it, but because showing every dataset upfront made the first version unusable."
        className="st-block--muted"
      >
        <IAUserJourney />
      </StoryBlock>

      <StoryBlock
        id="sustain-colors"
        label="Color"
        title="The palette from the live site"
        lead="I didn't build a new color system. The product already used lavender, purple, and cream, so I documented what was there and kept my screens consistent with it."
        className="st-block--language"
      >
        <ColorPaletteGrid />
      </StoryBlock>

      <StoryBlock
        id="sustain-walkthrough"
        label="Product walkthrough"
        title="What's in the prototype"
        lead="Three main screens. Each card links out to the live site if you want to click around."
      >
        <div className="st-walkthrough-grid">
          <WalkthroughPreview
            feature="map"
            title="Interactive map"
            description="Toggle layers for energy, water, fiber. You choose what shows on the map."
          />
          <WalkthroughPreview
            feature="ai"
            title="Sustainability score"
            description="One number up top, with a short breakdown if you want to dig in."
          />
          <WalkthroughPreview
            feature="compare"
            title="Location comparison"
            description="Two regions side by side. We didn't have time to build anything fancier."
          />
        </div>
      </StoryBlock>

      <section className="st-block st-block--prototype" id="sustain-prototype">
        <FadeIn>
          <span className="st-label">Final prototype</span>
          <h2 className="st-title">Live site</h2>
          <p className="st-lead">
            This is what we shipped. Everything above is how I got there.
          </p>
          <div className="st-prototype-stage">
            <HeroConceptVisual />
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="st-launch-btn"
            >
              Launch SustAIn
            </a>
            <p className="st-prototype-url">{LIVE_URL}</p>
          </div>
        </FadeIn>
      </section>

      <StoryBlock
        id="sustain-reflection"
        label="Reflection"
        title="Looking back"
        className="st-block--closing"
      >
        <div className="st-reflection-grid">
          <div className="st-reflection-card st-reflection-card--worked">
            <h3>What worked</h3>
            <ul>
              <li>One score at the top made the map much easier to scan</li>
              <li>Filters kept the first view from turning into a wall of layers</li>
              <li>Reusing the same card layout across screens because we were out of time</li>
            </ul>
          </div>
          <div className="st-reflection-card st-reflection-card--didnt">
            <h3>What didn&apos;t</h3>
            <ul>
              <li>My first layout threw everything on one screen and it was hard to follow</li>
              <li>Map layers fought each other until I simplified the hierarchy</li>
              <li>We never really explained how the score was calculated</li>
            </ul>
          </div>
          <div className="st-reflection-card st-reflection-card--improve">
            <h3>If I had more time</h3>
            <ul>
              <li>Run one usability session on the comparison flow</li>
              <li>A short onboarding for people who haven&apos;t used a tool like this</li>
              <li>Check map interactions and contrast properly</li>
            </ul>
          </div>
          <div className="st-reflection-card st-reflection-card--learned">
            <h3>What I learned</h3>
            <p className="st-reflection-body">
              I kept trying to show energy, water, cost, and infrastructure all at once.
              It looked comprehensive but made comparisons worse. Cutting back to one score
              and hiding the rest behind filters was the main fix, and probably the only
              reason the demo made sense in four hours.
            </p>
          </div>
        </div>
      </StoryBlock>
    </article>
  )
}
