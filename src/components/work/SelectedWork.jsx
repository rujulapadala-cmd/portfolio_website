import { useState } from 'react'
import { motion } from 'framer-motion'
import { WORK } from '../../data/work'
import SiteThumb from './SiteThumb'
import useMotionTiming from '../home/useMotionTiming'

function WorkCard({ project, featured, isExpanded, onToggle, index }) {
  const [active, setActive] = useState(false)
  const { offset, time } = useMotionTiming()

  return (
    <motion.div
      id={`work-${project.id}`}
      className={`wk-slot${featured ? ' wk-slot--featured' : ''}`}
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={time(0.55, featured ? 0 : 0.1 * index)}
    >
      <motion.article
        className={`wk-card${featured ? ' wk-card--featured' : ''}${isExpanded ? ' wk-card--open' : ''}`}
        animate={{ y: active ? -4 : 0 }}
        transition={time(0.22)}
        onHoverStart={() => setActive(true)}
        onHoverEnd={() => setActive(false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      >
        <div className="wk-card__visual">
          <SiteThumb project={project} />
        </div>
        <div className="wk-card__body">
          <span className="wk-card__category">{project.category}</span>
          <h3 className="wk-card__title">{project.name}</h3>
          <p className="wk-card__line">{project.line}</p>
          <button
            type="button"
            className="wk-card__cta"
            onClick={onToggle}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Close case study' : 'View case study'}
            <motion.span
              aria-hidden="true"
              animate={{ x: active && !isExpanded ? 4 : 0 }}
              transition={time(0.22)}
            >
              {isExpanded ? '↑' : '→'}
            </motion.span>
          </button>
        </div>
      </motion.article>
    </motion.div>
  )
}

export default function SelectedWork({ expandedId, onToggle }) {
  return (
    <div className="wk-grid">
      {WORK.map((project, i) => (
        <WorkCard
          key={project.id}
          project={project}
          index={i}
          isExpanded={expandedId === project.id}
          onToggle={() => onToggle(project.id)}
        />
      ))}
    </div>
  )
}
