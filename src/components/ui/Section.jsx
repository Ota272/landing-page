/**
 * Обёртка секции: id для якорной навигации + вертикальные отступы.
 *
 * <Section id="about" className="bg-washi-100">...</Section>
 */
export default function Section({ id, children, className = '', inner = true }) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-20 sm:py-28 ${className}`}>
      {inner ? <div className="container-x">{children}</div> : children}
    </section>
  )
}
