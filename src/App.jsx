import { useState } from 'react'
import { PROJECTS } from './data/projects'
import { RESUME } from './data/resume'
import CaseStudy from './components/CaseStudy'
import ProjectCard from './components/ProjectCard'
import HeroEditorialAtmosphere from './components/HeroEditorialAtmosphere'
import ResumeSection from './components/ResumeSection'
import './App.css'
import './Home.css'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
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
          <div className="hero-backdrop" aria-hidden="true">
            <div className="hero-backdrop__gradient" />
            <div className="hero-backdrop__glow hero-backdrop__glow--blush" />
            <div className="hero-backdrop__glow hero-backdrop__glow--lavender" />
            <div className="hero-backdrop__glow hero-backdrop__glow--peach" />
            <HeroEditorialAtmosphere />
            <div className="hero-backdrop__shimmer" />
            <span className="hero-backdrop__celestial hero-backdrop__celestial--star-a">
              ✦
            </span>
            <span className="hero-backdrop__celestial hero-backdrop__celestial--star-b">
              ✧
            </span>
            <span className="hero-backdrop__celestial hero-backdrop__celestial--star-c">
              ✦
            </span>
            <span className="hero-backdrop__celestial hero-backdrop__celestial--moon">
              ☽
            </span>
            <span className="hero-backdrop__celestial hero-backdrop__celestial--sparkle-a">
              ✦
            </span>
            <span className="hero-backdrop__celestial hero-backdrop__celestial--sparkle-b">
              ✧
            </span>
            <span className="hero-backdrop__celestial hero-backdrop__celestial--sparkle-c">
              ·
            </span>
            <div className="hero-backdrop__grain" />
          </div>
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-heading">
                <span className="hero-accent" aria-hidden="true">
                  ✦
                </span>
                <p className="hero-greeting">Hi, I&apos;m</p>
                <h1 className="hero-name">Rujula Padala</h1>
              </div>
              <p className="hero-role">
                UI/UX Designer · Informatics &amp; Psychology Student
              </p>
              <p className="hero-lede">
                Designing thoughtful digital experiences at the intersection of
                psychology, research, storytelling, and systems thinking.
              </p>
              <p className="hero-credibility">
                Projxon · NeuroNext Foundation · Aid4Need · UTeach · HackTX
              </p>
              <p className="hero-school">UT Austin</p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View Work
                </a>
                <a href="#resume" className="btn btn-secondary">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-work" id="projects">
          <div className="featured-work__inner">
            <header className="featured-work__header">
              <span className="featured-work__label">Featured work</span>
              <h2 className="featured-work__title">Selected projects</h2>
            </header>

            <div className="featured-work__grid">
              {PROJECTS.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isExpanded={expandedProject === project.id}
                  onToggle={() => toggleCaseStudy(project.id)}
                />
              ))}
            </div>

            {expandedProject && (
              <CaseStudy
                project={PROJECTS.find((p) => p.id === expandedProject)}
              />
            )}
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-inner">
            <div className="section-header">
              <span className="section-label">About</span>
              <h2 className="section-title">About Me</h2>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  My name is Rujula Padala, and I am a student at The University
                  of Texas at Austin studying Informatics and Psychology. As an
                  aspiring UI/UX designer, I am passionate about creating thoughtful
                  digital experiences that balance user needs, business goals, and
                  visual storytelling.
                </p>
                <p>
                  Through academic projects, design initiatives, and leadership
                  experiences, I have developed skills in user research, interface
                  design, prototyping, and cross-functional collaboration. I am
                  eager to continue growing as a designer by building products that
                  make complex information feel intuitive, accessible, and human.
                </p>
              </div>
              <div className="about-card">
                <div className="about-stat">
                  <span className="about-stat-number about-stat-number--text">Informatics &amp; Psychology</span>
                  <span className="about-stat-label">Academic background</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">4+</span>
                  <span className="about-stat-label">Featured Projects</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">6+</span>
                  <span className="about-stat-label">Organizations &amp; Teams</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">100+</span>
                  <span className="about-stat-label">Professionals Supported</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ResumeSection />

        <section className="section section--contact" id="contact">
          <div className="section-inner contact-inner">
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
                href={RESUME.linkedInUrl}
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
