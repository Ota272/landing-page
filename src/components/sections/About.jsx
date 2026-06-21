import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import SakuraPetals from '../ui/SakuraPetals'
import { SakuraBranch, EnsoCircle, Seigaiha, Crane } from '../ui/decor'
import { fadeUp, slideInLeft, slideInRight, stagger, inView } from '../../lib/variants'

const ADVANTAGES = [
  '9 лет преподаёт японский',
  'Живёт в Токио более 10 лет',
  'Сдала JLPT N1 (высший уровень)',
  'Выпускница Токийского университета',
  'Авторская методика и материалы',
  'Находит подход к каждому ученику',
]

function PetalMark() {
  // Маленький киноварный цветок-сакура как маркер списка
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-shu"
      aria-hidden="true"
      fill="currentColor"
    >
      <g transform="translate(12 12)">
        {[0, 72, 144, 216, 288].map((r) => (
          <path
            key={r}
            d="M0 -1 C3 -4 7 -9 5 -13 C3.6 -16 0 -14.5 0 -11.5 C0 -14.5 -3.6 -16 -5 -13 C-7 -9 -3 -4 0 -1 Z"
            transform={`rotate(${r})`}
          />
        ))}
        <circle r="2" className="text-kin" fill="currentColor" />
      </g>
    </svg>
  )
}

export default function About() {
  return (
    <Section id="about" className="grain overflow-hidden bg-washi-50">
      {/* Фоновый декор */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {/* Бледный крупный кандзи 学 */}
        <span className="absolute -left-6 top-10 select-none font-brush text-[28vw] leading-none text-sumi/[0.035] sm:text-[20vw] lg:text-[15vw]">
          学
        </span>
        {/* Дзен-круг энсо в углу */}
        <motion.div
          className="absolute -right-10 top-16 hidden text-shu/10 lg:block"
          initial={{ opacity: 0, rotate: -20, scale: 0.85 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <EnsoCircle className="h-56 w-56" />
        </motion.div>
        {/* Паттерн волн снизу */}
        <Seigaiha
          className="absolute inset-x-0 bottom-0 h-40"
          color="#2c3e5d"
          opacity={0.08}
        />
      </div>

      <div className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* ЛЕВАЯ КОЛОНКА — портрет основательницы */}
        <motion.div
          className="relative mx-auto w-full max-w-[440px] lg:mx-0"
          variants={slideInLeft}
          {...inView}
        >
          {/* Ветка сакуры сверху */}
          <motion.div
            className="pointer-events-none absolute -left-8 -top-12 z-20 w-48 sm:-left-12 sm:w-64"
            initial={{ opacity: 0, y: -16, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <SakuraBranch className="w-full drop-shadow-sm animate-sway" />
          </motion.div>

          {/* Декоративная подложка-смещение */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-5xl bg-gradient-to-br from-sakura-soft to-matcha-light/60" />

          {/* Рамка с фото */}
          <div className="relative overflow-hidden rounded-5xl border-4 border-white bg-white shadow-card">
            <div className="relative overflow-hidden rounded-[2.1rem]">
              <img
                src="https://i.pravatar.cc/480?img=47"
                alt="Анна Сато — основательница школы «Сакура»"
                width={480}
                height={480}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              {/* Лёгкая индиго-вуаль снизу для контраста бейджа */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ai-deep/30 to-transparent" />
            </div>

            {/* Падающие лепестки внутри рамки */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.1rem]">
              <SakuraPetals count={8} />
            </div>
          </div>

          {/* Штамп-ханко «先生» */}
          <motion.div
            className="absolute -right-3 top-6 z-20 sm:-right-5 sm:top-8"
            initial={{ opacity: 0, scale: 0.4, rotate: -25 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -10 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.5 }}
          >
            <span className="hanko h-16 w-16 rotate-[-10deg] bg-white/85 text-xl shadow-glow backdrop-blur sm:h-20 sm:w-20 sm:text-2xl">
              先生
            </span>
          </motion.div>

          {/* Плавающий бейдж с именем */}
          <motion.div
            className="absolute -bottom-7 left-1/2 z-20 w-[88%] -translate-x-1/2 sm:-bottom-8 sm:left-6 sm:w-auto sm:translate-x-0"
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card-washi flex items-center gap-3 rounded-4xl px-5 py-3.5 animate-float">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-shu font-jp text-lg font-bold text-white shadow-glow">
                桜
              </span>
              <div className="leading-tight">
                <p className="font-display text-base font-extrabold text-sumi sm:text-lg">
                  Анна Сато
                </p>
                <p className="font-jp text-xs text-sumi-soft">
                  основательница · JLPT N1
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ПРАВАЯ КОЛОНКА — текст */}
        <motion.div
          className="relative"
          variants={slideInRight}
          {...inView}
        >
          {/* Журавль-акцент */}
          <Crane className="pointer-events-none absolute -right-2 -top-10 hidden h-16 w-16 text-ai/15 animate-float-slow lg:block" />

          <SectionTitle
            kanji="桜"
            kicker="О школе"
            align="left"
            title={
              <>
                Школа, где японский становится{' '}
                <span className="text-gradient-shu">любимым языком</span>
              </>
            }
          />

          <Reveal
            as="p"
            variant="up"
            delay={0.12}
            className="mt-6 max-w-xl text-base leading-relaxed text-sumi-soft sm:text-lg"
          >
            «Сакура» — это команда влюблённых в Японию преподавателей. Мы
            убеждены: японский может быть простым, живым и захватывающим.
            Методика построена на реальных диалогах, культуре и аниме — а не на
            бесконечной зубрёжке.
          </Reveal>

          {/* Список преимуществ в 2 колонки */}
          <motion.ul
            className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2"
            variants={stagger(0.1, 0.1)}
            {...inView}
          >
            {ADVANTAGES.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="group flex items-start gap-3 rounded-2xl px-1 py-1.5 transition-colors duration-300 hover:bg-white/60"
              >
                <span className="mt-0.5 transition-transform duration-300 group-hover:scale-125">
                  <PetalMark />
                </span>
                <span className="text-[0.95rem] font-medium leading-snug text-sumi sm:text-base">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Цитата + CTA */}
          <Reveal variant="up" delay={0.2} className="mt-9">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <figure className="relative max-w-md border-l-2 border-shu/40 pl-5">
                <span className="pointer-events-none absolute -left-1 -top-3 font-brush text-4xl leading-none text-shu/30">
                  「
                </span>
                <blockquote className="font-jp text-base italic leading-relaxed text-sumi-soft">
                  Язык — это дверь в другую культуру. Моя задача — сделать так,
                  чтобы вы открыли её с улыбкой.
                </blockquote>
                <figcaption className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-shu">
                  — Анна Сато
                </figcaption>
              </figure>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button href="#consult" variant="primary" size="lg">
                Записаться на консультацию
              </Button>
              <Button href="#courses" variant="outline" size="lg" icon={false}>
                Смотреть курсы
              </Button>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </Section>
  )
}
