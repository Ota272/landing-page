import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import Counter from '../ui/Counter'
import { Seigaiha, SakuraBranch, EnsoCircle } from '../ui/decor'
import { stagger, fadeUp, inView, EASE } from '../../lib/variants'

const PLANS = [
  {
    name: 'Старт',
    kanji: '初',
    price: 4900,
    desc: 'Для первого знакомства с японским',
    features: [
      '4 групповых занятия / мес',
      'Доступ к материалам',
      'Чат с куратором',
      'Разговорный клуб 1×/нед',
    ],
    variant: 'outline',
    featured: false,
  },
  {
    name: 'Стандарт',
    kanji: '進',
    price: 8900,
    desc: 'Оптимально для уверенного прогресса',
    features: [
      '8 занятий / мес',
      'Индивидуальная программа',
      'Проверка домашних заданий',
      'Разговорный клуб без ограничений',
      'Доступ к библиотеке',
    ],
    variant: 'primary',
    featured: true,
  },
  {
    name: 'Премиум',
    kanji: '極',
    price: 14900,
    desc: 'Максимальный результат с личным куратором',
    features: [
      '12 занятий / мес',
      '2 индивидуальных урока / нед',
      'Личный куратор 24/7',
      'Подготовка к JLPT',
      'Сертификат школы',
    ],
    variant: 'ink',
    featured: false,
  },
]

function CheckMark() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-shu/10 text-shu">
      <svg
        className="h-3 w-3"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    </span>
  )
}

function PlanCard({ plan }) {
  const { name, kanji, price, desc, features, variant, featured } = plan

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className={`group relative flex flex-col rounded-5xl p-7 sm:p-8 ${
        featured
          ? 'z-10 border-2 border-shu bg-white shadow-glow lg:-mt-6 lg:mb-0 lg:scale-[1.04]'
          : 'border border-sumi/10 bg-white/70 shadow-card backdrop-blur'
      }`}
    >
      {/* Бейдж «Хит продаж» */}
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="hanko rounded-full bg-shu px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-glow">
            Хит продаж
          </span>
        </div>
      )}

      {/* Декоративный иероглиф плана */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-6 select-none font-jp text-6xl leading-none text-sumi/[0.05] transition-colors duration-500 group-hover:text-shu/10"
      >
        {kanji}
      </span>

      <div className="relative flex flex-col gap-1">
        <h3 className="font-display text-2xl font-extrabold tracking-tight text-sumi">
          {name}
        </h3>
        <p className="min-h-[2.75rem] max-w-[16rem] text-sm leading-relaxed text-sumi-soft">
          {desc}
        </p>
      </div>

      {/* Цена */}
      <div className="relative mt-6 flex items-end gap-1.5">
        <span
          className={`font-display text-5xl font-extrabold leading-none tracking-tight ${
            featured ? 'text-gradient-shu' : 'text-sumi'
          }`}
        >
          <Counter to={price} duration={1.4} suffix=" ₽" />
        </span>
        <span className="mb-1 text-sm font-medium text-sumi-muted">/мес</span>
      </div>

      <div className="relative mt-6 h-px w-full bg-gradient-to-r from-transparent via-sumi/15 to-transparent" />

      {/* Фичи */}
      <ul className="relative mt-6 flex flex-1 flex-col gap-3.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm leading-snug text-sumi-soft">
            <CheckMark />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Кнопка */}
      <div className="relative mt-8">
        <Button
          href="#consult"
          variant={variant}
          size="lg"
          className="w-full"
        >
          Выбрать тариф
        </Button>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <Section id="pricing" className="overflow-hidden bg-washi-100 grain">
      {/* Фоновый японский декор */}
      <Seigaiha
        color="#E0483D"
        opacity={0.1}
        className="pointer-events-none absolute inset-x-0 top-0 h-40 w-full opacity-60"
      />
      <SakuraBranch className="pointer-events-none absolute -left-10 top-24 w-64 opacity-[0.18] animate-sway sm:w-80" />
      <EnsoCircle className="pointer-events-none absolute -right-12 bottom-16 w-56 text-ai/10 animate-spin-slow sm:w-72" />

      <div className="relative">
        <SectionTitle
          kanji="円"
          kicker="Стоимость"
          title={
            <>
              Прозрачные <span className="text-gradient-shu">тарифы</span>
            </>
          }
          subtitle="Никаких скрытых платежей и доплат — вы видите полную стоимость сразу. Меняйте тариф в любой момент и платите только за то, что действительно нужно."
          align="center"
        />

        <motion.div
          variants={stagger(0.15, 0.1)}
          {...inView}
          className="mt-14 grid items-stretch gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:items-center lg:gap-8"
        >
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </motion.div>

        {/* Гарантия / примечание */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-2.5 text-center text-sm text-sumi-muted"
        >
          <svg
            className="h-5 w-5 shrink-0 text-matcha-deep"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <span>
            7 дней на возврат средств, если первый месяц не подойдёт — без вопросов.
          </span>
        </motion.p>
      </div>
    </Section>
  )
}
