import ProjectCardCover from './ProjectCardCover'

export default function ProjectCard({ project, isExpanded, onToggle }) {
  const { showcase, shortTitle } = project

  return (
    <article
      id={`project-${project.id}`}
      className={`project-card project-card--${project.id}${isExpanded ? ' project-card--open' : ''}`}
    >
      <button
        type="button"
        className="project-card__media"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-label={`${isExpanded ? 'Close' : 'Open'} case study for ${shortTitle}`}
      >
        <ProjectCardCover
          projectId={project.id}
          alt={showcase.hero?.alt ?? `${shortTitle} project preview`}
        />
      </button>

      <div className="project-card__body">
        <span className="project-card__category">{showcase.displayCategory}</span>
        <h3 className="project-card__title">{shortTitle}</h3>
        <p className="project-card__tagline">{showcase.tagline}</p>
        <button
          type="button"
          className={`project-card__cta${isExpanded ? ' project-card__cta--open' : ''}`}
          onClick={onToggle}
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? 'Close case study' : 'View case study'}</span>
          <span className="project-card__cta-icon" aria-hidden="true">
            {isExpanded ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 11V3M7 3L3.5 6.5M7 3l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
        </button>
      </div>
    </article>
  )
}
