import Reveal from './Reveal'

/**
 * Заголовок секции с японским иероглифическим акцентом (кикером).
 *
 * <SectionTitle kanji="校" kicker="О школе" title={<>Почему именно <span className="text-gradient-shu">мы</span></>} />
 *
 * align: 'left' | 'center'
 */
export default function SectionTitle({
  kanji,
  kicker,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  const isCenter = align === 'center'
  return (
    <div
      className={`flex flex-col gap-4 ${
        isCenter ? 'items-center text-center' : 'items-start text-left'
      } ${className}`}
    >
      {kicker && (
        <Reveal
          variant="up"
          className={`flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}
        >
          {kanji && (
            <span className="hanko h-9 w-9 text-lg leading-none">{kanji}</span>
          )}
          <span className="font-jp text-sm font-bold uppercase tracking-[0.25em] text-shu">
            {kicker}
          </span>
        </Reveal>
      )}

      <Reveal
        as="h2"
        variant="up"
        delay={0.05}
        className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-sumi sm:text-5xl"
      >
        {title}
      </Reveal>

      {subtitle && (
        <Reveal
          as="p"
          variant="up"
          delay={0.1}
          className={`max-w-2xl text-base leading-relaxed text-sumi-soft sm:text-lg ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </Reveal>
      )}
    </div>
  )
}
