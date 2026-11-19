import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const TOTAL = 5.6 // seconds
const ORDER = [2, 0, 3, 1] // piece -> arrival slot
const OPEN_AT = 3.8 // seconds: pieces start sliding apart
const ASSEMBLED_AT = 3.0 // seconds: last piece has landed

// Tab direction on the vertical edge right of (c, r) and the horizontal edge
// below it; +1 pokes toward +x / +y, -1 the other way.
const tabV = (c, r) => ((c + r) % 2 ? 1 : -1)
const tabH = (c, r) => ((c + r) % 2 ? -1 : 1)

// One edge of a jigsaw piece from A to B; `v` is the tab's outward sign and
// `m` the tab size, so tabs look the same on long and short edges.
function edge(ax, ay, bx, by, v, m) {
  if (!v) return ` L ${bx} ${by}`
  const dx = bx - ax
  const dy = by - ay
  const len = Math.hypot(dx, dy)
  const ux = dx / len
  const uy = dy / len
  const nx = uy * v
  const ny = -ux * v
  const mid = len / 2
  const p = (u, t) => {
    const along = mid + (u - 0.5) * m
    return `${ax + ux * along + nx * m * t} ${ay + uy * along + ny * m * t}`
  }
  return (
    ` L ${p(0.38, 0)}` +
    ` C ${p(0.38, 0.06)} ${p(0.3, 0.1)} ${p(0.3, 0.2)}` +
    ` C ${p(0.3, 0.32)} ${p(0.7, 0.32)} ${p(0.7, 0.2)}` +
    ` C ${p(0.7, 0.1)} ${p(0.62, 0.06)} ${p(0.62, 0)}` +
    ` L ${bx} ${by}`
  )
}

function piecePath(c, r, cw, ch) {
  const m = Math.min(cw, ch) * 0.62
  const x = c * cw
  const y = r * ch
  const top = r > 0 ? -tabH(c, r - 1) : 0
  const right = c < 1 ? tabV(c, r) : 0
  const bottom = r < 1 ? tabH(c, r) : 0
  const left = c > 0 ? -tabV(c - 1, r) : 0
  return (
    `M ${x} ${y}` +
    edge(x, y, x + cw, y, top, m) +
    edge(x + cw, y, x + cw, y + ch, right, m) +
    edge(x + cw, y + ch, x, y + ch, bottom, m) +
    edge(x, y + ch, x, y, left, m) +
    ' Z'
  )
}

function buildPieces(W, H) {
  const cw = W / 2
  const ch = H / 2
  const pieces = []
  for (let r = 0; r < 2; r += 1) {
    for (let c = 0; c < 2; c += 1) {
      const i = r * 2 + c
      const sx = c ? 1 : -1 // which corner this piece belongs to
      const sy = r ? 1 : -1
      pieces.push({
        i,
        d: piecePath(c, r, cw, ch),
        // arrives from its own corner, off-screen
        fx: sx * W * 0.75,
        fy: sy * H * 0.75,
        fr: sx * sy * 10,
        // and slides back out to that corner when the page opens
        ox: sx * (W * 0.62),
        oy: sy * (H * 0.62),
        or: sx * sy * 6,
        arrive: 0.3 + ORDER[i] * 0.5,
      })
    }
  }
  return pieces
}

const r1 = (n) => Math.round(n * 10) / 10

// small seeded generator so the artwork is identical on every piece
function rng(seed) {
  let t = seed
  return () => {
    t += 0x6d2b79f5
    let x = Math.imul(t ^ (t >>> 15), 1 | t)
    x ^= x + Math.imul(x ^ (x >>> 7), 61 | x)
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296
  }
}

