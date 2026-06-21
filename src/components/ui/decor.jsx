// Японские декоративные SVG-мотивы. Все принимают className и наследуют
// currentColor, где это уместно, чтобы легко перекрашиваться через Tailwind.

export function SunBurst({ className = '' }) {
  // Восходящее солнце хиномару с лучами
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="sun-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF8A6E" />
          <stop offset="60%" stopColor="#E0483D" />
          <stop offset="100%" stopColor="#C13327" />
        </radialGradient>
      </defs>
      <g transform="translate(100 100)">
        {Array.from({ length: 24 }).map((_, i) => (
          <rect
            key={i}
            x="-3"
            y="-96"
            width="6"
            height="40"
            rx="3"
            fill="#E0483D"
            opacity="0.18"
            transform={`rotate(${i * 15})`}
          />
        ))}
      </g>
      <circle cx="100" cy="100" r="52" fill="url(#sun-core)" />
    </svg>
  )
}

export function Torii({ className = '' }) {
  // Ворота тории
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" fill="currentColor">
      <rect x="10" y="22" width="100" height="11" rx="3" />
      <path d="M6 20 H114 L106 12 H14 Z" />
      <rect x="20" y="40" width="80" height="8" rx="2" />
      <rect x="26" y="33" width="11" height="78" rx="3" />
      <rect x="83" y="33" width="11" height="78" rx="3" />
    </svg>
  )
}

export function Fuji({ className = '' }) {
  // Гора Фудзи со снежной шапкой
  return (
    <svg viewBox="0 0 320 160" className={className} aria-hidden="true">
      <path
        d="M0 160 L110 28 Q160 -10 210 28 L320 160 Z"
        fill="currentColor"
      />
      <path
        d="M118 38 Q160 4 202 38 L188 56 Q176 44 160 52 Q146 44 132 56 Z"
        fill="#FBFAF7"
        opacity="0.95"
      />
    </svg>
  )
}

export function SakuraBranch({ className = '' }) {
  // Ветка сакуры с цветами
  const Blossom = ({ x, y, s = 1 }) => (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {[0, 72, 144, 216, 288].map((r) => (
        <path
          key={r}
          d="M0 -2 C4 -5 10 -12 7 -18 C5 -22 0 -20 0 -16 C0 -20 -5 -22 -7 -18 C-10 -12 -4 -5 0 -2 Z"
          fill="#F3B6C3"
          transform={`rotate(${r})`}
        />
      ))}
      <circle r="2.4" fill="#C9A24B" />
    </g>
  )
  return (
    <svg viewBox="0 0 240 120" className={className} aria-hidden="true">
      <path
        d="M2 12 C60 30 120 18 180 50 C205 63 222 60 238 52"
        stroke="#5C3A2E"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M70 24 C92 40 110 38 134 60"
        stroke="#5C3A2E"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <Blossom x={30} y={20} s={1.1} />
      <Blossom x={78} y={28} s={1.4} />
      <Blossom x={120} y={26} s={0.9} />
      <Blossom x={138} y={62} s={1.2} />
      <Blossom x={186} y={52} s={1.5} />
      <Blossom x={222} y={52} s={1} />
    </svg>
  )
}

export function Crane({ className = '' }) {
  // Журавль-оригами (стилизованный)
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" fill="currentColor">
      <path d="M14 70 L60 40 L106 70 L60 58 Z" opacity="0.95" />
      <path d="M60 58 L60 92 L48 104 L72 104 L60 92" opacity="0.7" />
      <path d="M60 40 L96 16 L92 30 L70 46 Z" opacity="0.85" />
      <circle cx="95" cy="22" r="3" />
    </svg>
  )
}

export function Lantern({ className = '' }) {
  // Бумажный фонарик тётин
  return (
    <svg viewBox="0 0 80 130" className={className} aria-hidden="true">
      <rect x="34" y="0" width="12" height="14" rx="2" fill="#241F1B" />
      <rect x="20" y="12" width="40" height="7" rx="3" fill="#241F1B" />
      <ellipse cx="40" cy="62" rx="34" ry="44" fill="#E0483D" />
      <ellipse cx="40" cy="62" rx="34" ry="44" fill="url(#lant-shade)" opacity="0.25" />
      <g stroke="#9A2A20" strokeWidth="2" opacity="0.55">
        <line x1="6" y1="62" x2="74" y2="62" />
        <line x1="9" y1="40" x2="71" y2="40" />
        <line x1="9" y1="84" x2="71" y2="84" />
      </g>
      <rect x="28" y="40" width="24" height="44" rx="4" fill="#F7F1E6" opacity="0.18" />
      <text x="40" y="74" textAnchor="middle" fontSize="30" fill="#FBFAF7" fontFamily="serif">
        語
      </text>
      <rect x="20" y="104" width="40" height="7" rx="3" fill="#241F1B" />
      <rect x="36" y="111" width="8" height="16" rx="2" fill="#C9A24B" />
      <defs>
        <radialGradient id="lant-shade" cx="35%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export function Koi({ className = '' }) {
  // Карп кои
  return (
    <svg viewBox="0 0 140 80" className={className} aria-hidden="true">
      <path
        d="M10 40 C30 12 80 14 104 32 C116 40 116 40 104 48 C80 66 30 68 10 40 Z"
        fill="#F2705F"
      />
      <path d="M104 40 C124 26 132 28 138 18 C130 38 134 42 138 62 C132 52 124 54 104 40 Z" fill="#E0483D" />
      <circle cx="34" cy="36" r="4" fill="#241F1B" />
      <path d="M50 24 q14 16 0 32" stroke="#fff" strokeWidth="3" fill="none" opacity="0.6" />
      <circle cx="70" cy="30" r="6" fill="#fff" opacity="0.7" />
      <circle cx="86" cy="46" r="5" fill="#241F1B" opacity="0.25" />
    </svg>
  )
}

export function Seigaiha({ className = '', color = '#E0483D', opacity = 0.12 }) {
  // Бесшовный паттерн волн сэйгайха (青海波)
  return (
    <svg className={className} aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id="seigaiha" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth="2" opacity={opacity}>
            <path d="M0 30 A30 30 0 0 1 60 30" />
            <path d="M0 30 A22 22 0 0 1 44 30" transform="translate(8 0)" />
            <path d="M0 30 A14 14 0 0 1 28 30" transform="translate(16 0)" />
            <path d="M-30 30 A30 30 0 0 1 30 30" />
            <path d="M30 30 A30 30 0 0 1 90 30" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#seigaiha)" />
    </svg>
  )
}

export function WaveDivider({ className = '', flip = false, color = '#F7F1E6' }) {
  // Волнообразный разделитель между секциями
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={className}
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
      aria-hidden="true"
    >
      <path
        d="M0 50 C 180 90 360 10 540 40 C 720 70 900 20 1080 40 C 1260 60 1380 40 1440 30 L1440 90 L0 90 Z"
        fill={color}
      />
    </svg>
  )
}

export function EnsoCircle({ className = '' }) {
  // Дзен-круг энсо (рисуется штрихом)
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <path
        d="M88 26 A48 48 0 1 0 102 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  )
}
