// Small explainer visuals used inside the research process.
// They restate facts from the written case study as diagrams.

export function Compare({ before, after }) {
  return (
    <div className="vz-compare">
      {[before, after].map((side, i) => (
        <div key={side.title} className={`vz-side${i ? ' vz-side--after' : ''}`}>
          <strong>{side.title}</strong>
          <ul>
            {side.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
      <span className="vz-arrow" aria-hidden="true">→</span>
    </div>
  )
}

export function Flow({ steps, caption }) {
  return (
    <figure className="vz-flow">
      <ol>
        {steps.map((s, i) => (
          <li key={s}>
            <span>{i + 1}</span>
            {s}
          </li>
        ))}
      </ol>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

const WIRES = {
  dashboard: (
    <>
      <rect x="10" y="10" width="460" height="280" rx="14" className="w-line" />
      <rect x="10" y="10" width="100" height="280" rx="14" className="w-soft" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="24" y={34 + i * 34} width="72" height="18" rx="9" className={i === 0 ? 'w-acc' : 'w-fill'} />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={126 + i * 114} y="28" width="102" height="56" rx="10" className="w-line" />
          <rect x={138 + i * 114} y="42" width="44" height="10" rx="5" className="w-acc" />
          <rect x={138 + i * 114} y="62" width="70" height="7" rx="3.5" className="w-fill" />
        </g>
      ))}
      <rect x="126" y="100" width="216" height="104" rx="10" className="w-line" />
      {[40, 64, 30, 52, 70].map((h, i) => (
        <rect key={i} x={142 + i * 38} y={192 - h} width="24" height={h} rx="5" className={i === 3 ? 'w-acc' : 'w-fill'} />
      ))}
      <rect x="354" y="100" width="102" height="104" rx="10" className="w-line" />
      <circle cx="405" cy="152" r="26" className="w-ring" />
      <rect x="126" y="218" width="330" height="58" rx="10" className="w-line" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x="142" y={230 + i * 14} width={200 - i * 30} height="6" rx="3" className="w-fill" />
      ))}
    </>
  ),
  map: (
    <>
      <rect x="10" y="10" width="460" height="280" rx="14" className="w-line" />
      <path d="M10 210 C110 150 190 230 290 170 S420 150 470 190 V276 a14 14 0 0 1 -14 14 H24 a14 14 0 0 1 -14 -14Z" className="w-soft" />
      {['Energy', 'Fiber', 'Grid'].map((l, i) => (
        <rect key={l} x={26 + i * 66} y="26" width="58" height="22" rx="11" className={i === 0 ? 'w-acc' : 'w-fill'} />
      ))}
      {[[120, 120], [200, 90], [260, 170], [160, 200]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="14" className="w-soft" />
          <circle cx={x} cy={y} r="5" className={i === 1 ? 'w-acc' : 'w-dot'} />
        </g>
      ))}
      <rect x="330" y="40" width="124" height="130" rx="12" className="w-card" />
      <circle cx="392" cy="92" r="28" className="w-ring" />
      <rect x="348" y="136" width="88" height="8" rx="4" className="w-fill" />
      <rect x="348" y="152" width="60" height="8" rx="4" className="w-fill" />
      <rect x="330" y="186" width="124" height="86" rx="12" className="w-card" />
      <rect x="344" y="200" width="46" height="58" rx="8" className="w-fill" />
      <rect x="396" y="200" width="46" height="58" rx="8" className="w-fill" />
    </>
  ),
  cards: (
    <>
      <rect x="10" y="10" width="460" height="280" rx="14" className="w-line" />
      <g transform="rotate(-12 150 150)"><rect x="98" y="50" width="90" height="136" rx="10" className="w-card" /></g>
      <g transform="rotate(12 330 150)"><rect x="288" y="50" width="90" height="136" rx="10" className="w-card" /></g>
      <rect x="194" y="38" width="94" height="144" rx="10" className="w-card w-gold" />
      <path d="M241 90 l5 14 14 5 -14 5 -5 14 -5 -14 -14 -5 14 -5z" className="w-acc" />
      <rect x="40" y="206" width="210" height="34" rx="17" className="w-fill" />
      <rect x="230" y="246" width="210" height="34" rx="17" className="w-soft" />
    </>
  ),
  phone: (
    <>
      <rect x="170" y="8" width="140" height="284" rx="26" className="w-line" />
      <rect x="190" y="38" width="60" height="8" rx="4" className="w-fill" />
      <rect x="190" y="56" width="100" height="12" rx="6" className="w-fill" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={190 + i * 26} y="86" width="22" height="22" rx="8" className={i === 0 ? 'w-acc' : 'w-fill'} />
      ))}
      <rect x="190" y="122" width="100" height="70" rx="12" className="w-soft" />
      <rect x="190" y="204" width="100" height="40" rx="10" className="w-fill" />
      <rect x="190" y="256" width="100" height="22" rx="11" className="w-acc" />
    </>
  ),
}

export function Wire({ variant, caption }) {
  return (
    <figure className="vz-wire">
      <svg viewBox="0 0 480 300" aria-hidden="true">
        {WIRES[variant]}
      </svg>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export function Shot({ src, alt, caption, light, narrow }) {
  return (
    <figure className={`vz-shot${light ? ' vz-shot--light' : ''}${narrow ? ' vz-shot--narrow' : ''}`}>
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export function Chips({ label, items }) {
  return (
    <div className="vz-chips">
      {label && <span>{label}</span>}
      <ul>
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  )
}

function One({ visual }) {
  if (visual.type === 'compare') return <Compare {...visual} />
  if (visual.type === 'flow') return <Flow {...visual} />
  if (visual.type === 'wire') return <Wire {...visual} />
  if (visual.type === 'shot') return <Shot {...visual} />
  if (visual.type === 'chips') return <Chips {...visual} />
  return null
}

export default function Visual({ visual }) {
  if (!visual) return null
  const list = Array.isArray(visual) ? visual : [visual]
  return list.map((v, i) => <One key={i} visual={v} />)
}
