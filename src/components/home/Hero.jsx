import { useEffect, useMemo, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'

import { DRAWN_TO } from './homeData'

const NAME_WORDS = ['RUJULA', 'PADALA']
const EASE = [0.22, 1, 0.36, 1]

// Deterministic sparse starfields: [left%, top%, size px, tone]
const NEAR_STARS = [
  [8, 22, 3, 'rose'], [17, 70, 2, 'lav'], [27, 14, 2, 'lav'], [36, 84, 3, 'rose'],
  [62, 10, 2, 'rose'], [71, 78, 3, 'lav'], [82, 26, 3, 'rose'], [91, 62, 2, 'lav'],
  [48, 90, 2, 'rose'], [95, 12, 2, 'lav'],
]
const FAR_STARS = [
  [4, 48, 2, 'lav'], [13, 38, 1.5, 'rose'], [22, 90, 1.5, 'lav'], [33, 32, 1.5, 'rose'],
  [44, 8, 1.5, 'lav'], [55, 72, 1.5, 'rose'], [66, 40, 1.5, 'lav'], [76, 92, 2, 'rose'],
  [86, 8, 1.5, 'lav'], [93, 84, 1.5, 'rose'], [58, 24, 1.5, 'lav'], [10, 8, 1.5, 'rose'],
]

// [left%, top%, size px, delay s, duration s]
const BOKEH = [
  [8, 70, 46, 0, 14], [18, 24, 22, 2, 11], [30, 82, 30, 4, 16], [44, 12, 18, 1, 10],
  [58, 78, 40, 3, 15], [72, 20, 26, 5, 12], [84, 66, 52, 0.5, 17], [92, 30, 20, 6, 11],
  [64, 90, 18, 7, 9], [4, 40, 24, 2.5, 13],
]
// [left%, top%, size px, delay s]
const SPARKLES = [
  [12, 18, 16, 0], [26, 62, 12, 1.2], [40, 14, 10, 2.4], [62, 16, 14, 0.8],
  [78, 52, 18, 1.8], [88, 14, 12, 3], [70, 84, 12, 2.1], [16, 86, 14, 3.4],
]

function StarLayer({ stars, x, y }) {
  return (
    <motion.div className="hx-stars" style={{ x, y }} aria-hidden="true">
      {stars.map(([left, top, size, tone], i) => (
        <span
          key={i}
          className={`hx-star hx-star--${tone}`}
          style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
        />
      ))}
    </motion.div>
  )
}

function Pill({ href, variant, children, arrow, reduce }) {
  return (
    <motion.a
      href={href}
      className={`hx-pill hx-pill--${variant}`}
      initial="rest"
      animate="rest"
      whileHover="shift"
      whileFocus="shift"
    >
      {children}
      {arrow && (
        <motion.span
          aria-hidden="true"
          className="hx-pill__arrow"
          variants={{ rest: { y: 0 }, shift: { y: 3 } }}
          transition={{ duration: reduce ? 0 : 0.2, ease: EASE }}
        >
          {arrow}
        </motion.span>
      )}
    </motion.a>
  )
}

function Rotator({ reduce }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduce) return undefined
    const id = setInterval(() => setIndex((i) => (i + 1) % DRAWN_TO.length), 3000)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <p className="hx-drawn">
      <span className="hx-drawn__label">I’m drawn to</span>
      <span className="hx-drawn__slot" aria-live="off">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={index}
            className="hx-drawn__phrase"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0 : 0.32, ease: EASE }}
          >
            {DRAWN_TO[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  )
}

