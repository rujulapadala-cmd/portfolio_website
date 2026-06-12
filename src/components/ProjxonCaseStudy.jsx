import { useEffect, useState } from 'react'
import FadeIn from './FadeIn'
import {
  SpreadsheetScreenshot,
  SevenSystemsDiagram,
  DashboardFull,
  DashboardPortfolio,
  DASHBOARD_MODULES,
} from './ProjxonVisuals'
import './CaseStudyShared.css'
import './ProjxonCaseStudy.css'

const STICKY_NAV = [
  { id: 'projxon-overview', label: 'Overview' },
  { id: 'projxon-problem', label: 'Problem' },
  { id: 'projxon-system', label: 'What I mapped' },
  { id: 'projxon-solution', label: 'Solution' },
  { id: 'projxon-impact', label: 'Impact' },
  { id: 'projxon-reflection', label: 'Reflection' },
]

const PAIN_POINTS = [
  '20+ fields just to track one request',
  'Different teams used different columns and labels',
  'Managers filtered spreadsheets by hand to spot trends',
  'New members didn\'t know which tracker to open',
  'No quick way to see request volume across teams',
  'Onboarding docs were scattered and hard to find',
]

const WHAT_I_SET_OUT_TO_DO = [
  {
    title: 'Make data easier to read',
    body: 'Replace long spreadsheet rows with charts and summary numbers people could understand in seconds.',
  },
  {
    title: 'Keep things consistent',
    body: 'Use the same field names and dashboard layout across teams so nothing felt like starting from scratch.',
  },
  {
    title: 'Give each team their own view',
    body: 'Operations, Legal, Executive, and the others all had different needs — each got a dashboard built for them.',
  },
  {
    title: 'Cut down search time',
    body: 'If someone needed to know how many requests were open, they shouldn\'t have to sort a sheet to find out.',
  },
]

const CONTRIBUTIONS = [
  'Reviewed all seven request trackers and documented how each one worked',
  'Mapped what fields each team needed and where they overlapped',
  'Standardized column names and status labels where teams agreed',
  'Designed the layout for each Looker Studio dashboard',
  'Built the dashboards and tested them with team leads',
  'Reorganized onboarding docs so new members knew where to go',
  'Built HTML widgets for the workspace homepage',
  'Used Gemini API and Lovable to add AI-assisted workspace tools',
]

const IMPACT_METRICS = [
  { value: '80+', label: 'People using the tools' },
  { value: '6', label: 'Teams' },
  { value: '7', label: 'Request systems redesigned' },
  { value: '40%', label: 'Less time finding information' },
  { value: '65%', label: 'Cleaner, more consistent data' },
]

const TEAMS = [
  'Operations',
  'Project Management',
  'Wednesday Workshops',
  'Leadership',
  'Executive',
  'Legal',
  'Superlatives',
]

function StoryBlock({ label, title, lead, children, id, className = '' }) {
  return (
    <section className={`px-block ${className}`} id={id}>
      <FadeIn>
        {label && <span className="px-label">{label}</span>}
        {title && <h2 className="px-title">{title}</h2>}
        {lead && <p className="px-lead">{lead}</p>}
        {children}
      </FadeIn>
    </section>
  )
}

