import { motion } from 'framer-motion'
import { fadeUp, fadeIn, scaleIn, slideInLeft, slideInRight } from '../../lib/variants'

const VARIANTS = {
  up: fadeUp,
  in: fadeIn,
  scale: scaleIn,
  left: slideInLeft,
  right: slideInRight,
}

/**
 * Обёртка для появления элемента при попадании в зону видимости.
 *
 * <Reveal>...</Reveal>                      — fade + slide up (по умолчанию)
 * <Reveal variant="left" delay={0.1}>       — варианты: up | in | scale | left | right
 * <Reveal as="span" className="...">        — любой html-тег
 */
export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  amount = 0.25,
  once = true,
  as = 'div',
  className = '',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  const base = VARIANTS[variant] || fadeUp

  const v = {
    hidden: base.hidden,
    show: {
      ...base.show,
      transition: { ...base.show.transition, delay },
    },
  }

  return (
    <MotionTag
      className={className}
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
