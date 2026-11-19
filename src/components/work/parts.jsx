import { PHASES } from '../../data/work'
import Visual from './Visuals'

export function Meta({ project }) {
  const items = [
    ['Event', project.event],
    ['Team', project.team],
    ['Role', project.role],
    ['Timeline', project.timeline],
    ['Tools', project.tools.join(' · ')],
  ].filter(([, v]) => v)
  if (!items.length) return null
  return (
    <dl className="cs-meta">
      {items.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  )
}

export function LiveLink({ project }) {
  const links = project.links || (project.url ? [{ label: 'Visit the live site', href: project.url, primary: true }] : [])
  if (!links.length) return null
  return (
    <div className="cs-links">
      {links.map((l) => (
        <a
          key={l.href}
          className={`cs-link${l.primary ? ' cs-link--primary' : ''}`}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {l.label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  )
}

export function Overview({ project }) {
  if (project.placeholder) {
    return (
      <section className="cs-overview">
        <p className="cs-todo">
          Add a short overview.
        </p>
      </section>
    )
  }
  return (
    <section className="cs-overview" id={`${project.id}-overview`}>
      <p className="cs-lede">{project.overview}</p>
      <div className="cs-role">
        <span className="cs-eyebrow">{project.roleLabel || 'My role'}</span>
        <p>{project.myRole}</p>
        <ul>
          {project.contributions.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Outcomes({ project, className = '' }) {
  if (!project.outcomes.length) return null
  return (
    <section className={`cs-outcomes ${className}`.trim()} id={`${project.id}-outcomes`}>
      <span className="cs-eyebrow">Outcomes</span>
      <div className="cs-stats">
        {project.outcomes.map((o) => (
          <div key={o.label} className="cs-stat">
            <strong>{o.value}</strong>
            <span>{o.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function DefaultDecisions({ items }) {
  return (
    <div className="rp-decisions">
      {items.map((d) => (
        <div key={d.title} className="rp-decision">
          <h5>{d.title}</h5>
          <p>{d.rationale}</p>
        </div>
      ))}
    </div>
  )
}

// The one research process every project shares: same phases, same order,
// same structure. Layouts may restyle decisions via `renderDecisions`.
export function ResearchProcess({ project, renderDecisions }) {
  return (
    <section className="rp" id={`${project.id}-process`}>
      <header className="rp-head">
        <h3>Research process</h3>
        <ol className="rp-chips" aria-label="Process steps">
          {PHASES.map((p, i) => (
            <li key={p.id}>
              <a href={`#${project.id}-${p.id}`}>
                <span>{String(i + 1).padStart(2, '0')}</span> {p.label}
              </a>
            </li>
          ))}
        </ol>
      </header>

      <ol className="rp-steps">
        {PHASES.map((phase, i) => {
          const d = project.process[phase.id]
          return (
            <li key={phase.id} className="rp-step" id={`${project.id}-${phase.id}`}>
              <span className="rp-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="rp-card">
                <div className="rp-top">
                  <span className="rp-label">{phase.label}</span>
                </div>

                {d.placeholder ? (
                  <p className="cs-todo">{d.placeholder}</p>
                ) : (
                  <>
                    {d.method && <span className="rp-method">Method · {d.method}</span>}
                    {d.body && <p className="rp-body">{d.body}</p>}
                    <Visual visual={d.visual} />

                    {d.points && (
                      <div className="rp-points">
                        <h5>{d.pointsLabel}</h5>
                        <ul>
                          {d.points.map((pt) => (
                            <li key={pt}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {d.decisions &&
                      (renderDecisions ? (
                        renderDecisions(d.decisions)
                      ) : (
                        <DefaultDecisions items={d.decisions} />
                      ))}

                    {d.challenges && (
                      <div className="rp-challenges">
                        {d.challenges.map((c) => (
                          <div key={c.title}>
                            <h5>{c.title}</h5>
                            <p>{c.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {d.lessons && (
                      <div className="rp-points">
                        <h5>What I took away</h5>
                        <ul>
                          {d.lessons.map((l) => (
                            <li key={l}>{l}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

// SystemLayout helper: foundations / components / patterns, each with a real screenshot.
export function SystemParts({ project }) {
  return (
    <section className="sy-parts" id={`${project.id}-parts`}>
      <span className="cs-eyebrow">Three parts</span>
      {project.parts.map((part, i) => (
        <article key={part.id} className="sy-part">
          <div className="sy-part__text">
            <span className="sy-part__num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{part.label}</h3>
            <p className="sy-part__lead">{part.lead}</p>
            <ul>
              {part.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
          <figure className="sy-part__shot">
            <img src={part.shot} alt={part.alt} loading="lazy" />
            <figcaption>{part.caption}</figcaption>
          </figure>
        </article>
      ))}
    </section>
  )
}

export function Supports({ project }) {
  if (!project.supports) return null
  return (
    <section className="sy-supports">
      <span className="cs-eyebrow">What it was designed to support</span>
      <ul>
        {project.supports.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  )
}
