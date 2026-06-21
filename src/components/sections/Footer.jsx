import { motion } from 'framer-motion'

import Button from '../ui/Button'
import SakuraPetals from '../ui/SakuraPetals'
import { SakuraBranch, Torii, Crane, Seigaiha } from '../ui/decor'
import { fadeUp, stagger, inView } from '../../lib/variants'

const NAV_COLUMNS = [
  {
    title: 'Меню',
    links: [
      { label: 'О школе', href: '#about' },
      { label: 'Обучение', href: '#courses' },
      { label: 'Тарифы', href: '#pricing' },
      { label: 'Отзывы', href: '#reviews' },
      { label: 'Контакты', href: '#footer' },
    ],
  },
  {
    title: 'Курсы',
    links: [
      { label: 'Индивидуально', href: '#courses' },
      { label: 'Разговорный клуб', href: '#courses' },
      { label: 'Подготовка к JLPT', href: '#courses' },
      { label: 'Японский для аниме', href: '#courses' },
    ],
  },
]

const CONTACTS = [
  { label: 'Telegram: @sakura_nihongo', href: '#', kind: 'telegram' },
  { label: 'Telegram-канал', href: '#', kind: 'telegram' },
  { label: 'Instagram: @sakura.school', href: '#', kind: 'instagram' },
  { label: 'sakura.school@mail.ru', href: '#', kind: 'mail' },
]

function TelegramIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M21.94 4.3 18.6 19.1c-.25 1.1-.92 1.37-1.86.85l-5.13-3.78-2.47 2.38c-.27.27-.5.5-1.03.5l.37-5.22 9.5-8.59c.41-.37-.09-.57-.64-.2L5.55 12.3.5 10.72c-1.1-.34-1.12-1.1.23-1.63L20.52 2.7c.91-.34 1.71.21 1.42 1.6Z" />
    </svg>
  )
}

function InstagramIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function MailIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

const CONTACT_ICONS = {
  telegram: TelegramIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
}

function ColumnHeading({ children }) {
  return (
    <h3 className="mb-5 font-jp text-xs font-bold uppercase tracking-[0.28em] text-shu-light">
      {children}
    </h3>
  )
}

function FootLink({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 text-sm text-washi/60 transition-colors duration-300 hover:text-washi"
    >
      <span className="h-px w-0 bg-shu transition-all duration-300 group-hover:w-4" />
      <span className="-ml-2 transition-transform duration-300 group-hover:translate-x-0">
        {children}
      </span>
    </a>
  )
}

function SocialBubble({ href, label, Icon }) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-washi/15 bg-washi/5 text-washi/70 transition-colors duration-300 hover:border-shu/60 hover:bg-shu/15 hover:text-shu-light"
    >
      <Icon className="h-[18px] w-[18px]" />
    </motion.a>
  )
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="grain relative overflow-hidden bg-sumi text-washi"
    >
      {/* Очень крупный бледный кандзи на фоне */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 left-1/2 -z-0 -translate-x-1/2 select-none whitespace-nowrap font-brush text-[34vw] leading-none text-washi/[0.03] sm:text-[26vw] lg:text-[20rem]"
      >
        ありがとう
      </span>

      {/* Декоративные японские элементы на фоне */}
      <Seigaiha
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-40"
        color="#E0483D"
        opacity={0.06}
      />
      <SakuraPetals count={10} className="-z-0 opacity-40" />
      <SakuraBranch className="pointer-events-none absolute -left-20 top-8 -z-0 hidden w-80 rotate-6 opacity-10 lg:block" />
      <Torii className="pointer-events-none absolute right-8 top-16 -z-0 hidden w-28 text-shu/15 animate-float-slow lg:block" />
      <Crane className="pointer-events-none absolute bottom-24 right-1/4 -z-0 hidden w-24 text-kin/15 animate-float xl:block" />

      <div className="container-x relative z-10 pb-10 pt-20 sm:pt-24">
        <motion.div
          variants={stagger(0.12)}
          {...inView}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12"
        >
          {/* Бренд */}
          <motion.div variants={fadeUp} className="lg:col-span-4 lg:pr-8">
            <a href="#hero" className="group inline-flex items-center gap-3">
              <span className="hanko flex h-14 w-14 items-center justify-center text-3xl leading-none">
                桜
              </span>
              <span className="font-display text-2xl font-extrabold tracking-tight text-washi">
                Сакура
              </span>
            </a>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-washi/55">
              Онлайн-школа японского языка. Учись в удовольствие.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <SocialBubble href="#" label="Telegram" Icon={TelegramIcon} />
              <SocialBubble href="#" label="Instagram" Icon={InstagramIcon} />
              <SocialBubble href="#" label="Почта" Icon={MailIcon} />
            </div>
          </motion.div>

          {/* Контакты */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <ColumnHeading>Контакты</ColumnHeading>
            <ul className="flex flex-col gap-4">
              {CONTACTS.map((c) => {
                const Icon = CONTACT_ICONS[c.kind]
                return (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      className="group inline-flex items-center gap-3 text-sm text-washi/60 transition-colors duration-300 hover:text-washi"
                    >
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-washi/5 text-washi/50 transition-colors duration-300 group-hover:bg-shu/20 group-hover:text-shu-light">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span>{c.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* Меню + Курсы */}
          {NAV_COLUMNS.map((col) => (
            <motion.div key={col.title} variants={fadeUp} className="lg:col-span-2">
              <ColumnHeading>{col.title}</ColumnHeading>
              <ul className="flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FootLink href={link.href}>{link.label}</FootLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Остались вопросы */}
          <motion.div
            variants={fadeUp}
            className="sm:col-span-2 lg:col-span-1 lg:min-w-[15rem]"
          >
            <ColumnHeading>Остались вопросы?</ColumnHeading>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-washi/55">
              Напишем, ответим и подберём формат.
            </p>
            <Button href="#consult" size="md" className="w-full sm:w-auto">
              Задать вопрос
            </Button>
          </motion.div>
        </motion.div>

        {/* Низ */}
        <motion.div
          variants={fadeUp}
          {...inView}
          className="mt-16 flex flex-col gap-6 border-t border-washi/10 pt-8 text-xs text-washi/40 sm:mt-20 md:flex-row md:items-center md:justify-between"
        >
          <p className="leading-relaxed">
            © 2026 Школа японского языка «Сакура». Все права защищены.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-washi/80"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-washi/80"
            >
              Оферта
            </a>
            <span className="font-jp text-shu-light/60" aria-hidden="true">
              桜
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
