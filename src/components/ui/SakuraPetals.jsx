import { useMemo } from 'react'

/**
 * Падающие лепестки сакуры. Лёгкая CSS-анимация (keyframe `petal-drop`),
 * каждый лепесток рандомизирован по позиции/скорости/дрейфу.
 *
 * <SakuraPetals count={18} />
 * Размещать внутри контейнера с position: relative и overflow: hidden.
 */
function Petal({ style, hue }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="absolute -top-10 will-change-transform"
      style={style}
      aria-hidden="true"
    >
      <path
        d="M12 2 C16 5 22 9 19 16 C17 20 13 21 12 22 C11 21 7 20 5 16 C2 9 8 5 12 2 Z"
        fill={hue}
        opacity="0.85"
      />
      <path
        d="M12 4 C13 9 13 15 12 21"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="0.6"
        fill="none"
      />
    </svg>
  )
}

const HUES = ['#F7C7D2', '#FBDDE4', '#F3B6C3', '#FCEEF1', '#EFA9BC']

export default function SakuraPetals({ count = 16, className = '' }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = 10 + Math.random() * 18
      const left = Math.random() * 100
      const duration = 9 + Math.random() * 12
      const delay = -Math.random() * 18
      const drift = (Math.random() * 2 - 1) * 160
      const spin = (Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 360)
      return {
        id: i,
        hue: HUES[i % HUES.length],
        style: {
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animation: `petal-drop ${duration}s linear ${delay}s infinite`,
          '--drift': `${drift}px`,
          '--spin': `${spin}deg`,
        },
      }
    })
  }, [count])

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <Petal key={p.id} style={p.style} hue={p.hue} />
      ))}
    </div>
  )
}
