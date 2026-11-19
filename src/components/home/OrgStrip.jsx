import { useState } from 'react'
import { STRIP_ITEMS } from './homeData'

function Group({ hidden }) {
  return (
    <ul className="os-group" aria-hidden={hidden || undefined}>
      {STRIP_ITEMS.map((name) => (
        <li key={name} className="os-item">
          <span className="os-name">{name}</span>
          <span className="os-dot" aria-hidden="true">✦</span>
        </li>
      ))}
    </ul>
  )
}

export default function OrgStrip() {
  const [paused, setPaused] = useState(false)

  return (
    <section
      className={`os${paused ? ' os--paused' : ''}`}
      aria-label="Work and communities"
    >
      <div className="os-inner">
        <span className="os-label">Work &amp; communities</span>
        <div className="os-viewport">
          <div className="os-track">
            <Group />
            <Group hidden />
          </div>
        </div>
        <button
          type="button"
          className="os-toggle"
          aria-pressed={paused}
          aria-label={paused ? 'Play scrolling names' : 'Pause scrolling names'}
          onClick={() => setPaused((p) => !p)}
        >
          {paused ? (
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M3 1.5v9l7-4.5z" fill="currentColor" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2.5 1.5h2.6v9H2.5zM6.9 1.5h2.6v9H6.9z" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </section>
  )
}
