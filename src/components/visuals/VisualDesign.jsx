import { useCallback, useEffect, useRef, useState } from 'react'
import { VISUAL_COLLECTIONS } from '../../data/visuals'
import './visuals.css'

const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`

function CollectionWidget({ collection, onOpen }) {
  const pieces = collection.entries.length
  const [left, right] = collection.previews
  return (
    <article className="vd-widget">
      <button
        type="button"
        className="vd-stage"
        onClick={(e) => onOpen(collection.id, e.currentTarget)}
        aria-label={`View collection: ${collection.title}`}
      >
        {left && <img className="vd-stage__card vd-stage__card--left" src={left} alt="" loading="lazy" />}
        {right && <img className="vd-stage__card vd-stage__card--right" src={right} alt="" loading="lazy" />}
        <img className="vd-stage__card vd-stage__card--cover" src={collection.cover} alt="" loading="lazy" />
      </button>

      <div className="vd-widget__body">
        <h3 className="vd-widget__title">{collection.title}</h3>
        <p className="vd-widget__blurb">{collection.blurb}</p>
        <div className="vd-widget__foot">
          <span className="vd-widget__count">{plural(pieces, 'piece')}</span>
          <button
            type="button"
            className="vd-btn"
            onClick={(e) => onOpen(collection.id, e.currentTarget)}
          >
            View collection <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  )
}

function Lightbox({ collection, onClose }) {
  const [entryId, setEntryId] = useState(null)
  const [index, setIndex] = useState(0)
  const dialogRef = useRef(null)
  const closeRef = useRef(null)

  const entry = collection.entries.find((e) => e.id === entryId) || null
  const total = entry ? entry.slides.length : 0

  const step = useCallback(
    (dir) => setIndex((i) => (total ? (i + dir + total) % total : 0)),
    [total],
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        if (entryId) setEntryId(null)
        else onClose()
      } else if (entryId && total > 1 && e.key === 'ArrowRight') {
        step(1)
      } else if (entryId && total > 1 && e.key === 'ArrowLeft') {
        step(-1)
      } else if (e.key === 'Tab' && dialogRef.current) {
        const items = dialogRef.current.querySelectorAll('button:not([disabled]), a[href]')
        if (!items.length) return
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [entryId, total, onClose, step])

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  const openEntry = (id) => {
    setEntryId(id)
    setIndex(0)
  }

  return (
    <div
      className="vd-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={collection.title}
      ref={dialogRef}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="vd-panel">
        <header className="vd-panel__head">
          {entry ? (
            <button type="button" className="vd-back" onClick={() => setEntryId(null)}>
              <span aria-hidden="true">←</span> {collection.title}
            </button>
          ) : (
            <h3 className="vd-panel__title">{collection.title}</h3>
          )}
          <button type="button" className="vd-close" onClick={onClose} ref={closeRef} aria-label="Close">
            ✕
          </button>
        </header>

        {!entry && (
          <div className="vd-entries">
            {collection.entries.map((e) => (
              <button type="button" key={e.id} className="vd-entry" onClick={() => openEntry(e.id)}>
                <span className="vd-entry__thumb">
                  <img src={e.slides[0]} alt="" loading="lazy" />
                  {e.slides.length > 1 && (
                    <span className="vd-entry__badge">{plural(e.slides.length, 'slide')}</span>
                  )}
                </span>
                <span className="vd-entry__title">{e.title}</span>
                <span className="vd-entry__sub">{e.sub}</span>
              </button>
            ))}
          </div>
        )}

        {entry && (
          <div className="vd-viewer">
            <div className="vd-viewer__meta">
              <h4>{entry.title}</h4>
              <p>{entry.sub}</p>
            </div>
            <div className="vd-viewer__stage">
              {total > 1 && (
                <button type="button" className="vd-nav vd-nav--prev" onClick={() => step(-1)} aria-label="Previous slide">
                  ‹
                </button>
              )}
              <img
                key={entry.slides[index]}
                className="vd-viewer__img"
                src={entry.slides[index]}
                alt={`${entry.title}, ${total > 1 ? `slide ${index + 1} of ${total}` : 'full piece'}`}
              />
              {total > 1 && (
                <button type="button" className="vd-nav vd-nav--next" onClick={() => step(1)} aria-label="Next slide">
                  ›
                </button>
              )}
            </div>
            {total > 1 && (
              <p className="vd-viewer__count" aria-live="polite">
                {index + 1} / {total}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function VisualDesign() {
  const [openId, setOpenId] = useState(null)
  const triggerRef = useRef(null)

  const open = (id, trigger) => {
    triggerRef.current = trigger
    setOpenId(id)
  }

  const close = useCallback(() => {
    setOpenId(null)
    triggerRef.current?.focus()
  }, [])

  const active = VISUAL_COLLECTIONS.find((c) => c.id === openId)

  return (
    <section className="vd" id="visuals">
      <div className="vd-inner">
        <header className="vd-head">
          <span className="vd-label">Visual design</span>
          <h2 className="vd-title">Posters &amp; campaigns</h2>
          <p className="vd-lede">
            Design work for the clubs and communities I’ve been part of. Open a collection to see full
            pieces and series.
          </p>
        </header>

        <div className="vd-grid">
          {VISUAL_COLLECTIONS.map((c) => (
            <CollectionWidget key={c.id} collection={c} onOpen={open} />
          ))}
        </div>
      </div>

      {active && <Lightbox key={active.id} collection={active} onClose={close} />}
    </section>
  )
}
