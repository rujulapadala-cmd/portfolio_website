import { useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

// Returns helpers that collapse to instant, non-moving transitions when the
// visitor prefers reduced motion.
export default function useMotionTiming() {
  const reduce = useReducedMotion()
  return {
    reduce,
    offset: reduce ? 0 : 12,
    time: (duration, delay = 0) =>
      reduce ? { duration: 0 } : { duration, delay, ease: EASE },
  }
}