// Abstract tech artwork, no text or UI: flowing data streams, a hex lattice
// and a constellation of glowing nodes. Built once, painted across the whole
// screen; each puzzle piece shows its part.
function buildArt(W, H) {
  const rand = rng(7)
  const k = Math.min(W, H) / 800

  // hex lattice
  const hr = 34 * Math.max(k, 0.8)
  const hw = Math.sqrt(3) * hr
  let hex = ''
  for (let row = -1; row * hr * 1.5 < H + hr * 2; row += 1) {
    for (let col = -1; col * hw < W + hw; col += 1) {
      const cx = col * hw + (row % 2 ? hw / 2 : 0)
      const cy = row * hr * 1.5
      const pts = Array.from({ length: 6 }, (_, i) => {
        const a2 = (Math.PI / 3) * i - Math.PI / 6
        return `${r1(cx + hr * Math.cos(a2))} ${r1(cy + hr * Math.sin(a2))}`
      })
      hex += `M ${pts.join(' L ')} Z `
    }
  }

  // flowing streams
  const streams = []
  const n = 16
  for (let i = 0; i < n; i += 1) {
    const t = i / (n - 1)
    const amp = H * (0.07 + 0.06 * Math.sin(t * 3.1))
    const base = H * (0.2 + t * 0.62)
    const ph = t * 2.4
    let d = ''
    for (let x = -20; x <= W + 20; x += 24) {
      const u = x / W
      const y = base + Math.sin(u * 5.2 + ph) * amp + Math.sin(u * 2.1 - ph * 1.3) * amp * 0.7
      d += `${d ? 'L' : 'M'} ${r1(x)} ${r1(y)} `
    }
    streams.push({ d, o: 0.18 + 0.4 * Math.sin(t * Math.PI), w: i % 5 === 2 ? 1.8 : 1 })
  }

  // constellation
  const nodes = Array.from({ length: 30 }, () => ({
    x: W * (0.04 + rand() * 0.92),
    y: H * (0.06 + rand() * 0.88),
    r: (1.6 + rand() * 3.2) * Math.max(k, 0.8),
  }))
  let links = ''
  nodes.forEach((a2, i) => {
    nodes
      .map((b2, j) => ({ j, d: Math.hypot(a2.x - b2.x, a2.y - b2.y) }))
      .filter((o) => o.j > i)
      .sort((p, q) => p.d - q.d)
      .slice(0, 2)
      .forEach((o) => {
        if (o.d < Math.min(W, H) * 0.34) links += `M ${r1(a2.x)} ${r1(a2.y)} L ${r1(nodes[o.j].x)} ${r1(nodes[o.j].y)} `
      })
  })
  return { hex, streams, nodes, links }
}

function Artwork({ art, W, H }) {
  return (
    <g>
      <rect width={W} height={H} fill="url(#in-bg-grad)" />
      <ellipse cx={W * 0.8} cy={H * 0.18} rx={W * 0.32} ry={H * 0.4} fill="#4d7fd0" fillOpacity="0.2" filter="url(#in-blur)" />
      <ellipse cx={W * 0.14} cy={H * 0.85} rx={W * 0.3} ry={H * 0.38} fill="#6a7ee0" fillOpacity="0.2" filter="url(#in-blur)" />
      <path d={art.hex} fill="none" stroke="#8fb2ee" strokeOpacity="0.1" strokeWidth="1" />
      <g fill="none" stroke="url(#in-stream)" strokeLinecap="round">
        {art.streams.map((s, i) => (
          <path key={i} d={s.d} strokeWidth={s.w} strokeOpacity={s.o} />
        ))}
      </g>
      <path d={art.links} fill="none" stroke="#a9cff0" strokeOpacity="0.32" strokeWidth="1" />
      {art.nodes.map((nd, i) => (
        <g key={i}>
          <circle cx={nd.x} cy={nd.y} r={nd.r * 3.2} fill="#8fc0ff" fillOpacity="0.1" />
          <circle cx={nd.x} cy={nd.y} r={nd.r} fill="#dbe9ff" />
        </g>
      ))}
    </g>
  )
}

