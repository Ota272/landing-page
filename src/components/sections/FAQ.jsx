import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import SakuraPetals from '../ui/SakuraPetals'
import { EnsoCircle, SakuraBranch, Seigaiha, Crane } from '../ui/decor'
import { fadeUp, stagger, inView, EASE } from '../../lib/variants'

const ITEMS = [
  {
    q: 'Нужна ли база для начала?',
    a: 'Нет. Большинство наших учеников начинают с полного нуля — мы научим читать хирагану и катакану уже на первых занятиях.',
  },
  {
    q: 'Сколько занятий в неделю оптимально?',
    a: 'Рекомендуем 2–3 занятия в неделю — это даёт устойчивый прогресс без перегруза. Но темп всегда подстраиваем под тебя.',
  },
  {
    q: 'Кто преподаватели?',
    a: 'Носители языка и сертифицированные специалисты с JLPT N1 и опытом жизни в Японии. Каждый проходит наш внутренний отбор.',
  },
  {
    q: 'Что если я пропущу урок?',
    a: 'Перенесём занятие без потери оплаты, пришлём запись и материалы. Ничего не потеряется.',
  },
  {
    q: 'Как проходят онлайн-занятия?',
    a: 'В Zoom или Google Meet с интерактивной доской, материалами и домашними заданиями в личном кабинете.',
  },
  {
    q: 'Помогаете ли подготовиться к JLPT?',
    a: 'Да! Отдельная программа N5–N1 с пробными экзаменами, разбором ошибок и стратегией на каждый раздел.',
  },
]

function PlusIcon({ open }) {
  return (
    <span className="relative grid h-9 w-9 shrink-0 place-items-center">
      <motion.span
        aria-hidden="true"
        className={`absolute h-0.5 w-4 rounded-full transition-colors duration-300 ${
          open ? 'bg-white' : 'bg-shu'
        }`}
        animate={{ rotate: open ? 90 : 0 }}
        transition={{ duration: 0.35, ease: EASE }}
      />
      <motion.span
        aria-hidden="true"
        className={`absolute h-0.5 w-4 rounded-full transition-colors duration-300 ${
          open ? 'bg-white' : 'bg-shu'
        }`}
        animate={{ rotate: open ? 180 : 90 }}
        transition={{ duration: 0.35, ease: EASE }}
      />
    </span>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i))

  return (
    <Section id="faq" className="overflow-hidden bg-washi-100">
      {/* Декор на фоне */}
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden="true">
        <Seigaiha className="absolute inset-x-0 bottom-0 h-40 w-full" color="#3B4A7A" opacity={0.1} />
        <EnsoCircle className="absolute -left-20 top-16 h-72 w-72 text-shu/10 animate-spin-slow" />
        <EnsoCircle className="absolute -right-24 bottom-24 h-64 w-64 text-ai/10 animate-spin-rev" />
        <SakuraBranch className="absolute -right-10 top-6 w-64 opacity-25 animate-sway" />
        <Crane className="absolute left-6 bottom-10 hidden w-28 text-sakura-deep/15 animate-float-slow sm:block" />
      </div>

      <SakuraPetals count={9} className="pointer-events-none absolute inset-0 -z-0 opacity-60" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <SectionTitle
          kanji="問"
          kicker="Вопросы и ответы"
          title={
            <>
              Частые <span className="text-gradient-shu">вопросы</span>
            </>
          }
          align="center"
        />

        <motion.div
          {...inView}
          variants={stagger(0.1)}
          className="mt-14 flex flex-col gap-4"
        >
          {ITEMS.map((item, i) => {
            const open = openIndex === i
            return (
              <motion.div
                key={item.q}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-4xl border bg-white/70 backdrop-blur transition-all duration-300 ${
                  open
                    ? 'border-shu/50 shadow-glow ring-1 ring-shu/20'
                    : 'border-sumi/10 shadow-soft hover:border-shu/30'
                }`}
              >
                {open && (
                  <motion.span
                    layoutId="faq-accent"
                    className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-shu via-shu-light to-sakura-deep"
                    aria-hidden="true"
                  />
                )}

                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span
                    className={`hidden h-11 w-11 shrink-0 place-items-center rounded-full font-jp text-base font-bold transition-colors duration-300 sm:grid ${
                      open
                        ? 'bg-shu text-white shadow-glow-sakura'
                        : 'bg-washi-200 text-shu group-hover:bg-sakura-soft'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <h3
                    className={`flex-1 font-display text-lg font-bold leading-snug tracking-tight transition-colors duration-300 sm:text-xl ${
                      open ? 'text-shu' : 'text-sumi group-hover:text-shu-dark'
                    }`}
                  >
                    {item.q}
                  </h3>

                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                      open ? 'bg-shu' : 'bg-washi-200 group-hover:bg-sakura-soft'
                    }`}
                  >
                    <PlusIcon open={open} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.45, ease: EASE },
                        opacity: { duration: 0.3, ease: EASE },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pl-5 sm:px-7 sm:pb-7 sm:pl-[5.75rem]">
                        <div className="mb-4 h-px w-full bg-gradient-to-r from-shu/30 via-sumi/10 to-transparent" />
                        <p className="text-base leading-relaxed text-sumi-soft">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Призыв задать свой вопрос */}
        <Reveal variant="up" delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-5xl border border-ai-light/40 bg-ai-deep px-7 py-9 text-center sm:px-12 sm:py-11">
            <SakuraBranch className="pointer-events-none absolute -right-8 -top-6 w-48 opacity-20" aria-hidden="true" />
            <p className="font-jp text-sm font-bold uppercase tracking-[0.25em] text-kin">
              まだ質問が？
            </p>
            <h3 className="mx-auto mt-3 max-w-xl font-display text-2xl font-extrabold leading-tight tracking-tight text-washi sm:text-3xl">
              Остался вопрос без ответа?
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-washi-200/80 sm:text-base">
              Запишись на бесплатную консультацию — расскажем о программах,
              подберём преподавателя и составим твой маршрут к свободному японскому.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#consult" variant="primary" size="lg">
                Задать свой вопрос
              </Button>
              <Button href="#courses" variant="outline" size="lg" icon={false}>
                Посмотреть курсы
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
