import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '../ui/Button'
import SakuraPetals from '../ui/SakuraPetals'
import { SunBurst, Fuji, Torii, Lantern, SakuraBranch, Crane, Koi, Seigaiha, WaveDivider } from '../ui/decor'
import { fadeUp, scaleIn, stagger, EASE } from '../../lib/variants'

const TRUST = [
  { icon: '★', label: '4.9 — средняя оценка' },
  { icon: '🎓', label: '4500+ учеников' },
  { icon: '🗾', label: 'Преподаватели-носители' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Параллакс: разные слои движутся с разной скоростью
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const sunRot = useTransform(scrollYProgress, [0, 1], [0, 28])
  const fujiY = useTransform(scrollYProgress, [0, 1], [0, -40])
  const lanternY = useTransform(scrollYProgress, [0, 1], [0, 180])
  const branchY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 70])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative isolate min-h-screen overflow-hidden bg-washi pt-28 pb-32 sm:pt-32 lg:pb-40 grain"
    >
      {/* ===== ФОНОВЫЙ ДЕКОР ===== */}
      {/* Восходящее солнце — правый верхний угол */}
      <motion.div
        style={{ y: sunY, rotate: sunRot }}
        className="pointer-events-none absolute -right-24 -top-24 z-0 h-[420px] w-[420px] opacity-80 sm:h-[520px] sm:w-[520px] lg:-right-32 lg:-top-32"
      >
        <SunBurst className="h-full w-full animate-sun-pulse" />
      </motion.div>

      {/* Силуэт Фудзи по нижнему краю */}
      <motion.div
        style={{ y: fujiY }}
        className="pointer-events-none absolute inset-x-0 bottom-16 z-0 flex justify-center text-ai/20 sm:bottom-20 lg:bottom-24"
      >
        <Fuji className="h-[160px] w-[640px] sm:h-[200px] sm:w-[820px] lg:h-[240px] lg:w-[1000px]" />
      </motion.div>

      {/* Плавающие фонарики */}
      <motion.div
        style={{ y: lanternY }}
        className="pointer-events-none absolute left-6 top-40 z-0 hidden sm:block"
      >
        <Lantern className="h-28 w-auto animate-float drop-shadow-[0_12px_24px_rgba(224,72,61,0.25)]" />
      </motion.div>
      <motion.div
        style={{ y: lanternY }}
        className="pointer-events-none absolute left-1/3 top-24 z-0 hidden opacity-90 lg:block"
      >
        <Lantern className="h-20 w-auto animate-sway drop-shadow-[0_10px_20px_rgba(224,72,61,0.2)]" />
      </motion.div>

      {/* Ветка сакуры в верхнем левом углу */}
      <motion.div
        style={{ y: branchY }}
        className="pointer-events-none absolute -left-10 top-20 z-0 opacity-90 sm:top-24 lg:-left-6"
      >
        <SakuraBranch className="h-auto w-[300px] animate-sway sm:w-[380px] lg:w-[440px]" />
      </motion.div>

      {/* Журавль вдали */}
      <div className="pointer-events-none absolute right-1/4 top-32 z-0 hidden text-ai/15 lg:block">
        <Crane className="h-16 w-16 animate-float-slow" />
      </div>

      {/* Лепестки сакуры поверх */}
      <SakuraPetals count={18} className="z-10" />

      {/* Полоса волн сэйгайха внизу */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32">
        <Seigaiha className="h-full w-full" color="#1F3A5F" opacity={0.16} />
      </div>

      {/* ===== КОНТЕНТ ===== */}
      <div className="container-x relative z-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Левая колонка — текст */}
          <motion.div
            style={{ y: contentY }}
            variants={stagger(0.14, 0.1)}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            {/* Кикер-бейдж */}
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sumi-soft shadow-soft backdrop-blur"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shu opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-shu" />
              </span>
              <span className="font-jp">日本語</span>
              <span className="text-sumi-muted">— онлайн-школа «Сакура»</span>
            </motion.span>

            {/* Заголовок */}
            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-sumi sm:text-6xl lg:text-7xl"
            >
              Заговори{' '}
              <span className="text-gradient-shu">по-японски</span>
              <span className="mt-2 block">
                уже через <span className="highlight-kin">3&nbsp;месяца</span>
              </span>
            </motion.h1>

            {/* Подзаголовок */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-base leading-relaxed text-sumi-soft sm:text-lg"
            >
              Индивидуальные занятия, разговорный клуб и подготовка к JLPT с
              преподавателями-носителями. Учись в удовольствие — от первых
              иероглифов до свободной речи.
            </motion.p>

            {/* Кнопки */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href="#consult" size="lg">
                Бесплатный первый урок
              </Button>
              <Button href="#courses" variant="outline" size="lg">
                Виды обучения
              </Button>
            </motion.div>

            {/* Трастовые чипы */}
            <motion.ul
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              {TRUST.map((t) => (
                <li
                  key={t.label}
                  className="inline-flex items-center gap-2 text-sm font-medium text-sumi-soft"
                >
                  <span className="text-shu">{t.icon}</span>
                  <span>{t.label}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Правая колонка — иллюстрированная японская сцена */}
          <motion.div
            style={{ y: sceneY }}
            variants={scaleIn}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
            className="relative mx-auto w-full max-w-[460px]"
          >
            {/* Круглая арка-композиция */}
            <div className="relative aspect-square w-full">
              {/* Внешнее кольцо-рамка */}
              <div className="absolute inset-0 rounded-full border border-sumi/10 bg-gradient-to-b from-washi-50 to-sakura-soft/50 shadow-card" />
              <div className="absolute inset-3 overflow-hidden rounded-full border border-white/60 bg-gradient-to-b from-sky-50/80 via-sakura-soft/40 to-matcha-light/40 backdrop-blur-sm">
                {/* Солнце внутри сцены */}
                <div className="absolute left-1/2 top-[14%] h-40 w-40 -translate-x-1/2">
                  <SunBurst className="h-full w-full animate-sun-pulse" />
                </div>

                {/* Журавль */}
                <Crane className="absolute right-[16%] top-[20%] h-12 w-12 animate-float text-ai/60" />

                {/* Фудзи на дне сцены */}
                <div className="absolute inset-x-0 bottom-[26%] flex justify-center text-ai/70">
                  <Fuji className="h-auto w-[78%]" />
                </div>

                {/* Тории на переднем плане */}
                <Torii className="absolute bottom-[24%] left-1/2 h-24 w-24 -translate-x-1/2 text-shu drop-shadow-[0_6px_10px_rgba(193,51,39,0.35)]" />

                {/* Фонарики в сцене */}
                <Lantern className="absolute left-[14%] top-[30%] h-20 w-auto animate-sway" />
                <Lantern className="absolute right-[14%] top-[34%] h-16 w-auto animate-float" />

                {/* Волны внизу */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 overflow-hidden">
                  <Seigaiha className="h-full w-full" color="#1F3A5F" opacity={0.22} />
                </div>
                <WaveDivider
                  className="absolute inset-x-0 bottom-[28%] h-10 w-full"
                  color="#FAF5EC"
                />

                {/* Карп кои в волнах */}
                <Koi className="absolute bottom-[10%] left-[20%] h-10 w-auto animate-float-slow" />

                {/* Ветка сакуры сверху */}
                <SakuraBranch className="absolute -left-2 top-0 h-auto w-[55%] animate-sway" />
              </div>
            </div>

            {/* Плавающий бейдж «Первый урок — бесплатно» */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.8 }}
              className="absolute -bottom-4 -left-2 z-30 animate-float sm:-left-6"
            >
              <div className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-card backdrop-blur">
                <span className="hanko grid h-11 w-11 place-items-center rounded-xl bg-shu text-lg font-bold text-white">
                  無
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-sumi">Первый урок</p>
                  <p className="text-xs font-medium text-shu">бесплатно</p>
                </div>
              </div>
            </motion.div>

            {/* Плавающий бейдж JLPT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: EASE, delay: 1 }}
              className="absolute -right-1 top-6 z-30 hidden animate-float-slow sm:block"
            >
              <div className="rounded-2xl bg-sumi/90 px-4 py-3 text-center shadow-card backdrop-blur">
                <p className="font-display text-lg font-bold text-kin">JLPT</p>
                <p className="text-[10px] uppercase tracking-widest text-washi-200">
                  N5 — N1
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Нижний волнообразный разделитель к следующей секции */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
        <WaveDivider className="h-16 w-full sm:h-20 lg:h-24" color="#FAF5EC" />
      </div>
    </section>
  )
}