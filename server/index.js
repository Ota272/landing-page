// Лёгкий Express-бэкенд для приёма заявок с лендинга школы «Сакура».
// Запуск: npm run server (порт 3001). Vite проксирует /api сюда.
import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { appendFile, mkdir } from 'node:fs/promises'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const LEADS_DIR = join(__dirname, 'data')
const LEADS_FILE = join(LEADS_DIR, 'leads.jsonl')

// Приём заявки на бесплатную консультацию / вопрос.
app.post('/api/lead', async (req, res) => {
  const { name, email, telegram, phone, type, message } = req.body || {}

  if (!name || (!phone && !telegram && !email)) {
    return res.status(400).json({
      ok: false,
      error: 'Укажите имя и хотя бы один контакт (телефон, Telegram или e-mail).',
    })
  }

  const lead = {
    name,
    email: email || null,
    telegram: telegram || null,
    phone: phone || null,
    type: type || 'consultation',
    message: message || null,
    createdAt: new Date().toISOString(),
    ip: req.ip,
  }

  try {
    await mkdir(LEADS_DIR, { recursive: true })
    await appendFile(LEADS_FILE, JSON.stringify(lead) + '\n', 'utf8')
  } catch (err) {
    console.error('Не удалось сохранить заявку:', err)
  }

  console.log('📩 Новая заявка:', lead.name, '—', lead.phone || lead.telegram || lead.email)

  // Имитация лёгкой задержки обработки
  setTimeout(() => {
    res.json({ ok: true, message: 'Заявка принята! Мы свяжемся с вами в течение дня.' })
  }, 500)
})

app.get('/api/health', (_req, res) => res.json({ ok: true, school: '桜 Сакура' }))

app.listen(PORT, () => {
  console.log(`🌸 Сервер школы «Сакура» запущен: http://localhost:${PORT}`)
})
