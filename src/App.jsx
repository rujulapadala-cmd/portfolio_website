import { useCallback, useEffect, useState } from 'react'
import { WORK_BY_ID } from './data/work'
import { RESUME } from './data/resume'
import CaseStudy from './components/work/CaseStudy'
import Hero from './components/home/Hero'
import SelectedWork from './components/work/SelectedWork'
import Intro from './components/home/Intro'
import CustomCursor from './components/home/CustomCursor'
import OrgStrip from './components/home/OrgStrip'
import { ORGANIZATIONS } from './components/home/homeData'
import ResumeSection from './components/ResumeSection'
import VisualDesign from './components/visuals/VisualDesign'
import ExperienceSection from './components/sections/ExperienceSection'
import SkillsSection from './components/sections/SkillsSection'
import './App.css'
import './Home.css'
import './components/home/home.css'

const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'Visuals', href: '#visuals' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

function initialIntro() {
  if (typeof window === 'undefined') return { playing: false, ready: true, instant: true }
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const force = new URLSearchParams(window.location.search).has('intro')
  let seen = false
  try {
    seen = window.sessionStorage.getItem('intro-seen') === '1'
  } catch {
    /* storage unavailable: treat as unseen */
  }
  if (reduce || (seen && !force)) return { playing: false, ready: true, instant: true }
  return { playing: true, ready: false, instant: false }
}

function App() {
  const [intro, setIntro] = useState(initialIntro)

  useEffect(() => {
    if (!intro.playing) return undefined
    try {
      window.sessionStorage.setItem('intro-seen', '1')
    } catch {
      /* storage unavailable: intro simply replays next visit */
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(
      () => setIntro((s) => ({ ...s, ready: true })),
      3900,
    )
    return () => {
      clearTimeout(timer)
      document.body.style.overflow = previous
    }
  }, [intro.playing])

  const finishIntro = useCallback(
    () =>
      setIntro((s) => ({
        playing: false,
        ready: true,
        instant: s.instant || !s.ready,
      })),
    [],
  )

  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedProject, setExpandedProject] = useState(() => {
    const raw = new URLSearchParams(window.location.search).get('case')
    const id = raw === 'projxon' ? 'projxon-sfr' : raw
    return id && WORK_BY_ID[id] ? id : null
  })

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
      <CustomCursor />
      {intro.playing && <Intro onDone={finishIntro} />}
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
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero hx-hero" id="home">
          <div className="hero-backdrop" aria-hidden="true">
            <div className="hero-backdrop__gradient" />
            <div className="hero-backdrop__glow hero-backdrop__glow--blush" />
            <div className="hero-backdrop__glow hero-backdrop__glow--lavender" />
            <div className="hero-backdrop__glow hero-backdrop__glow--peach" />
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
          <Hero ready={intro.ready} instant={intro.instant} />
        </section>

        <OrgStrip />

        <section className="featured-work" id="projects">
          <div className="featured-work__inner">
            <header className="featured-work__header">
              <span className="featured-work__label">Selected work</span>
              <h2 className="featured-work__title">Selected projects</h2>
            </header>

            <SelectedWork expandedId={expandedProject} onToggle={toggleCaseStudy} />

            {expandedProject && (
              <CaseStudy
                project={WORK_BY_ID[expandedProject]}
                onClose={() => setExpandedProject(null)}
              />
            )}
          </div>
        </section>

        <VisualDesign />

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
                <p className="about-orgs">
                  <span className="about-orgs__label">Organizations</span>
                  {ORGANIZATIONS.join(' · ')}
                </p>
              </div>
              <div className="about-side">
                <figure className="about-photo">
                  <img
                    src="/images/about/rujula.jpg"
                    alt="Rujula Padala smiling in a black blazer, standing in front of a red brick wall"
                    loading="lazy"
                  />
                </figure>
              <div className="about-card">
                <div className="about-stat">
                  <span className="about-stat-number about-stat-number--text">Informatics &amp; Psychology</span>
                  <span className="about-stat-label">Academic background</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">6</span>
                  <span className="about-stat-label">Featured Projects</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">8</span>
                  <span className="about-stat-label">Organizations &amp; Teams</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">100+</span>
                  <span className="about-stat-label">User Interviews Conducted</span>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        <ExperienceSection />

        <SkillsSection />

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
              <a href={`mailto:${RESUME.email}`} className="btn btn-primary">
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
