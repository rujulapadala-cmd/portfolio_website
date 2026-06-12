import { VisualArtifact } from './VisualArtifacts'
import ProjxonCaseStudy from './ProjxonCaseStudy'
import SustainCaseStudy from './SustainCaseStudy'
import JosyamCaseStudy from './JosyamCaseStudy'
import MindWellCaseStudy from './MindWellCaseStudy'
import './CaseStudy.css'

function StorySection({ label, title, children, variant = 'default', id }) {
  return (
    <section className={`cs-section cs-section--${variant}`} id={id}>
      {label && <span className="cs-label">{label}</span>}
      {title && <h3 className="cs-heading">{title}</h3>}
      {children}
    </section>
  )
}

function OutcomeStat({ value, label }) {
  return (
    <div className="cs-stat">
      <span className="cs-stat-value">{value}</span>
      <span className="cs-stat-label">{label}</span>
    </div>
  )
}

function DecisionCard({ title, rationale }) {
  return (
    <div className="cs-decision">
      <h4>{title}</h4>
      <p>{rationale}</p>
    </div>
  )
}

export default function CaseStudy({ project }) {
  if (project.id === 'projxon') {
    return <ProjxonCaseStudy project={project} />
  }

  if (project.id === 'sustain') {
    return <SustainCaseStudy project={project} />
  }

  if (project.id === 'josyam') {
    return <JosyamCaseStudy project={project} />
  }

  if (project.id === 'mindwell') {
    return <MindWellCaseStudy project={project} />
  }

  const s = project.story

  return (
    <article className="case-study-story" id={`case-study-${project.id}`}>
      {/* ── Cinematic Hero ── */}
      <header className="cs-hero">
        <div className="cs-hero-text">
          <span className="cs-hero-category">{project.category}</span>
          <h2 className="cs-hero-title">{project.title}</h2>
          <p className="cs-hero-subtitle">{project.subtitle}</p>
          <div className="cs-hero-meta">
            <div><span className="cs-meta-key">Timeline</span><span>{project.timeline}</span></div>
            <div><span className="cs-meta-key">Tools</span><span>{project.tools.join(' · ')}</span></div>
          </div>
        </div>
        <div className="cs-hero-visual">
          <VisualArtifact type={s.heroVisual} projectId={project.id} caption={s.heroCaption} />
        </div>
      </header>

      {/* ── Opening Story ── */}
      <StorySection variant="opener">
        <blockquote className="cs-pull-quote">{s.hook}</blockquote>
        <p className="cs-lead">{s.opener}</p>
      </StorySection>

      {/* ── My Role ── */}
      <StorySection label="My Role" title="Where I fit in">
        <div className="cs-split">
          <div className="cs-split-text">
            <p className="cs-role-title">{project.role}</p>
            <p>{s.myRole}</p>
          </div>
          <VisualArtifact type="persona" projectId={project.id} label="Primary user" />
        </div>
      </StorySection>

      {/* ── The Challenge ── */}
      <StorySection label="The Challenge" title={s.challengeTitle}>
        <div className="cs-split cs-split--reverse">
          <div className="cs-split-text">
            <p className="cs-narrative">{s.challengeNarrative}</p>
            <ul className="cs-insight-list">
              {project.problem.points.slice(0, 4).map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
          <VisualArtifact
            type={project.id === 'projxon' ? 'before-after' : 'process-board'}
            projectId={project.id}
            label="Discovery"
            caption={s.challengeCaption}
          />
        </div>
      </StorySection>

      {/* ── Key Contributions ── */}
      <StorySection label="Key Contributions" title="What I owned">
        <div className="cs-contributions">
          {s.keyContributions.map((item) => (
            <div key={item} className="cs-contribution">
              <span className="cs-contribution-dot" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
        <div className="cs-full-visual">
          <VisualArtifact type="flow" projectId={project.id} label="User flow" caption={s.flowCaption} />
        </div>
      </StorySection>

      {/* ── Research & Insights ── */}
      <StorySection label="Research" title="Listening before designing">
        <p className="cs-narrative">{s.researchNarrative}</p>
        <div className="cs-findings">
          {project.research.findings.map((f) => (
            <blockquote key={f} className="cs-finding">&ldquo;{f}&rdquo;</blockquote>
          ))}
        </div>
        <div className="cs-full-visual">
          <VisualArtifact type="wireframe" projectId={project.id} label="Early exploration" caption={s.wireframeCaption} />
        </div>
      </StorySection>

      {/* ── Design Decisions ── */}
      <StorySection label="Design Decisions" title="Intentional choices">
        <p className="cs-narrative cs-narrative--narrow">{s.decisionsIntro}</p>
        <div className="cs-decisions">
          {s.designDecisions.map((d) => (
            <DecisionCard key={d.title} title={d.title} rationale={d.rationale} />
          ))}
        </div>
        <div className="cs-full-visual">
          <VisualArtifact type="design-system" projectId={project.id} label="Visual system" caption={s.systemCaption} />
        </div>
      </StorySection>

      {/* ── Final Solution ── */}
      <StorySection label="Final Solution" title={s.solutionTitle} variant="highlight">
        <p className="cs-narrative cs-narrative--narrow">{s.solutionNarrative}</p>
        <div className="cs-solution-gallery">
          <VisualArtifact type={s.heroVisual} projectId={project.id} label="Desktop" />
          <VisualArtifact type="mobile-desktop" projectId={project.id} label="Responsive views" />
        </div>
      </StorySection>

      {/* ── Outcomes ── */}
      <StorySection label="Outcomes" title="Impact that mattered">
        <div className="cs-outcomes">
          {s.outcomeStats.map(({ value, label }) => (
            <OutcomeStat key={label} value={value} label={label} />
          ))}
        </div>
        <ul className="cs-impact-list">
          {project.impact.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </StorySection>

      {/* ── Challenges ── */}
      <StorySection label="Challenges" title="What tested me">
        <div className="cs-challenges">
          {s.challenges.map((c) => (
            <div key={c.title} className="cs-challenge-card">
              <h4>{c.title}</h4>
              <p>{c.description}</p>
            </div>
          ))}
        </div>
      </StorySection>

      {/* ── Lessons Learned ── */}
      <StorySection label="Lessons Learned" title="What I'd carry forward" variant="closing">
        <div className="cs-lessons">
          {s.lessonsLearned.map((lesson) => (
            <p key={lesson} className="cs-lesson">{lesson}</p>
          ))}
        </div>
        <blockquote className="cs-closing-quote">{s.closingQuote}</blockquote>
      </StorySection>
    </article>
  )
}
