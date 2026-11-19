import FadeIn from './FadeIn'
import { RESUME } from '../data/resume'
import './Resume.css'

export default function ResumeSection() {
  const { hero, education, certifications, honors, pdfUrl, linkedInUrl, email } = RESUME

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
              <a href={`mailto:${email}`} className="btn btn-secondary">
                Email
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
          <div className="resume-split">
            <FadeIn delay={80}>
              <section className="resume-block resume-education" aria-labelledby="resume-education-title">
                <h3 id="resume-education-title" className="resume-block__title">
                  Education
                </h3>
                <div className="resume-education__card">
                  <h4 className="resume-education__school">{education.school}</h4>
                  <p className="resume-education__degree">{education.degree}</p>
                  {education.coursework && (
                    <p className="resume-education__minor">
                      <strong>Relevant coursework:</strong> {education.coursework}
                    </p>
                  )}
                  <div className="resume-education__meta">
                    <span>{education.expected}</span>
                    <span className="resume-education__gpa">{education.gpa}</span>
                  </div>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="resume-honors">
                <section className="resume-block" aria-labelledby="resume-honors-title">
                  <h3 id="resume-honors-title" className="resume-block__title">
                    Honors &amp; awards
                  </h3>
                  <ul className="resume-cert-list">
                    {honors.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </section>
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
              </div>
            </FadeIn>
          </div>

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
