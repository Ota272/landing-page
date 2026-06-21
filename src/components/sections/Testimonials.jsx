import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import SakuraPetals from '../ui/SakuraPetals'
import { Seigaiha, SakuraBranch, EnsoCircle, Crane } from '../ui/decor'
import { EASE } from '../../lib/variants'

const REVIEWS = [
  {
    name: 'Алина',
    course: 'Курс с нуля · N5',
    avatarImg: 5,
    rating: 5,
    text: 'Пришла, не зная ни одной хираганы, а через три месяца уже читаю простые тексты и заказываю еду в любимой идзакая 🌸 Преподаватели объясняют так, что кандзи перестают пугать.',
  },
  {
    name: 'Дмитрий',
    course: 'Подготовка к JLPT N3',
    avatarImg: 12,
    rating: 5,
    text: 'Готовился к N3 с нуля по грамматике — структура курса идеальная. Пробные экзамены, разбор ошибок, поддержка куратора. Сдал с первого раза, баллы выше ожиданий!',
  },
  {
    name: 'Марина',
    course: 'Разговорный клуб',
    avatarImg: 47,
    rating: 5,
    text: 'Разговорный клуб — это то, ради чего стоит вставать пораньше 🌸 Живые носители, тёплая атмосфера, никакого страха ошибиться. Наконец-то заговорила по-настоящему.',
  },
  {
    name: 'Игорь',
    course: 'Индивидуальные занятия',
    avatarImg: 33,
    rating: 5,
    text: 'Индивидуальный темп — моё спасение при плотном графике. Программу собрали под мои цели: командировки в Осаку. Через полгода веду переговоры почти без переводчика.',
  },
  {
    name: 'Екатерина',
    course: 'Японский для аниме',
    avatarImg: 24,
    rating: 5,
    text: 'Смотрю любимые тайтлы без субтитров и ловлю все шутки 🌸 На курсе разбирают живую речь из аниме — теперь понимаю и сленг, и вежливые формы. Юме га канатта!',
  },
  {
    name: 'Сергей',
    course: 'Бизнес-японский',
    avatarImg: 60,
    rating: 5,
    text: 'Кэйго казался непостижимым, пока не попал сюда. Деловая переписка, этикет встреч, нюансы вежливости — всё разложили по полочкам. Японские партнёры заметили разницу.',
  },
]

const AUTOPLAY_MS = 6000

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Оценка ${count} из 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${i < count ? 'text-kin' : 'text-sumi/15'}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.66l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="card-washi group relative flex h-full flex-col gap-5 overflow-hidden p-7 sm:p-8"
    >
      {/* Декоративный штамп-сакура в углу */}
      <span className="pointer-events-none absolute -right-4 -top-4 flex h-20 w-20 rotate-12 items-center justify-center rounded-full border-2 border-shu/30 font-jp text-2xl text-shu/30 transition-transform duration-500 group-hover:rotate-[24deg] group-hover:scale-110">
        桜
      </span>

      {/* Большая кавычка */}
      <span className="pointer-events-none absolute right-6 top-2 font-display text-7xl leading-none text-sakura-soft/70 select-none">
        “
      </span>

      <div className="relative flex items-center gap-4">
        <div className="relative">
          <span className="absolute inset-0 -m-1 rounded-full bg-gradient-to-br from-sakura via-shu/40 to-kin opacity-70 blur-[2px]" />
          <img
            src={`https://i.pravatar.cc/120?img=${review.avatarImg}`}
            alt={review.name}
            loading="lazy"
            className="relative h-14 w-14 rounded-full border-2 border-white object-cover shadow-soft"
          />
        </div>
        <div className="min-w-0">
          <p className="font-display text-lg font-bold leading-tight text-sumi">
            {review.name}
          </p>
          <span className="mt-1 inline-flex max-w-full items-center gap-1.5 truncate rounded-full bg-sakura-soft/60 px-3 py-1 font-jp text-[11px] font-semibold tracking-wide text-shu-dark">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-shu" />
            <span className="truncate">{review.course}</span>
          </span>
        </div>
      </div>

      <Stars count={review.rating} />

      <p className="relative text-[15px] leading-relaxed text-sumi-soft">
        {review.text}
      </p>

      <div className="mt-auto flex items-center gap-2 pt-2">
        <span className="h-px flex-1 bg-gradient-to-r from-shu/30 to-transparent" />
        <span className="font-jp text-xs tracking-widest text-shu/60">桜 · Сакура</span>
      </div>
    </motion.article>
  )
}

const pageVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
}

function chunk(arr, size) {
  const out = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

function ArrowButton({ direction, onClick, label }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="group relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-sumi/10 bg-white/80 text-sumi shadow-soft backdrop-blur transition-colors duration-300 hover:border-shu/60 hover:text-shu"
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-shu/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <svg
        className="relative h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: direction === 'prev' ? 'scaleX(-1)' : undefined }}
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </motion.button>
  )
}

export default function Testimonials() {
  const [perView, setPerView] = useState(1)
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  // Адаптивное количество карточек на странице: 1 — мобайл, 3 — десктоп.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const compute = () => {
      const w = window.innerWidth
      setPerView(w >= 1024 ? 3 : 1)
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  const pages = chunk(REVIEWS, perView)
  const pageCount = pages.length

  // Если число страниц изменилось (resize) — не выходим за границы.
  useEffect(() => {
    setPage((p) => (p >= pageCount ? 0 : p))
  }, [pageCount])

  const goTo = useCallback(
    (next) => {
      setDirection(next > page ? 1 : -1)
      setPage(((next % pageCount) + pageCount) % pageCount)
    },
    [page, pageCount]
  )

  const paginate = useCallback(
    (dir) => {
      setDirection(dir)
      setPage((p) => ((p + dir) % pageCount + pageCount) % pageCount)
    },
    [pageCount]
  )

  // Авто-прокрутка с очисткой и паузой по наведению.
  useEffect(() => {
    if (paused || pageCount <= 1) return
    const id = setInterval(() => {
      setDirection(1)
      setPage((p) => (p + 1) % pageCount)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, pageCount])

  const safePage = Math.min(page, pageCount - 1)
  const current = pages[safePage] || []

  return (
    <Section id="reviews" className="overflow-hidden bg-washi-100">
      {/* Декор фона */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <Seigaiha className="absolute inset-0 h-full w-full" color="#E0483D" opacity={0.06} />
        <EnsoCircle className="absolute -left-16 top-10 h-64 w-64 text-ai/10 animate-spin-slow" />
        <SakuraBranch className="absolute right-0 top-4 w-72 opacity-30 animate-sway sm:w-96" />
        <Crane className="absolute bottom-8 left-6 h-24 w-24 text-shu/10 animate-float-slow" />
        <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-sakura/20 blur-3xl" />
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-matcha/15 blur-3xl" />
      </div>

      <SakuraPetals count={12} className="pointer-events-none absolute inset-0 -z-10 opacity-60" />

      <SectionTitle
        kanji="声"
        kicker="Отзывы"
        title={<>О нас <span className="text-gradient-shu">говорят</span></>}
        subtitle="Сотни учеников уже идут своим путём к японскому. Вот несколько живых историй из нашей школы."
        align="center"
      />

      <Reveal variant="up" delay={0.1} className="mt-14">
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Трек слайдов */}
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={safePage}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: EASE }}
                className="grid grid-cols-1 gap-6 lg:grid-cols-3"
              >
                {current.map((review) => (
                  <ReviewCard key={review.name} review={review} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Управление: стрелки + точки */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <ArrowButton direction="prev" label="Предыдущий отзыв" onClick={() => paginate(-1)} />

            <div className="flex items-center gap-2.5" role="tablist" aria-label="Навигация по отзывам">
              {pages.map((_, i) => {
                const active = i === safePage
                return (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-label={`Показать отзывы, страница ${i + 1}`}
                    onClick={() => goTo(i)}
                    className="group relative flex h-3 items-center"
                  >
                    <span
                      className={`block h-2.5 rounded-full transition-all duration-300 ${
                        active
                          ? 'w-8 bg-shu shadow-glow'
                          : 'w-2.5 bg-sumi/20 group-hover:bg-shu/50'
                      }`}
                    />
                  </button>
                )
              })}
            </div>

            <ArrowButton direction="next" label="Следующий отзыв" onClick={() => paginate(1)} />
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
