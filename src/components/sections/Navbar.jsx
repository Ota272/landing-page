import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'
import { EASE } from '../../lib/variants'

const LINKS = [
  { label: 'О школе', href: '#about' },
  { label: 'Обучение', href: '#courses' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#footer' },
]

function Logo({ compact = false }) {
  return (
    <a href="#hero" className="group flex items-center gap-3" aria-label="Сакура — на главную">
      <motion.span
        whileHover={{ rotate: -6, scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 320, damping: 16 }}
        className="hanko grid h-11 w-11 place-items-center rounded-2xl bg-shu text-washi shadow-glow"
      >
        <span className="font-jp text-2xl leading-none">桜</span>
      </motion.span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-tight text-sumi transition-all duration-300 ${
            compact ? 'text-lg' : 'text-xl'
          }`}
        >
          Сакура
        </span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-sumi-muted">
          онлайн-школа японского
        </span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Блокируем прокрутку фона при открытом мобильном меню
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.nav
        animate={{
          paddingTop: scrolled ? 10 : 18,
          paddingBottom: scrolled ? 10 : 18,
        }}
        transition={{ duration: 0.35, ease: EASE }}
        className={`relative transition-colors duration-500 ${
          scrolled
            ? 'border-b border-sumi/5 bg-washi/80 shadow-soft backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4">
          {/* Логотип */}
          <Logo compact={scrolled} />

          {/* Меню — десктоп */}
          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative inline-flex items-center px-4 py-2 text-sm font-semibold text-sumi-soft transition-colors duration-300 hover:text-shu"
                >
                  {link.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-shu transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + бургер */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <Button href="#consult" size="md">
                Записаться
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative grid h-11 w-11 place-items-center rounded-2xl border border-sumi/10 bg-white/70 text-sumi backdrop-blur transition-colors duration-300 hover:border-shu/50 hover:text-shu lg:hidden"
            >
              <span className="sr-only">Меню</span>
              <span className="relative block h-4 w-5">
                <motion.span
                  animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current"
                />
                <motion.span
                  animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="absolute bottom-0 left-0 block h-0.5 w-5 rounded-full bg-current"
                />
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Мобильное выпадающее меню */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 -z-10 bg-sumi/30 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              key="panel"
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="overflow-hidden border-b border-sumi/5 bg-washi/95 shadow-soft backdrop-blur-xl lg:hidden"
            >
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
                }}
                className="container-x flex flex-col gap-1 py-5"
              >
                {LINKS.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold text-sumi-soft transition-colors duration-300 hover:bg-sakura-soft/60 hover:text-shu"
                    >
                      <span>{link.label}</span>
                      <span className="font-jp text-sm text-shu/40 transition-colors duration-300 group-hover:text-shu">
                        桜
                      </span>
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
                  }}
                  className="mt-3"
                >
                  <Button
                    href="#consult"
                    size="lg"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    Записаться
                  </Button>
                </motion.li>
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
