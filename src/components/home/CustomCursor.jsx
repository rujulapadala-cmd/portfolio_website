import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

const INTERACTIVE = 'a, button, [role="tab"], [role="button"], summary'

// Comet cursor: a glowing orb that drags a tail of stardust, and turns into a
// ring over anything clickable. Only for mice: touch screens and
// reduced-motion visitors keep the normal cursor.
const TAIL = [
  { size: 9, color: '#d7e5f8', stiffness: 520, damping: 34 },
  { size: 8, color: '#b4d8f7', stiffness: 380, damping: 32 },
  { size: 7, color: '#9cc5e9', stiffness: 280, damping: 30 },
  { size: 6, color: '#8cb3d5', stiffness: 210, damping: 28 },
  { size: 5, color: '#95a6e0', stiffness: 160, damping: 26 },
  { size: 4, color: '#8ba0e6', stiffness: 120, damping: 24 },
  { size: 3, color: '#849be8', stiffness: 90, damping: 22 },
]

function TailDot({ x, y, size, color, stiffness, damping, visible }) {
  const sx = useSpring(x, { stiffness, damping, mass: 0.5 })
  const sy = useSpring(y, { stiffness, damping, mass: 0.5 })
  return (
    <motion.span
      className="cc-tail"
      style={{
        x: sx,
        y: sy,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        background: color,
        boxShadow: `0 0 ${size * 1.6}px ${color}`,
      }}
      animate={{ opacity: visible ? 0.85 : 0 }}
      transition={{ duration: 0.25 }}
    />
  )
}

export default function CustomCursor() {
  const reduce = useReducedMotion()
  const [fine, setFine] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const orbX = useSpring(x, { stiffness: 1400, damping: 55, mass: 0.35 })
  const orbY = useSpring(y, { stiffness: 1400, damping: 55, mass: 0.35 })

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setFine(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const enabled = fine && !reduce

  useEffect(() => {
    if (!enabled) return undefined
    document.documentElement.classList.add('has-custom-cursor')

    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      setHovering(Boolean(e.target instanceof Element && e.target.closest(INTERACTIVE)))
    }
    const onDown = () => setPressed(true)
    const onUp = () => setPressed(false)
    const onLeave = () => setVisible(false)

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <div className="cc" aria-hidden="true">
      {TAIL.map((t) => (
        <TailDot key={t.size} x={x} y={y} visible={visible && !hovering} {...t} />
      ))}
      <motion.div className="cc-pos" style={{ x: orbX, y: orbY }}>
        <motion.span
          className="cc-ring"
          animate={{
            opacity: visible && hovering ? 1 : 0,
            scale: pressed ? 0.8 : hovering ? 1 : 0.4,
          }}
          transition={{ duration: 0.22 }}
        />
        <motion.span
          className="cc-orb"
          animate={{
            opacity: visible ? 1 : 0,
            scale: pressed ? 0.7 : hovering ? 0.55 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </div>
  )
}
