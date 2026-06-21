import { motion } from 'framer-motion'
import Marquee from '../ui/Marquee'
import { Seigaiha } from '../ui/decor'

// Маленький киноварный цветок сакуры из 5 лепестков (инлайн-SVG-разделитель)
function SakuraDot({ className = '' }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
    >
      <g transform="translate(20 20)">
        {[0, 72, 144, 216, 288].map((r) => (
          <path
            key={r}
            d="M0 -3 C6 -7 15 -16 11 -25 C8 -31 0 -28 0 -22 C0 -28 -8 -31 -11 -25 C-15 -16 -6 -7 0 -3 Z"
            fill="currentColor"
            transform={`rotate(${r})`}
          />
        ))}
        <circle r="3.4" fill="#C9A24B" />
      </g>
    </svg>
  )
}

// Один токен бегущей строки: японское слово + перевод
function Word({ jp, ru }) {
  return (
    <span className="group/word mx-5 inline-flex shrink-0 items-baseline gap-3 sm:mx-7 sm:gap-4">
      <span className="font-jp text-2xl leading-none tracking-wide text-washi transition-colors duration-300 group-hover/word:text-kin sm:text-3xl md:text-4xl">
        {jp}
      </span>
      <span className="text-xs font-medium uppercase tracking-[0.22em] text-washi/45 transition-colors duration-300 group-hover/word:text-sakura-light sm:text-sm">
        {ru}
      </span>
    </span>
  )
}

const WORDS_TOP = [
  { jp: 'こんにちは', ru: 'привет' },
  { jp: 'ありがとう', ru: 'спасибо' },
  { jp: '日本語', ru: 'японский' },
  { jp: '頑張って', ru: 'удачи' },
  { jp: '美味しい', ru: 'вкусно' },
  { jp: '友達', ru: 'друг' },
]

const WORDS_BOTTOM = [
  { jp: '愛してる', ru: 'люблю' },
  { jp: '桜', ru: 'сакура' },
  { jp: '先生', ru: 'учитель' },
  { jp: '勉強', ru: 'учёба' },
  { jp: '夢', ru: 'мечта' },
  { jp: 'こんばんは', ru: 'добрый вечер' },
]

function Row({ words, reverse = false }) {
  return (
    <Marquee reverse={reverse} className="mask-fade-x py-1">
      {words.map((w, i) => (
        <span key={`${w.jp}-${i}`} className="flex shrink-0 items-center">
          <Word jp={w.jp} ru={w.ru} />
          <SakuraDot className="mx-1 h-5 w-5 shrink-0 text-shu sm:h-6 sm:w-6" />
        </span>
      ))}
    </Marquee>
  )
}

export default function LangMarquee() {
  return (
    <section
      aria-label="Японские слова с переводом"
      className="relative isolate w-full overflow-hidden bg-ai-deep text-washi"
    >
      {/* Декоративный фон: волны сэйгайха */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <Seigaiha className="h-full w-full" color="#E0483D" opacity={0.14} />
      </div>

      {/* Лёгкое золотое свечение по краям для глубины */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 120% at 50% 50%, rgba(201,162,75,0.10), transparent 70%)',
        }}
      />

      {/* Тонкие линии-границы сверху и снизу полосы */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kin/40 to-transparent" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-kin/40 to-transparent" />

      {/* Наклонный блок для динамики; компенсируем высоту отрицательными отступами */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="-my-3 -rotate-1"
      >
        <div className="flex flex-col gap-3 py-5 sm:gap-4 sm:py-6 md:py-7">
          <Row words={WORDS_TOP} />
          <Row words={WORDS_BOTTOM} reverse />
        </div>
      </motion.div>
    </section>
  )
}
