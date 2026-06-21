import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import SakuraPetals from '../ui/SakuraPetals'
import { Lantern, SakuraBranch, EnsoCircle, Seigaiha, Crane } from '../ui/decor'
import { fadeUp, scaleIn, stagger, inView, EASE } from '../../lib/variants'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const PERKS = [
  { kanji: '無', text: 'Бесплатно и без обязательств' },
  { kanji: '速', text: 'Свяжемся в течение дня' },
  { kanji: '贈', text: 'Дарим первый пробный урок' },
]

function FieldShell({ label, required, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-jp text-xs font-semibold uppercase tracking-[0.18em] text-sumi-soft">
        {label}
        {required && <span className="ml-1 text-shu">*</span>}
      </span>
      {children}
    </label>
  )
}

const INPUT_CLASS =
  'w-full rounded-2xl border border-sumi/10 bg-white/80 px-4 py-3.5 text-sm text-sumi shadow-sm outline-none transition-all duration-300 placeholder:text-sumi-muted/70 focus:border-shu/60 focus:bg-white focus:ring-4 focus:ring-shu/15'

function CheckBurst() {
  return (
    <svg
      viewBox="0 0 80 80"
      className="h-20 w-20"
      fill="none"
      aria-hidden="true"
    >
      <motion.circle
        cx="40"
        cy="40"
        r="36"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
      />
      <motion.path
        d="M26 41 L36 51 L55 30"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.45 }}
      />
    </svg>
  )
}