export default function Hero({ ready = true, instant = false }) {
  const prefersReduce = useReducedMotion()
  const reduce = prefersReduce
  const quick = reduce || instant
  const [touch, setTouch] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: none), (pointer: coarse)')
    const update = () => setTouch(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Two parallax layers; the far layer moves less. Max travel is 10px.
  const nearX = useMotionValue(0)
  const nearY = useMotionValue(0)
  const farX = useMotionValue(0)
  const farY = useMotionValue(0)
  const spring = { stiffness: 60, damping: 18, mass: 0.6 }
  const sNearX = useSpring(nearX, spring)
  const sNearY = useSpring(nearY, spring)
  const sFarX = useSpring(farX, spring)
  const sFarY = useSpring(farY, spring)
  const parallax = !reduce && !touch

  useEffect(() => {
    if (!parallax) return undefined
    const hero = document.getElementById('home')
    if (!hero) return undefined

    const onMove = (e) => {
      if (e.pointerType === 'touch') return
      const rect = hero.getBoundingClientRect()
      const px = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const py = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      nearX.set(px * 10)
      nearY.set(py * 10)
      farX.set(px * 5)
      farY.set(py * 5)
    }
    const onLeave = () => {
      nearX.set(0)
      nearY.set(0)
      farX.set(0)
      farY.set(0)
    }
    hero.addEventListener('pointermove', onMove)
    hero.addEventListener('pointerleave', onLeave)
    return () => {
      hero.removeEventListener('pointermove', onMove)
      hero.removeEventListener('pointerleave', onLeave)
    }
  }, [parallax, nearX, nearY, farX, farY])

  const letters = useMemo(() => NAME_WORDS.map((w) => w.split('')), [])
  const offsets = useMemo(() => [0, NAME_WORDS[0].length], [])
  const dur = (d) => (quick ? 0 : d)
  const initial = quick && ready ? false : 'hidden'

  const fade = (delay) => ({
    initial: quick && ready ? false : { opacity: 0, y: 8 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 },
    transition: { duration: dur(0.7), delay: quick ? 0 : delay, ease: EASE },
  })

  return (
    <>
      <motion.div
        className="hx-field"
        aria-hidden="true"
        initial={quick && ready ? false : { scale: 1.35 }}
        animate={{ scale: ready ? 1 : 1.35 }}
        transition={{ duration: dur(3.2), ease: EASE }}
      >
        <div className="hx-vignette" />
        <div className="hx-halo" />
        <StarLayer stars={FAR_STARS} x={parallax ? sFarX : 0} y={parallax ? sFarY : 0} />
        <StarLayer stars={NEAR_STARS} x={parallax ? sNearX : 0} y={parallax ? sNearY : 0} />
        <div className="hx-aurora">
          <span className="hx-aurora__a" />
          <span className="hx-aurora__b" />
          <span className="hx-aurora__c" />
        </div>
        <div className="hx-bokeh">
          {BOKEH.map(([left, top, size, delay, dur], i) => (
            <span
              key={i}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                animationDelay: `${delay}s`,
                animationDuration: `${dur}s`,
              }}
            />
          ))}
        </div>
        <div className="hx-sparkles">
          {SPARKLES.map(([left, top, size, delay], i) => (
            <span
              key={i}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                animationDelay: `${delay}s`,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="hx-center">
        <motion.h1
          className="hx-title"
          aria-label="Rujula Padala"
          initial={initial}
          animate={ready ? 'show' : 'hidden'}
          variants={{
            hidden: { scale: 0.7 },
            show: {
              scale: 1,
              transition: {
                duration: dur(2.8),
                ease: EASE,
                staggerChildren: quick ? 0 : 0.12,
              },
            },
          }}
        >
          {letters.map((word, w) => (
            <span className="hx-word" key={NAME_WORDS[w]} aria-hidden="true">
              {word.map((ch, i) => (
                <motion.span
                  key={i}
                  className="hx-letter"
                  style={{ '--i': offsets[w] + i, '--d': quick ? '0s' : '2.8s' }}
                  variants={{
                    hidden: { opacity: 0, y: 26, scale: 0.55, filter: 'blur(14px)' },
                    show: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: 'blur(0px)',
                      transition: { duration: dur(0.95), ease: EASE },
                    },
                  }}
                >
                  {ch}
                </motion.span>
              ))}
              {w < letters.length - 1 && <span className="hx-space"> </span>}
            </span>
          ))}
        </motion.h1>

        <motion.p className="hx-subtitle" {...fade(2.1)}>
          Informatics &amp; Psychology · UT Austin
        </motion.p>

        <motion.div className="hx-drawn-wrap" {...fade(2.4)}>
          <Rotator reduce={reduce} />
        </motion.div>

        <motion.div className="hx-buttons" {...fade(2.7)}>
          <Pill href="#projects" variant="solid" arrow="↓" reduce={reduce}>
            Explore my work
          </Pill>
          <Pill href="#resume" variant="outline" reduce={reduce}>
            Resume
          </Pill>
        </motion.div>
      </div>
    </>
  )
}
