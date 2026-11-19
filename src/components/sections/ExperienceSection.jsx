import FadeIn from '../FadeIn'
import { RESUME } from '../../data/resume'
import './sections.css'

// Newest first by `start`; ties keep the order they were written in.
const sorted = [...RESUME.experience].sort((a, b) => b.start.localeCompare(a.start))

export default function ExperienceSection() {
  return (
    <section className="section ex" id="experience">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I’ve worked</h2>
        </div>

        <ol className="tl">
          {sorted.map((item, i) => (
            <li key={`${item.org}-${item.start}`} className="tl-item">
              <time className="tl-date">{item.period}</time>
              <FadeIn delay={Math.min(i, 4) * 50}>
                <article className="tl-body">
                  <h3 className="tl-role">{item.role}</h3>
                  {item.roleSecondary && <p className="tl-role tl-role--sub">{item.roleSecondary}</p>}
                  <p className="tl-org">{item.org}</p>
                  <p className="tl-summary">{item.summary}</p>
                  <ul className="tl-points">
                    {item.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
