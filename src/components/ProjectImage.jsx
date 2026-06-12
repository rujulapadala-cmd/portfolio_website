import { useState } from 'react'

export default function ProjectImage({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)
  const filename = src?.split('/').pop()

  return (
    <figure className={`project-img ${className}`.trim()}>
      <div className="project-img__frame">
        {!failed && src ? (
          <img
            src={src}
            alt={alt}
            className="project-img__img"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="project-img__missing" aria-hidden="true">
            <span className="project-img__missing-label">{alt}</span>
            {filename && (
              <span className="project-img__missing-file">{filename}</span>
            )}
          </div>
        )}
      </div>
    </figure>
  )
}
