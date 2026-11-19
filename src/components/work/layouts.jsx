import SiteThumb from './SiteThumb'
import { LiveLink, Meta, Outcomes, Overview, ResearchProcess, SystemParts, Supports } from './parts'

function Frame({ project, onClose, children }) {
  return (
    <article
      className={`cs cs--${project.layout}`}
      id={`case-study-${project.id}`}
      aria-label={`${project.name} case study`}
    >
      <button type="button" className="cs-close" onClick={onClose}>
        Close case study <span aria-hidden="true">✕</span>
      </button>
      {children}
    </article>
  )
}

/* ── PROJXON · workspace: sticky rail + dashboard canvas ── */
export function WorkspaceLayout({ project, onClose }) {
  return (
    <Frame project={project} onClose={onClose}>
      <div className="ws">
        <nav className="ws-rail" aria-label="Case study sections">
          <span className="cs-eyebrow">{project.name}</span>
          <a href={`#${project.id}-overview`}>Overview</a>
          <a href={`#${project.id}-process`}>Research process</a>
          <a href={`#${project.id}-outcomes`}>Outcomes</a>
        </nav>

        <div className="ws-main">
          <header className="ws-hero">
            <span className="cs-eyebrow">{project.category}</span>
            <h2>{project.name}</h2>
            <p className="cs-hook">{project.summary}</p>
            <LiveLink project={project} />
            <Meta project={project} />
            <div className="ws-thumb">
              <SiteThumb project={project} />
            </div>
          </header>

          <Overview project={project} />

          <section className="ws-teams" aria-label="Seven request trackers, one workflow">
            <span className="cs-eyebrow">Seven request trackers · one workflow</span>
            <div className="ws-grid">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="ws-tile">
                  <span>Tracker {String(i + 1).padStart(2, '0')}</span>
                  <i />
                  <i />
                  <i />
                </div>
              ))}
            </div>
          </section>

          <ResearchProcess
            project={project}
            renderDecisions={(items) => (
              <div className="ws-decisions">
                {items.map((d, i) => (
                  <div key={d.title} className="ws-decision">
                    <span>0{i + 1}</span>
                    <h5>{d.title}</h5>
                    <p>{d.rationale}</p>
                  </div>
                ))}
              </div>
            )}
          />
          <Outcomes project={project} className="ws-outcomes" />
        </div>
      </div>
    </Frame>
  )
}

/* ── Glasshouse · glass: translucent layered panes ── */
export function GlassLayout({ project, onClose }) {
  return (
    <Frame project={project} onClose={onClose}>
      <div className="gl">
        <span className="gl-orb gl-orb--a" aria-hidden="true" />
        <span className="gl-orb gl-orb--b" aria-hidden="true" />
        <header className="gl-hero">
          <span className="cs-eyebrow">{project.category}</span>
          <h2>{project.name}</h2>
          <p className="cs-hook">{project.summary}</p>
          <LiveLink project={project} />
          <Meta project={project} />
          <div className="gl-pane gl-pane--thumb">
            <SiteThumb project={project} />
          </div>
        </header>
        <div className="gl-pane">
          <Overview project={project} />
        </div>
        <ResearchProcess project={project} />
      </div>
    </Frame>
  )
}

/* ── SustAIn · map: full-bleed front page with a floating panel + route ── */
export function MapLayout({ project, onClose }) {
  return (
    <Frame project={project} onClose={onClose}>
      <div className="mp">
        <header className="mp-hero">
          <div className="mp-title">
            <span className="cs-eyebrow">{project.category}</span>
            <h2>{project.name}</h2>
            <p className="cs-hook">{project.summary}</p>
            <LiveLink project={project} />
          </div>
          <div className="mp-visual">
            <SiteThumb project={project} />
            <aside className="mp-panel" aria-label="Map layers">
              <strong>Layers</strong>
              {['Energy', 'Water', 'Fiber'].map((l, i) => (
                <span key={l} className={i === 0 ? 'is-on' : ''}>
                  {l}
                </span>
              ))}
            </aside>
          </div>
        </header>
        <Meta project={project} />
        <Overview project={project} />
        <ResearchProcess
          project={project}
          renderDecisions={(items) => (
            <ol className="mp-route">
              {items.map((d) => (
                <li key={d.title}>
                  <h5>{d.title}</h5>
                  <p>{d.rationale}</p>
                </li>
              ))}
            </ol>
          )}
        />
        <Outcomes project={project} className="mp-outcomes" />
      </div>
    </Frame>
  )
}

/* ── Josyam · deck: fanned cards and a row of drawn cards ── */
const NUMERALS = ['I', 'II', 'III', 'IV']
export function DeckLayout({ project, onClose }) {
  return (
    <Frame project={project} onClose={onClose}>
      <div className="dk">
        <header className="dk-hero">
          <div className="dk-fan" aria-hidden="true">
            <span className="dk-card dk-card--l">☽</span>
            <span className="dk-card dk-card--c">✦</span>
            <span className="dk-card dk-card--r">☾</span>
          </div>
          <span className="cs-eyebrow">{project.category}</span>
          <h2>{project.name}</h2>
          <p className="cs-hook">{project.summary}</p>
          <LiveLink project={project} />
          <div className="dk-thumb">
            <SiteThumb project={project} />
          </div>
        </header>
        <Meta project={project} />
        <Overview project={project} />
        <ResearchProcess
          project={project}
          renderDecisions={(items) => (
            <div className="dk-row">
              {items.map((d, i) => (
                <div key={d.title} className="dk-draw">
                  <span className="dk-num">{NUMERALS[i]}</span>
                  <h5>{d.title}</h5>
                  <p>{d.rationale}</p>
                </div>
              ))}
            </div>
          )}
        />
        <Outcomes project={project} className="dk-outcomes" />
      </div>
    </Frame>
  )
}

/* ── MindWell · soft: rounded, calm, conversational ── */
export function SoftLayout({ project, onClose }) {
  return (
    <Frame project={project} onClose={onClose}>
      <div className="sf">
        <header className="sf-hero">
          <div className="sf-text">
            <span className="cs-eyebrow">{project.category}</span>
            <h2>{project.name}</h2>
            <p className="cs-hook">{project.summary}</p>
            <Meta project={project} />
          </div>
          <div className="sf-thumb">
            <SiteThumb project={project} />
          </div>
        </header>
        <Overview project={project} />
        <ResearchProcess
          project={project}
          renderDecisions={(items) => (
            <div className="sf-bubbles">
              {items.map((d, i) => (
                <div key={d.title} className={`sf-bubble${i % 2 ? ' sf-bubble--r' : ''}`}>
                  <h5>{d.title}</h5>
                  <p>{d.rationale}</p>
                </div>
              ))}
            </div>
          )}
        />
        <Outcomes project={project} className="sf-outcomes" />
      </div>
    </Frame>
  )
}

/* ── OrkaOS · system: foundations, components, patterns ── */
export function SystemLayout({ project, onClose }) {
  return (
    <Frame project={project} onClose={onClose}>
      <div className="sy">
        <header className="sy-hero">
          <div className="sy-hero__text">
            <span className="cs-eyebrow">{project.category}</span>
            <h2>{project.name}</h2>
            <p className="cs-hook">{project.summary}</p>
            <LiveLink project={project} />
            <Meta project={project} />
          </div>
          <div className="sy-hero__thumb">
            <SiteThumb project={project} />
          </div>
        </header>
        <Overview project={project} />
        <SystemParts project={project} />
        <Supports project={project} />
        <ResearchProcess project={project} />
        <Outcomes project={project} className="sy-outcomes" />
      </div>
    </Frame>
  )
}
