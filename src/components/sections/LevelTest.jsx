import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { EnsoCircle, SakuraBranch, Crane, Seigaiha } from '../ui/decor'
import SakuraPetals from '../ui/SakuraPetals'
import { fadeUp, stagger, inView, EASE } from '../../lib/variants'

const OPTIONS = [
  { jp: 'ありがとう', romaji: 'arigatō', correct: true },
  { jp: 'こんにちは', romaji: 'konnichiwa', correct: false },
  { jp: 'さようなら', romaji: 'sayōnara', correct: false },
  { jp: 'おはよう', romaji: 'ohayō', correct: false },
]

function CheckIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

function CrossIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export default function LevelTest() {
  const [selected, setSelected] = useState(null)
  const answered = selected !== null
  const isRight = answered && OPTIONS[selected].correct

  const handleSelect = (i) => {
    if (answered) return
    setSelected(i)
  }

  const reset = () => setSelected(null)

  return (
    <section id="consult" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <Reveal variant="up" amount={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="grain relative overflow-hidden rounded-5xl bg-gradient-to-br from-matcha-light via-matcha-light to-matcha/30 px-6 py-12 shadow-card sm:px-10 sm:py-16 lg:px-16"
          >
            {/* Декоративный фон */}
            <Seigaiha
              className="pointer-events-none absolute inset-0 h-full w-full"
              color="#3F7A4F"
              opacity={0.16}
            />

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 text-matcha-deep/25 sm:-right-10"
              animate={{ rotate: [0, 6, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            >
              <EnsoCircle className="h-64 w-64 sm:h-80 sm:w-80" />
            </motion.div>

            <div className="pointer-events-none absolute -bottom-10 -left-12 text-matcha-deep/20">
              <EnsoCircle className="h-40 w-40 animate-spin-slow" />
            </div>

            <SakuraBranch className="pointer-events-none absolute -left-6 top-2 hidden w-56 opacity-40 animate-sway sm:block lg:w-72" />

            <Crane className="pointer-events-none absolute right-6 bottom-6 hidden w-24 text-matcha-deep/30 animate-float sm:block lg:right-16" />

            <SakuraPetals
              count={10}
              className="pointer-events-none absolute inset-0"
            />

            {/* Контент */}
            <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Левая колонка — текст */}
              <motion.div
                variants={stagger(0.12, 0.05)}
                {...inView}
                className="flex flex-col items-start gap-5"
              >
                <motion.span
                  variants={fadeUp}
                  className="inline-flex items-center gap-3"
                >
                  <span className="hanko h-9 w-9 text-lg leading-none">測</span>
                  <span className="font-jp text-sm font-bold uppercase tracking-[0.25em] text-matcha-deep">
                    Тест уровня
                  </span>
                </motion.span>

                <motion.h2
                  variants={fadeUp}
                  className="max-w-xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-sumi sm:text-5xl"
                >
                  Не знаешь, с чего начать?{' '}
                  <span className="text-gradient-shu">Узнай свой уровень</span>
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="max-w-lg text-base leading-relaxed text-sumi-soft sm:text-lg"
                >
                  Пройди бесплатный тест из 10 вопросов — за 3 минуты определим
                  твой уровень от{' '}
                  <span className="font-jp font-semibold text-matcha-deep">
                    N5
                  </span>{' '}
                  до{' '}
                  <span className="font-jp font-semibold text-matcha-deep">
                    N1
                  </span>{' '}
                  и подберём программу.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="flex flex-wrap items-center gap-4 pt-1"
                >
                  <Button href="#consult" variant="primary" size="lg">
                    Пройти тест
                  </Button>
                  <span className="font-jp text-sm text-sumi-muted">
                    3 минуты · бесплатно
                  </span>
                </motion.div>
              </motion.div>

              {/* Правая колонка — интерактивный тизер */}
              <Reveal variant="scale" amount={0.2}>
                <div className="card-washi relative overflow-hidden rounded-4xl border border-matcha/20 p-6 shadow-soft sm:p-8">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-3 -top-4 select-none font-brush text-[7rem] leading-none text-matcha/10"
                  >
                    問
                  </span>

                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span className="font-jp text-xs font-bold uppercase tracking-[0.22em] text-matcha-deep">
                        Вопрос · 問
                      </span>
                      <span className="rounded-full bg-matcha/15 px-3 py-1 text-xs font-semibold text-matcha-deep">
                        1 / 10
                      </span>
                    </div>

                    <h3 className="mb-6 text-xl font-bold leading-snug text-sumi sm:text-2xl">
                      Как сказать «спасибо» по-японски?
                    </h3>

                    <div className="grid gap-3">
                      {OPTIONS.map((opt, i) => {
                        const isPicked = selected === i
                        const showCorrect = answered && opt.correct
                        const showWrong = answered && isPicked && !opt.correct

                        let stateClass =
                          'border-sumi/10 bg-white/70 text-sumi hover:border-matcha/60 hover:bg-matcha-light/60'
                        if (showCorrect) {
                          stateClass =
                            'border-matcha bg-matcha/15 text-matcha-deep shadow-soft'
                        } else if (showWrong) {
                          stateClass =
                            'border-shu bg-shu/10 text-shu-dark'
                        } else if (answered) {
                          stateClass =
                            'border-sumi/10 bg-white/40 text-sumi-muted opacity-70'
                        }

                        return (
                          <motion.button
                            key={opt.jp}
                            type="button"
                            onClick={() => handleSelect(i)}
                            disabled={answered}
                            whileHover={answered ? undefined : { y: -2 }}
                            whileTap={answered ? undefined : { scale: 0.98 }}
                            transition={{
                              type: 'spring',
                              stiffness: 400,
                              damping: 22,
                            }}
                            className={`flex items-center justify-between gap-3 rounded-2xl border-2 px-5 py-4 text-left font-jp text-lg font-semibold transition-colors duration-300 ${stateClass} ${
                              answered ? 'cursor-default' : 'cursor-pointer'
                            }`}
                          >
                            <span>{opt.jp}</span>
                            <AnimatePresence>
                              {showCorrect && (
                                <motion.span
                                  key="ok"
                                  initial={{ scale: 0, rotate: -30 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  exit={{ scale: 0 }}
                                  transition={{
                                    type: 'spring',
                                    stiffness: 500,
                                    damping: 18,
                                  }}
                                  className="flex h-6 w-6 items-center justify-center rounded-full bg-matcha text-white"
                                >
                                  <CheckIcon className="h-4 w-4" />
                                </motion.span>
                              )}
                              {showWrong && (
                                <motion.span
                                  key="no"
                                  initial={{ scale: 0, rotate: 30 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  exit={{ scale: 0 }}
                                  transition={{
                                    type: 'spring',
                                    stiffness: 500,
                                    damping: 18,
                                  }}
                                  className="flex h-6 w-6 items-center justify-center rounded-full bg-shu text-white"
                                >
                                  <CrossIcon className="h-4 w-4" />
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </motion.button>
                        )
                      })}
                    </div>

                    <AnimatePresence mode="wait">
                      {answered && (
                        <motion.div
                          key={isRight ? 'right' : 'wrong'}
                          initial={{ opacity: 0, y: 12, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -8, height: 0 }}
                          transition={{ duration: 0.45, ease: EASE }}
                          className="mt-5 overflow-hidden"
                        >
                          <div
                            className={`rounded-2xl border px-4 py-3 text-sm leading-relaxed ${
                              isRight
                                ? 'border-matcha/30 bg-matcha/10 text-matcha-deep'
                                : 'border-shu/30 bg-shu/10 text-shu-dark'
                            }`}
                          >
                            {isRight ? (
                              <>
                                Верно!{' '}
                                <span className="font-jp font-semibold">
                                  ありがとう
                                </span>{' '}
                                (arigatō) — спасибо 🌸
                              </>
                            ) : (
                              <>
                                Почти! Правильный ответ —{' '}
                                <span className="font-jp font-semibold">
                                  ありがとう
                                </span>
                                .
                              </>
                            )}
                          </div>

                          <div className="mt-4 flex flex-wrap items-center gap-3">
                            <Button href="#consult" variant="ink" size="md">
                              Продолжить тест
                            </Button>
                            <button
                              type="button"
                              onClick={reset}
                              className="text-sm font-semibold text-sumi-muted underline-offset-4 transition-colors hover:text-matcha-deep hover:underline"
                            >
                              Сбросить
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!answered && (
                      <p className="mt-5 text-center font-jp text-xs text-sumi-muted">
                        Выбери вариант — это лишь разминка
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
