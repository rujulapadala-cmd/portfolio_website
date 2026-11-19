import FadeIn from '../FadeIn'
import { RESUME } from '../../data/resume'
import './sections.css'

export default function SkillsSection() {
  return (
    <section className="section sk" id="skills">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">What I work with</h2>
        </div>

        <div className="sk-grid">
          {RESUME.skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 60}>
              <div className="sk-group">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
