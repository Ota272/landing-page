import { motion } from 'framer-motion'

import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import SakuraPetals from '../ui/SakuraPetals'
import { SunBurst, Torii, Seigaiha, EnsoCircle, Crane, SakuraBranch } from '../ui/decor'
import { fadeUp, scaleIn, fadeIn, stagger, inView, EASE } from '../../lib/variants'

export default function FinalCTA() {
  return (
    <section
      id="consult"
      className="relative isolate overflow-hidden bg-gradient-to-b from-ai-deep via-sumi to-sumi py-24 text-washi sm:py-28 lg:py-36"
    >
      {/* Зернистость поверх тёмного фона */}
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Большое восходящее солнце по центру-сзади */}
      <SunBurst className="pointer-events-none absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.16] mix-blend-screen animate-sun-pulse sm:h-[52rem] sm:w-[52rem] lg:h-[60rem] lg:w-[60rem]" />

      {/* Мягкое тёплое свечение за солнцем */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-shu/25 blur-[140px]"
        aria-hidden="true"
      />

      {/* Бледные волны сэйгайха снизу */}
      <Seigaiha
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 w-full"
        color="#E6C977"
        opacity={0.08}
      />

      {/* Силуэт тории по центру внизу */}
      <Torii className="pointer-events-none absolute bottom-0 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 translate-y-[18%] text-sumi-light/40 sm:h-[32rem] sm:w-[32rem] lg:h-[38rem] lg:w-[38rem]" />

      {/* Дзен-круг энсо слева сверху */}
      <EnsoCircle className="pointer-events-none absolute -left-20 top-10 h-72 w-72 text-kin/[0.08] animate-spin-rev" />

      {/* Парящий журавль справа сверху */}
      <Crane className="pointer-events-none absolute right-[8%] top-16 hidden h-24 w-24 text-kin/25 animate-float-slow lg:block" />

      {/* Ветка сакуры в углу */}
      <SakuraBranch className="pointer-events-none absolute -left-10 bottom-8 hidden h-32 w-64 opacity-30 animate-sway lg:block" />

      {/* Падающие лепестки сакуры */}
      <SakuraPetals count={14} />

      {/* Виньетка по краям */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(20,17,15,0.55)_100%)]"
        aria-hidden="true"
      />

      <motion.div
        variants={stagger(0.16, 0.05)}
        {...inView}
        className="container-x relative flex flex-col items-center text-center"
      >
        {/* Кикер */}
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2.5 rounded-full border border-kin/30 bg-white/[0.04] px-5 py-2 text-sm tracking-wide backdrop-blur-sm"
        >
          <span className="font-jp text-kin-light" aria-hidden="true">
            始めよう
          </span>
          <span className="text-washi/40" aria-hidden="true">
            •
          </span>
          <span className="font-sans font-semibold uppercase tracking-[0.22em] text-washi/75">
            Начни сегодня
          </span>
        </motion.span>

        {/* Крупный заголовок */}
        <motion.h2
          variants={scaleIn}
          className="mt-7 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-washi sm:text-5xl lg:text-[4rem]"
        >
          Начни свой путь к{' '}
          <span className="shimmer-text">японскому</span>
          <br className="hidden sm:block" /> уже сегодня
        </motion.h2>

        {/* Подзаголовок */}
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base leading-relaxed text-washi/70 sm:text-lg"
        >
          Первый урок — бесплатно. Никаких обязательств, только живой японский
          и удовольствие от учёбы.
        </motion.p>

        {/* Главная кнопка */}
        <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="relative"
          >
            {/* Пульсирующее кольцо вокруг кнопки */}
            <span
              className="pointer-events-none absolute -inset-3 rounded-full bg-shu/30 blur-2xl animate-sun-pulse"
              aria-hidden="true"
            />
            <Button href="#consult" size="lg" className="relative shadow-glow">
              Записаться на бесплатный урок
            </Button>
          </motion.div>

          {/* Микро-доверие под кнопкой */}
          <motion.p
            variants={fadeIn}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-washi/45 sm:text-sm"
          >
            <span className="inline-flex items-center gap-1.5">
              <Dot /> Без карты и предоплаты
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Dot /> Ответим в течение дня
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Dot /> Удобное время урока
            </span>
          </motion.p>
        </motion.div>

        {/* Нижняя печать-каллиграфия */}
        <Reveal variant="up" delay={0.3} className="mt-14">
          <span className="font-brush text-base tracking-wide text-washi/35 sm:text-lg">
            桜 · добро пожаловать в «Сакуру»
          </span>
        </Reveal>
      </motion.div>
    </section>
  )
}

function Dot() {
  return (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full bg-kin/70"
      aria-hidden="true"
    />
  )
}
