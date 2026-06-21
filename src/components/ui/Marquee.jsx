/**
 * Бесконечная бегущая строка. Контент дублируется дважды,
 * анимация сдвигает на -50% для бесшовного цикла.
 *
 * <Marquee>{items.map(...)}</Marquee>
 * <Marquee reverse speed="slow" />
 */
export default function Marquee({
  children,
  reverse = false,
  className = '',
  pauseOnHover = true,
}) {
  const anim = reverse ? 'animate-marquee-rev' : 'animate-marquee'
  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      <div
        className={`flex shrink-0 items-center ${anim} ${
          pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
        }`}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
