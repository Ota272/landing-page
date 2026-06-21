import { motion } from 'framer-motion'

/**
 * Кнопка/ссылка с микро-анимацией наведения.
 *
 * <Button href="#consult">Записаться</Button>
 * <Button variant="outline" onClick={...}>Подробнее</Button>
 *
 * variant: 'primary' | 'outline' | 'ink' | 'ghost'
 * size:    'md' | 'lg'
 */
const VARIANTS = {
  primary:
    'bg-shu text-white shadow-glow hover:bg-shu-dark',
  ink: 'bg-sumi text-washi hover:bg-sumi-light',
  outline:
    'border-2 border-sumi/15 bg-white/70 text-sumi backdrop-blur hover:border-shu/60 hover:text-shu',
  ghost: 'text-sumi hover:text-shu',
}

const SIZES = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'lg',
  className = '',
  icon = true,
  ...rest
}) {
  const Tag = href ? motion.a : motion.button
  return (
    <Tag
      href={href}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors duration-300 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      <span>{children}</span>
      {icon && variant !== 'ghost' && (
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )}
    </Tag>
  )
}