export default function Intro({ onDone }) {
  const [{ W, H }] = useState(() => ({ W: window.innerWidth, H: window.innerHeight }))
  const [pieces] = useState(() => buildPieces(W, H))
  const [art] = useState(() => buildArt(W, H))

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onDone()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onDone])

  const open = OPEN_AT / TOTAL

  return (
    <motion.div
      className="in-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: TOTAL, times: [0, 0.985, 1] }}
      onAnimationComplete={onDone}
    >
      {/* plum backdrop; it clears just as the pieces start to open */}
      <motion.div
        className="in-bg"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 0] }}
        transition={{ duration: TOTAL, times: [0, open - 0.02, open + 0.04] }}
      />

      <motion.svg
        className="in-puzzle"
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="in-art" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={W} y2={H}>
            <stop offset="0" stopColor="#0b1530" />
            <stop offset="1" stopColor="#173263" />
          </linearGradient>
          <linearGradient id="in-bg-grad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={W} y2={H}>
            <stop offset="0" stopColor="#0a1329" />
            <stop offset="0.55" stopColor="#10224a" />
            <stop offset="1" stopColor="#1a3770" />
          </linearGradient>
          <linearGradient id="in-stream" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={W} y2="0">
            <stop offset="0" stopColor="#6a7ee0" />
            <stop offset="0.5" stopColor="#8fc0ff" />
            <stop offset="1" stopColor="#bfe2ff" />
          </linearGradient>
          <filter id="in-blur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation={Math.min(W, H) * 0.08} />
          </filter>
          {pieces.map((p) => (
            <clipPath id={`in-clip-${p.i}`} key={p.i}>
              <path d={p.d} />
            </clipPath>
          ))}
        </defs>

        {pieces.map((p) => {
          const arrive = p.arrive / TOTAL
          const land = Math.min(open - 0.04, (p.arrive + 1.2) / TOTAL)
          const times = [0, arrive, land, open, 1]
          return (
            <motion.g
              key={p.i}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              initial={{ x: p.fx, y: p.fy, rotate: p.fr }}
              animate={{
                x: [p.fx, p.fx, 0, 0, p.ox],
                y: [p.fy, p.fy, 0, 0, p.oy],
                rotate: [p.fr, p.fr, 0, 0, p.or],
              }}
              transition={{
                duration: TOTAL,
                times,
                ease: ['linear', [0.16, 1, 0.3, 1], 'linear', [0.65, 0, 0.35, 1]],
              }}
            >
              <path d={p.d} fill="url(#in-art)" />
              <g clipPath={`url(#in-clip-${p.i})`}>
                <Artwork art={art} W={W} H={H} />
              </g>
              {/* seam: dim while assembling, then lights up like gilded repair */}
              <motion.path
                d={p.d}
                fill="none"
                strokeLinejoin="round"
                style={{ filter: 'drop-shadow(0 0 6px rgba(169, 196, 238, 0.8))' }}
                initial={{ stroke: 'rgba(239, 244, 252,0.3)', strokeWidth: 1.4 }}
                animate={{
                  stroke: ['rgba(239, 244, 252,0.3)', 'rgba(239, 244, 252,0.3)', '#cfe0ff', '#cfe0ff'],
                  strokeWidth: [1.4, 1.4, 2.2, 2.2],
                }}
                transition={{
                  duration: TOTAL,
                  times: [0, ASSEMBLED_AT / TOTAL, (ASSEMBLED_AT + 0.5) / TOTAL, 1],
                  ease: 'easeOut',
                }}
              />
            </motion.g>
          )
        })}

        {/* lock-on ring where all four modules meet */}
        <motion.circle
          cx={W / 2}
          cy={H / 2}
          r={Math.min(W, H) * 0.075}
          fill="none"
          stroke="#cfe0ff"
          strokeWidth="1.5"
          style={{
            transformBox: 'fill-box',
            transformOrigin: 'center',
            filter: 'drop-shadow(0 0 8px rgba(169, 196, 238, 0.8))',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 0, 1.2, 1, 3], opacity: [0, 0, 1, 1, 0] }}
          transition={{
            duration: TOTAL,
            times: [0, ASSEMBLED_AT / TOTAL, (ASSEMBLED_AT + 0.4) / TOTAL, open, open + 0.12],
            ease: 'easeOut',
          }}
        />
      </motion.svg>

      <button type="button" className="in-skip" onClick={onDone}>
        Skip intro
      </button>
    </motion.div>
  )
}
