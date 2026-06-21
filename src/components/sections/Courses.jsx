import { motion } from 'framer-motion'

import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import SakuraPetals from '../ui/SakuraPetals'
import { Seigaiha, SakuraBranch, EnsoCircle, Crane } from '../ui/decor'
import { fadeUp, stagger, inView } from '../../lib/variants'

const COURSES = [
  {
    kanji: '個',
    title: 'Индивидуальные занятия',
    description:
      'Персональная программа в твоём темпе. Идеально, если нужен быстрый и заметный результат.',
    features: [
      'Первый урок бесплатно',
      'Гибкий график',
      'Программа под твою цель',
    ],
    price: 'от 1500 ₽ / урок',
    bg: 'bg-sakura-soft',
    accent: 'text-sakura-deep',
    watermark: 'text-shu',
  },
  {
    kanji: '話',
    title: 'Разговорный клуб',
    description:
      'Преодолей языковой барьер и заговори свободно в мини-группе с носителем.',
    features: [
      'Группа до 5 человек',
      'Живая практика и сленг',
      'Пробное занятие 500 ₽',
    ],
    price: 'от 700 ₽ / занятие',
    bg: 'bg-matcha-light/40',
    accent: 'text-matcha-deep',
    watermark: 'text-matcha-deep',
  },
  {
    kanji: '試',
    title: 'Подготовка к JLPT',
    description:
      'Системная подготовка к экзамену с N5 до N1. Пробные тесты и разбор ошибок.',
    features: ['Уровни N5–N1', 'Пробные экзамены', 'Гарантия результата'],
    price: 'от 1200 ₽ / урок',
    bg: 'bg-ai-light/15',
    accent: 'text-ai-deep',
    watermark: 'text-ai',
  },
  {
    kanji: '心',
    title: 'Японский для аниме',
    description:
      'Понимай аниме и дорамы без субтитров, читай мангу в оригинале.',
    features: [
      'Разбор по аниме и манге',
      'Современный сленг',
      'Погружение в культуру',
    ],
    price: 'от 900 ₽ / урок',
    bg: 'bg-kin-light/25',
    accent: 'text-kin',
    watermark: 'text-kin',
  },
]

function CheckIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function CourseCard({ course }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-4xl border border-sumi/5 p-7 shadow-soft transition-shadow duration-500 hover:shadow-card sm:p-8 ${course.bg}`}
    >
      {/* Крупный бледный кандзи-водяной знак, проявляется при hover */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-10 -right-6 select-none font-jp text-[12rem] font-bold leading-none opacity-0 transition-all duration-700 group-hover:opacity-[0.07] sm:text-[14rem] ${course.watermark}`}
      >
        {course.kanji}
      </span>

      {/* Кандзи-штамп в углу */}
      <div className="relative z-10 flex items-start justify-between">
        <span className="hanko h-14 w-14 text-2xl leading-none">
          {course.kanji}
        </span>
      </div>

      <h3 className="relative z-10 mt-6 font-display text-xl font-extrabold leading-tight tracking-tight text-sumi sm:text-2xl">
        {course.title}
      </h3>

      <p className="relative z-10 mt-3 text-sm leading-relaxed text-sumi-soft">
        {course.description}
      </p>

      <ul className="relative z-10 mt-6 flex flex-col gap-3">
        {course.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm font-medium text-sumi"
          >
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/70 text-shu shadow-sm">
              <CheckIcon className="h-3 w-3" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="relative z-10 mt-auto pt-7">
        <div className="mb-5 flex items-baseline gap-2 border-t border-sumi/10 pt-5">
          <span className="font-jp text-xs uppercase tracking-[0.2em] text-sumi-muted">
            Стоимость
          </span>
          <span className={`font-display text-base font-bold ${course.accent}`}>
            {course.price}
          </span>
        </div>
        <Button
          href="#consult"
          variant="outline"
          size="md"
          className="w-full"
        >
          Подробнее
        </Button>
      </div>
    </motion.article>
  )
}

export default function Courses() {
  return (
    <Section id="courses" className="grain overflow-hidden bg-washi-50">
      {/* Декоративный фон секции */}
      <Seigaiha
        className="pointer-events-none absolute inset-0 -z-10"
        color="#E0483D"
        opacity={0.05}
      />
      <SakuraPetals count={12} className="-z-10 opacity-60" />
      <SakuraBranch className="pointer-events-none absolute -left-16 top-10 -z-10 hidden w-72 rotate-6 opacity-25 lg:block" />
      <EnsoCircle className="pointer-events-none absolute -right-10 top-24 -z-10 hidden w-48 text-ai/10 lg:block" />
      <Crane className="pointer-events-none absolute bottom-16 right-12 -z-10 hidden w-28 text-shu/10 animate-float-slow xl:block" />

      <SectionTitle
        align="center"
        kanji="習"
        kicker="Виды обучения"
        title={
          <>
            Выбери свой <span className="text-gradient-shu">формат</span>
          </>
        }
        subtitle="Разные форматы под любую цель — от персональных занятий до подготовки к экзамену и погружения в мир аниме. Найди подходящий ритм и начни говорить по-японски."
        className="mb-14 sm:mb-16"
      />

      <motion.div
        variants={stagger(0.14)}
        {...inView}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        {COURSES.map((course) => (
          <CourseCard key={course.kanji} course={course} />
        ))}
      </motion.div>
    </Section>
  )
}
