import { motion } from 'framer-motion'

import Counter from '../ui/Counter'
import Reveal from '../ui/Reveal'
import { SunBurst, Seigaiha, EnsoCircle, Crane } from '../ui/decor'
import { fadeUp, scaleIn, stagger, inView } from '../../lib/variants'

const STATS = [
  {
    to: 4500,
    suffix: '+',
    kanji: '生',
    label: 'довольных учеников',
    note: 'по всему миру',
  },
  {
    to: 50000,
    suffix: '+',
    kanji: '習',
    label: 'проведённых уроков',
    note: 'вживую и онлайн',
  },
  {
    to: 9,
    suffix: '',
    kanji: '年',
    label: 'лет опыта',
    note: 'с 2017 года',
  },
  {
    to: 96,
    suffix: '%',
    kanji: '合',
    label: 'сдают экзамен JLPT',
    note: 'с первой попытки',
  },
]

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative isolate overflow-hidden bg-gradient-to-br from-ai-deep via-ai to-sumi py-20 text-washi sm:py-24 lg:py-28"
    >
      {/* Зернистость поверх тёмного фона */}
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Паттерн волн сэйгайха на фоне */}
      <Seigaiha
        className="pointer-events-none absolute inset-0 h-full w-full"
        color="#E6C977"
        opacity={0.1}
      />

      {/* Большой полупрозрачный SunBurst справа сверху */}
      <SunBurst className="pointer-events-none absolute -right-24 -top-28 h-[26rem] w-[26rem] opacity-[0.14] mix-blend-screen animate-spin-slow sm:-right-20 lg:-right-10" />

      {/* Дзен-круг энсо слева снизу */}
      <EnsoCircle className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 text-kin opacity-[0.07] animate-spin-rev" />

      {/* Парящий журавль */}
      <Crane className="pointer-events-none absolute right-[12%] bottom-10 hidden h-24 w-24 text-kin/30 animate-float-slow lg:block" />

      {/* Мягкие световые блики */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-shu/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-96 translate-y-1/3 rounded-full bg-kin/10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="container-x relative">
        {/* Заголовок-каппер */}
        <Reveal variant="up" className="mb-12 text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-kin/30 bg-white/5 px-4 py-1.5 font-jp text-sm tracking-wide text-kin-light backdrop-blur-sm">
            <span aria-hidden="true">数字</span>
            <span className="text-washi/60">·</span>
            <span className="font-sans uppercase tracking-[0.2em] text-washi/70">
              Цифры школы
            </span>
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold leading-tight text-washi sm:text-4xl lg:text-[2.75rem]">
            Результат, которому{' '}
            <span className="text-gradient-shu">доверяют</span> тысячи
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-washi/65 sm:text-lg">
            Девять лет мы ведём учеников от первой каны до свободной речи.
            Цифры говорят за нас.
          </p>
        </Reveal>

        {/* Сетка показателей */}
        <motion.dl
          variants={stagger(0.14, 0.1)}
          {...inView}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-4xl border border-white/10 bg-white/[0.03] shadow-card backdrop-blur-sm lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-white/[0.04] to-transparent px-5 py-9 text-center ring-1 ring-white/5 sm:px-8 sm:py-12"
            >
              {/* Иероглиф-акцент на фоне ячейки */}
              <motion.span
                variants={scaleIn}
                aria-hidden="true"
                className="pointer-events-none absolute right-3 top-2 select-none font-jp text-6xl leading-none text-kin/10 transition-colors duration-500 group-hover:text-kin/20 sm:text-7xl"
              >
                {s.kanji}
              </motion.span>

              {/* Крупное число */}
              <div className="relative font-display text-4xl font-extrabold tracking-tight text-kin sm:text-5xl lg:text-[3.25rem]">
                <Counter
                  to={s.to}
                  suffix={s.suffix}
                  duration={2}
                  className="bg-gradient-to-b from-kin-light via-kin to-shu-light bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(230,201,119,0.25)]"
                />
              </div>

              {/* Подпись */}
              <dt className="relative max-w-[12rem] text-sm font-semibold text-washi sm:text-base">
                {s.label}
              </dt>
              <dd className="relative text-xs text-washi/50 sm:text-sm">{s.note}</dd>

              {/* Подсветка снизу при наведении */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-kin/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </motion.dl>

        {/* Нижняя подпись-печать */}
        <Reveal variant="up" delay={0.2} className="mt-10 flex justify-center">
          <span className="font-jp text-sm tracking-wide text-washi/45">
            桜 · школа японского языка «Сакура»
          </span>
        </Reveal>
      </div>
    </section>
  )
}