function Spinner() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 animate-spin-slow"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.25"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Consultation() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    messenger: '',
    phone: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const update = (key) => (e) => {
    setFields((prev) => ({ ...prev, [key]: e.target.value }))
    if (status === 'error') {
      setStatus('idle')
      setErrorMsg('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'loading') return

    const name = fields.name.trim()
    const email = fields.email.trim()
    const messenger = fields.messenger.trim()
    const phone = fields.phone.trim()

    if (!name) {
      setStatus('error')
      setErrorMsg('Пожалуйста, укажите ваше имя.')
      return
    }
    if (email && !EMAIL_RE.test(email)) {
      setStatus('error')
      setErrorMsg('Похоже, в e-mail закралась опечатка.')
      return
    }
    if (!email && !messenger && !phone) {
      setStatus('error')
      setErrorMsg('Оставьте хотя бы один контакт: e-mail, мессенджер или телефон.')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    const payload = {
      name,
      email,
      messenger,
      phone: phone ? `+81 ${phone}` : '',
      type: 'consultation',
    }

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch {
      // демо: игнорируем сетевую ошибку — graceful fallback
    }

    // Небольшая задержка для ощущения отправки + всегда успех (демо)
    await new Promise((resolve) => setTimeout(resolve, 900))
    setStatus('success')
  }

  const isLoading = status === 'loading'

  return (
    <Section
      id="consult"
      className="grain overflow-hidden bg-gradient-to-br from-sakura-soft via-washi-50 to-kin-light/50"
    >
      {/* Декоративный фон */}
      <Seigaiha
        className="pointer-events-none absolute inset-0 -z-10"
        color="#E0483D"
        opacity={0.05}
      />
      <SakuraPetals count={14} className="-z-10 opacity-70" />
      <Lantern className="pointer-events-none absolute -left-6 top-16 -z-10 hidden w-24 opacity-60 animate-sway lg:block" />
      <Lantern className="pointer-events-none absolute right-8 top-40 -z-10 hidden w-16 opacity-40 animate-float-slow xl:block" />
      <SakuraBranch className="pointer-events-none absolute -right-20 -top-6 -z-10 hidden w-80 -rotate-6 opacity-30 lg:block" />
      <EnsoCircle className="pointer-events-none absolute bottom-10 left-8 -z-10 hidden w-40 text-ai/10 animate-spin-slow lg:block" />
      <Crane className="pointer-events-none absolute bottom-20 right-16 -z-10 hidden w-24 text-shu/10 animate-float xl:block" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* Левая колонка: заголовок и преимущества */}
        <div>
          <SectionTitle
            align="left"
            kanji="相"
            kicker="Бесплатная консультация"
            title={
              <>
                Получи{' '}
                <span className="text-gradient-shu">бесплатную</span>{' '}
                консультацию
              </>
            }
            subtitle="Оставь контакты — подберём формат, расскажем про цены и подарим первый пробный урок."
          />

          <motion.ul
            variants={stagger(0.12, 0.1)}
            {...inView}
            className="mt-9 flex flex-col gap-4"
          >
            {PERKS.map((perk) => (
              <motion.li
                key={perk.kanji}
                variants={fadeUp}
                className="flex items-center gap-4"
              >
                <span className="hanko h-11 w-11 shrink-0 text-lg leading-none">
                  {perk.kanji}
                </span>
                <span className="text-sm font-medium text-sumi sm:text-base">
                  {perk.text}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Правая колонка: форма / благодарность */}
        <motion.div
          variants={scaleIn}
          {...inView}
          className="relative"
        >
          <div className="card-washi relative overflow-hidden rounded-5xl p-6 shadow-card sm:p-9">
            {/* Крупный бледный кандзи-водяной знак */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 -right-6 select-none font-jp text-[12rem] font-bold leading-none text-shu/[0.05] sm:text-[15rem]"
            >
              桜
            </span>

            <AnimatePresence mode="wait" initial={false}>
              {status === 'success' ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="relative z-10 flex flex-col items-center py-8 text-center"
                >
                  <SakuraPetals count={10} className="opacity-80" />
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.1 }}
                    className="relative flex h-24 w-24 items-center justify-center rounded-full bg-shu/10 text-shu shadow-glow"
                  >
                    <CheckBurst />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
                    className="mt-7 font-display text-2xl font-extrabold tracking-tight text-sumi sm:text-3xl"
                  >
                    Спасибо! Заявка принята 🌸
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
                    className="mt-3 max-w-sm text-sm leading-relaxed text-sumi-soft sm:text-base"
                  >
                    Мы свяжемся с вами в течение дня и поможем выбрать
                    идеальный формат обучения.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}
                    className="mt-7"
                  >
                    <Button
                      variant="outline"
                      size="md"
                      icon={false}
                      onClick={() => {
                        setFields({ name: '', email: '', messenger: '', phone: '' })
                        setStatus('idle')
                      }}
                    >
                      Отправить ещё одну
                    </Button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  noValidate
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="relative z-10"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <span className="font-brush text-3xl text-shu">申込</span>
                    <span className="font-jp text-xs uppercase tracking-[0.2em] text-sumi-muted">
                      Заявка на консультацию
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FieldShell label="Имя" required>
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        value={fields.name}
                        onChange={update('name')}
                        placeholder="Как к вам обращаться"
                        disabled={isLoading}
                        className={INPUT_CLASS}
                      />
                    </FieldShell>

                    <FieldShell label="E-mail">
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={fields.email}
                        onChange={update('email')}
                        placeholder="you@example.com"
                        disabled={isLoading}
                        className={INPUT_CLASS}
                      />
                    </FieldShell>

                    <FieldShell label="Telegram или WhatsApp">
                      <input
                        type="text"
                        name="messenger"
                        value={fields.messenger}
                        onChange={update('messenger')}
                        placeholder="@username"
                        disabled={isLoading}
                        className={INPUT_CLASS}
                      />
                    </FieldShell>

                    <FieldShell label="Телефон">
                      <div className="relative">
                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 select-none text-sm font-semibold text-sumi-soft">
                          🇯🇵 +81
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          value={fields.phone}
                          onChange={update('phone')}
                          placeholder="90 1234 5678"
                          disabled={isLoading}
                          className={`${INPUT_CLASS} pl-[4.75rem]`}
                        />
                      </div>
                    </FieldShell>
                  </div>

                  <AnimatePresence>
                    {status === 'error' && errorMsg && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, y: -6 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -6 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="mt-4 flex items-center gap-2 rounded-xl bg-shu/10 px-4 py-2.5 text-sm font-medium text-shu-dark"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 8v5M12 16.5v.01" />
                        </svg>
                        {errorMsg}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className="mt-7">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={!isLoading}
                      disabled={isLoading}
                      className={`w-full ${isLoading ? 'cursor-wait opacity-90' : ''}`}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <Spinner />
                          Отправляем…
                        </span>
                      ) : (
                        'Отправить заявку'
                      )}
                    </Button>
                  </div>

                  <p className="mt-4 text-center text-xs leading-relaxed text-sumi-muted">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных
                    данных.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
