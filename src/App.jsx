import { useState } from 'react'
import { PROJECTS } from './data/projects'
import CaseStudy from './components/CaseStudy'
import './App.css'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const SKILL_GROUPS = [
  {
    label: 'UX/UI',
    items: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
  },
  {
    label: 'Development',
    items: ['React', 'Tailwind', 'HTML/CSS', 'JavaScript'],
  },
  {
    label: 'Design',
    items: ['Branding', 'Typography', 'Motion', 'Visual Systems'],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedProject, setExpandedProject] = useState(null)

  const closeMenu = () => setMenuOpen(false)

  const toggleCaseStudy = (id) => {
    setExpandedProject((current) => (current === id ? null : id))
    if (expandedProject !== id) {
      setTimeout(() => {
        document
          .getElementById(`case-study-${id}`)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }

  return (
    <div className="portfolio">
      <header className="nav-wrapper">
        <nav className="nav" aria-label="Main navigation">
          <a href="#" className="nav-logo" onClick={closeMenu}>
            Rujula Padala
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>

          <ul className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
            <li className="nav-links-cta">
              <a href="#contact" className="btn btn-sm" onClick={closeMenu}>
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow hero-glow--left" aria-hidden="true" />
          <div className="hero-glow hero-glow--right" aria-hidden="true" />

          <div className="hero-content">
            <p className="hero-eyebrow">UI/UX Designer</p>
            <h1 className="hero-title">
              Hi, I&apos;m{' '}
              <span className="hero-title-accent">Rujula Padala</span>
            </h1>
            <p className="hero-subtitle">
              I design emotionally thoughtful digital experiences — blending
              human-centered research, accessibility, and visual storytelling
              to create products people feel connected to.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#about" className="btn btn-secondary">
                About Me
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">About</span>
              <h2 className="section-title">Designing with empathy</h2>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  I&apos;m a UI/UX designer passionate about creating intuitive,
                  accessible digital experiences. With a background in informatics
                  and a focus on human-centered design, I turn complex user
                  needs into elegant, inclusive interfaces.
                </p>
                <p>
                  When I&apos;m not designing, you&apos;ll find me researching
                  user behavior, exploring visual systems, or prototyping ideas
                  in Figma. I believe great design lives at the intersection
                  of empathy, storytelling, and thoughtful craft.
                </p>
              </div>
              <div className="about-card">
                <div className="about-stat">
                  <span className="about-stat-number">4</span>
                  <span className="about-stat-label">Featured projects</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">80+</span>
                  <span className="about-stat-label">Users supported</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">∞</span>
                  <span className="about-stat-label">Ideas sketched</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--muted" id="projects">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Selected Work</span>
              <h2 className="section-title">Featured case studies</h2>
            </div>

            <div className="projects-editorial">
              {PROJECTS.map((project, index) => (
                <article
                  key={project.id}
                  className={`project-block${index % 2 === 1 ? ' project-block--reverse' : ''}`}
                >
                  <div
                    className="project-block-visual"
                    style={{ background: project.gradient }}
                    aria-hidden="true"
                  >
                    <div className="project-block-mockup">
                      <div className="mockup-bar" />
                      <div className="mockup-content" />
                    </div>
                  </div>

                  <div className="project-block-body">
                    <span className="project-block-category">
                      {project.category}
                    </span>
                    <h3 className="project-block-title">{project.title}</h3>
                    <p className="project-block-subtitle">{project.subtitle}</p>
                    <div className="project-block-meta">
                      <span>{project.role}</span>
                      <span className="meta-divider">·</span>
                      <span>{project.timeline}</span>
                    </div>
                    <ul className="project-block-impact">
                      {project.impact.slice(0, 2).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className="btn btn-primary btn-case-study"
                      aria-expanded={expandedProject === project.id}
                      onClick={() => toggleCaseStudy(project.id)}
                    >
                      {expandedProject === project.id
                        ? 'Close Case Study'
                        : 'View Case Study'}
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {expandedProject && (
              <CaseStudy
                project={PROJECTS.find((p) => p.id === expandedProject)}
              />
            )}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">Expertise</span>
              <h2 className="section-title">Skills &amp; tools</h2>
            </div>
            <div className="skills-groups">
              {SKILL_GROUPS.map((group) => (
                <div key={group.label} className="skill-group">
                  <h3 className="skill-group-label">{group.label}</h3>
                  <ul className="skills-grid">
                    {group.items.map((skill) => (
                      <li key={skill} className="skill-pill">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--contact" id="contact">
          <div className="section-inner contact-inner">
            <div className="contact-glow" aria-hidden="true" />
            <div className="section-header section-header--center">
              <span className="section-label">Contact</span>
              <h2 className="section-title">
                Let&apos;s create thoughtful experiences together
              </h2>
              <p className="contact-subtitle">
                Have a project in mind or just want to say hello? I&apos;d love
                to hear from you.
              </p>
            </div>
            <div className="contact-actions">
              <a href="mailto:rujula@example.com" className="btn btn-primary">
                Send an email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Rujula Padala. All rights
            reserved.
          </p>
          <ul className="footer-links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
