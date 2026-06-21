import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, animate } from 'framer-motion'

/**
 * Анимированный счётчик, запускается при появлении в зоне видимости.
 *
 * <Counter to={1000} suffix="+" />
 * <Counter to={98} suffix="%" duration={1.6} />
 */
export default function Counter({
  to = 100,
  from = 0,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const mv = useMotionValue(from)
  const [display, setDisplay] = useState(from)

  useEffect(() => {
    if (!inView) return
    const controls = animate(mv, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, duration, mv])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString('ru-RU')}
      {suffix}
    </span>
  )
}
