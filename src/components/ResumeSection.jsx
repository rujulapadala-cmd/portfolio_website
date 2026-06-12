import FadeIn from './FadeIn'
import { RESUME } from '../data/resume'
import './Resume.css'

function ExperienceCard({ org, role, roleSecondary, period, summary, highlights, index }) {
  return (
    <FadeIn delay={index * 60}>
      <article className="resume-exp-card">
        <div className="resume-exp-card__header">
          <h3 className="resume-exp-card__org">{org}</h3>
          <p className="resume-exp-card__role">{role}</p>
          {roleSecondary && (
            <p className="resume-exp-card__role resume-exp-card__role--secondary">{roleSecondary}</p>
          )}
          <span className="resume-exp-card__period">{period}</span>
        </div>
        <p className="resume-exp-card__summary">{summary}</p>
        <ul className="resume-exp-card__highlights">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </FadeIn>
  )
}

export default function ResumeSection() {
  const { hero, experience, education, skills, certifications, pdfUrl, linkedInUrl } = RESUME

  return (
    <section className="resume-section" id="resume">
      <div className="resume-section__inner">
        <header className="resume-hero">
          <FadeIn>
            <span className="resume-label">Resume</span>
            <h2 className="resume-hero__title">{hero.title}</h2>
            <p className="resume-hero__subtitle">{hero.subtitle}</p>
            <p className="resume-hero__school">{hero.institution}</p>
            <div className="resume-hero__actions">
              <a href={pdfUrl} className="btn btn-primary" download>
                Download PDF
              </a>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                LinkedIn
              </a>
            </div>
          </FadeIn>
        </header>

        <div className="resume-body">
          <FadeIn>
            <section className="resume-block" aria-labelledby="resume-experience-title">
              <h3 id="resume-experience-title" className="resume-block__title">
                Experience
              </h3>
              <div className="resume-exp-grid">
                {experience.map((item, index) => (
                  <ExperienceCard key={item.org} {...item} index={index} />
                ))}
              </div>
            </section>
          </FadeIn>

          <div className="resume-split">
            <FadeIn delay={80}>
              <section className="resume-block resume-education" aria-labelledby="resume-education-title">
                <h3 id="resume-education-title" className="resume-block__title">
                  Education
                </h3>
                <div className="resume-education__card">
                  <h4 className="resume-education__school">{education.school}</h4>
                  <p className="resume-education__degree">{education.degree}</p>
                  {education.minor && (
                    <p className="resume-education__minor">{education.minor}</p>
                  )}
                  <div className="resume-education__meta">
                    <span>{education.expected}</span>
                    <span className="resume-education__gpa">{education.gpa}</span>
                  </div>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={120}>
              <section className="resume-block" aria-labelledby="resume-certifications-title">
                <h3 id="resume-certifications-title" className="resume-block__title">
                  Certifications
                </h3>
                <ul className="resume-cert-list">
                  {certifications.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </section>
            </FadeIn>
          </div>

          <FadeIn delay={160}>
            <section className="resume-block" aria-labelledby="resume-skills-title">
              <h3 id="resume-skills-title" className="resume-block__title">
                Technical skills
              </h3>
              <p className="resume-block__lead">
                Grouped by discipline — the same tools that show up across my case studies and project work.
              </p>
              <div className="resume-skills-grid">
                {skills.map((group) => (
                  <div key={group.category} className="resume-skill-group">
                    <h4 className="resume-skill-group__label">{group.category}</h4>
                    <ul className="resume-skill-group__list">
                      {group.items.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <div className="resume-download">
            <p className="resume-download__eyebrow">Full document</p>
            <h3 className="resume-download__title">Want the full version?</h3>
            <a href={pdfUrl} className="btn btn-primary resume-download__btn" download>
              Download Resume
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
