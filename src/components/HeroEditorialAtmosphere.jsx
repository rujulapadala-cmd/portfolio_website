export default function HeroEditorialAtmosphere() {
  const stars = [
    [88, 120],
    [145, 68],
    [890, 145],
    [920, 380],
    [72, 480],
    [940, 580],
    [310, 620],
    [680, 640],
    [420, 90],
    [560, 650],
  ]

  return (
    <svg
      viewBox="0 0 1000 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hero-backdrop__orbits"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="hero-orbit-a" x1="0" y1="620" x2="220" y2="160">
          <stop offset="0%" stopColor="#DCCFED" stopOpacity="0" />
          <stop offset="45%" stopColor="#B895A8" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#E18AAA" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="hero-orbit-b" x1="1020" y1="80" x2="780" y2="540">
          <stop offset="0%" stopColor="#F5DCE0" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#C4A8BC" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#DCCFED" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M -20 620 C 20 420, 80 260, 220 160"
        stroke="url(#hero-orbit-a)"
        strokeWidth="1.1"
      />
      <path
        d="M 1020 80 C 980 280, 920 440, 780 540"
        stroke="url(#hero-orbit-b)"
        strokeWidth="1.1"
      />
      <path
        d="M 60 180 Q 180 120, 280 200"
        stroke="#C4A8BC"
        strokeWidth="0.7"
        opacity="0.45"
      />
      <path
        d="M 940 520 Q 820 580, 700 500"
        stroke="#E18AAA"
        strokeWidth="0.7"
        opacity="0.38"
      />

      {stars.map(([x, y], i) => (
        <circle
          key={`field-star-${i}`}
          cx={x}
          cy={y}
          r={i % 2 === 0 ? 1.8 : 1.3}
          fill="#B895A8"
          opacity={0.4 + (i % 3) * 0.12}
        />
      ))}
    </svg>
  )
}