export default function ProjxonCaseStudy({ project }) {
  const [activeSection, setActiveSection] = useState('projxon-overview')

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
    <article className="projxon-case-study" id={`case-study-${project.id}`}>
      <nav className="px-sticky-nav" aria-label="Case study sections">
        <ul>
          {STICKY_NAV.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                className={activeSection === id ? 'px-sticky-nav--active' : ''}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <header className="px-hero" id="projxon-overview">
        <FadeIn>
          <span className="px-label">{project.showcase.displayCategory}</span>
          <h1 className="px-hero-title">PROJXON</h1>
          <p className="px-hero-tagline">{project.showcase.tagline}</p>
          <div className="px-hero-tags">
            <span>UX/UI Design</span>
            <span>Looker Studio</span>
            <span>Internal Tools</span>
            <span className="px-hero-badge">{project.timeline}</span>
          </div>
          <dl className="px-meta">
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
              <dd>40% less time searching across 7 systems</dd>
            </div>
          </dl>
          <p className="px-hero-subtitle">
            When I joined as a Workspace Manager Intern, PROJXON ran on Google
            Sheets. Seven teams each had their own request tracker. My job was
            to make that data easier to read, search, and act on.
          </p>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="px-hero-visual">
            <DashboardFull workflow="Operations" />
          </div>
        </FadeIn>
      </header>

      <StoryBlock
        label="Where things started"
        title="Before: Managing requests meant digging through spreadsheets"
        lead="Each team tracked their own requests in Google Sheets — and it worked, for them. The problem showed up when someone needed the bigger picture: how many requests were open, which team was busiest, or whether something was stuck. That meant opening a sheet, filtering columns, and reading row after row."
      >
        <ul className="px-sfr-list">
          {TEAMS.map((team) => (
            <li key={team}>{team}</li>
          ))}
        </ul>
        <div className="px-visual-full">
          <SpreadsheetScreenshot />
        </div>
      </StoryBlock>

      <StoryBlock
        id="projxon-problem"
        label="What was going wrong"
        title="The data was there. Finding it took too long."
        lead="Nobody was failing to log requests. The friction was on the other end — when a manager or team lead needed to understand what was happening, they had to do the analysis themselves. Sort, filter, count, repeat. Across seven separate trackers."
        className="px-block--muted"
      >
        <div className="px-pain-grid">
          {PAIN_POINTS.map((point, i) => (
            <FadeIn key={point} delay={i * 60}>
              <div className="px-pain-card">{point}</div>
            </FadeIn>
          ))}
        </div>
      </StoryBlock>

      <StoryBlock
        id="projxon-system"
        label="What I mapped first"
        title="Seven teams, seven trackers — one way of building them"
        lead="Before touching any dashboard, I sat down with each tracker and wrote out what fields they used, who updated them, and what questions team leads actually asked. That audit showed me where the seven systems overlapped — and where they legitimately needed to stay different."
      >
        <div className="px-visual-full">
          <SevenSystemsDiagram />
        </div>
      </StoryBlock>

      <div id="projxon-solution">
        <StoryBlock
          label="What I decided to do"
          title="I wasn't trying to merge seven teams into one tool"
          lead="Each team had real differences — Legal reviews compliance requests, Workshops plans sessions, Executive tracks leadership items. Forcing them into one interface would have made things worse. Instead, I built a separate dashboard for each team using the same underlying structure, so the experience felt familiar even when the data wasn't shared."
          className="px-block--accent"
        />

        <StoryBlock label="What I was solving for" title="Four things I kept coming back to">
          <div className="px-goals-grid">
            {WHAT_I_SET_OUT_TO_DO.map((g, i) => (
              <FadeIn key={g.title} delay={i * 80}>
                <div className="px-goal-card">
                  <h3>{g.title}</h3>
                  <p>{g.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </StoryBlock>

        <StoryBlock
          label="How the dashboards work"
          title="Same building blocks, different data in each one"
          lead="Every dashboard follows the same layout — summary numbers at the top, then charts for status, request types, ownership, trends, and department breakdown. I built the Operations version first, then adapted it for the other six teams."
        >
          <div className="px-architecture">
            <div className="px-arch-visual">
              <DashboardFull workflow="Operations" />
            </div>
            <div className="px-arch-modules">
              {DASHBOARD_MODULES.map((m, i) => (
                <FadeIn key={m.title} delay={i * 50}>
                  <div className="px-module-card">
                    <h4>{m.title}</h4>
                    <p>{m.rationale}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </StoryBlock>

        <StoryBlock
          label="What shipped"
          title="Seven dashboards in Looker Studio — one per team"
          lead="Each team now opens a dashboard instead of a spreadsheet when they need the overview. The underlying Google Sheets still exist for day-to-day entry, but the charts and summary numbers do the reading for you."
          className="px-block--highlight"
        >
          <div className="px-solution-hero">
            <DashboardPortfolio />
          </div>
          <div className="px-closeups-grid">
            <FadeIn><DashboardFull variant="kpi" workflow="Executive" /></FadeIn>
            <FadeIn delay={80}><DashboardFull variant="status" /></FadeIn>
            <FadeIn delay={160}><DashboardFull variant="types" /></FadeIn>
            <FadeIn delay={240}><DashboardFull variant="trends" /></FadeIn>
          </div>
        </StoryBlock>

        <StoryBlock label="What I owned" title="My contributions">
          <div className="px-contributions-grid">
            {CONTRIBUTIONS.map((item, i) => (
              <FadeIn key={item} delay={i * 40}>
                <div className="px-contribution-item">
                  <span className="px-check" aria-hidden="true">✓</span>
                  {item}
                </div>
              </FadeIn>
            ))}
          </div>
        </StoryBlock>
      </div>

      <StoryBlock id="projxon-impact" label="Results" title="What changed" className="px-block--impact">
        <div className="px-impact-grid">
          {IMPACT_METRICS.map((m, i) => (
            <FadeIn key={m.label} delay={i * 70}>
              <div className="px-impact-card">
                <span className="px-impact-value">{m.value}</span>
                <span className="px-impact-label">{m.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </StoryBlock>

      <StoryBlock
        id="projxon-reflection"
        label="Reflection"
        title="Looking back"
        className="px-block--closing"
      >
        <div className="px-reflection-grid">
          <div className="px-reflection-card">
            <h3>What worked</h3>
            <ul>
              <li>Separate dashboard per team kept each view relevant</li>
              <li>Same layout everywhere made cross-team learning easy</li>
              <li>Charts replaced manual filtering for the questions leaders asked most</li>
            </ul>
          </div>
          <div className="px-reflection-card">
            <h3>What didn&apos;t</h3>
            <ul>
              <li>Early drafts tried to merge teams into one shared dashboard</li>
              <li>Field names took longer to align than the dashboard layout itself</li>
              <li>Onboarding docs still needed more structure after the dashboards shipped</li>
            </ul>
          </div>
          <div className="px-reflection-card">
            <h3>If I had more time</h3>
            <ul>
              <li>Run follow-up sessions with each team after a month of use</li>
              <li>Build a cross-team summary view for leadership</li>
              <li>Document the scoring logic behind each chart module</li>
            </ul>
          </div>
          <div className="px-reflection-card">
            <h3>What I learned</h3>
            <p className="px-reflection-body">
              I went in thinking this was a dashboard project. It turned out to be
              mostly a listening project. The spreadsheets weren&apos;t broken — they
              just weren&apos;t built for overview questions. Once I understood that,
              the design decisions got a lot clearer.
            </p>
          </div>
        </div>
      </StoryBlock>
    </article>
  )
}
