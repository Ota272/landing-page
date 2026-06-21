/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // 生成り — небелёная васи-бумага (фон)
        washi: {
          DEFAULT: '#F7F1E6',
          50: '#FDFBF6',
          100: '#FAF5EC',
          200: '#F3EADB',
          300: '#EADCC4',
        },
        // 墨 — тушь сумиэ (тёмный)
        sumi: {
          DEFAULT: '#241F1B',
          light: '#3B332C',
          soft: '#574C42',
          muted: '#8A7E72',
        },
        // 朱色 — киноварь / цвет тории и солнца хиномару
        shu: {
          DEFAULT: '#E0483D',
          dark: '#C13327',
          light: '#F2705F',
          glow: '#FF8A6E',
        },
        // 桜色 — сакура
        sakura: {
          DEFAULT: '#F3B6C3',
          light: '#FBDDE4',
          soft: '#FCEEF1',
          deep: '#E68AA0',
        },
        // 藍 — индиго (доверие, премиум)
        ai: {
          DEFAULT: '#2C3E5D',
          deep: '#1A2740',
          light: '#41587E',
        },
        // 抹茶 — матча
        matcha: {
          DEFAULT: '#8FA876',
          light: '#B8CDA0',
          deep: '#6E8A5A',
        },
        // 金 — золото (премиум-акценты)
        kin: {
          DEFAULT: '#C9A24B',
          light: '#E6C977',
        },
      },
      fontFamily: {
        display: ['Unbounded', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        jp: ['"Shippori Mincho"', 'serif'],
        brush: ['"Yuji Syuku"', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        soft: '0 18px 50px -22px rgba(36, 31, 27, 0.30)',
        card: '0 30px 70px -30px rgba(36, 31, 27, 0.35)',
        glow: '0 0 60px -10px rgba(224, 72, 61, 0.55)',
        'glow-sakura': '0 0 50px -8px rgba(230, 138, 160, 0.6)',
        inset: 'inset 0 1px 0 0 rgba(255,255,255,0.6)',
      },
      backgroundImage: {
        'sun-rays':
          'repeating-conic-gradient(from 0deg, rgba(224,72,61,0.10) 0deg 8deg, transparent 8deg 16deg)',
        'washi-grain':
          'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5), transparent 70%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-26px) rotate(3deg)' },
        },
        sway: {
          '0%,100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-rev': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'sun-pulse': {
          '0%,100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.06)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        sway: 'sway 5s ease-in-out infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
        'spin-rev': 'spin-rev 60s linear infinite',
        'sun-pulse': 'sun-pulse 7s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'marquee-rev': 'marquee-rev 30s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        wave: 'wave 12s linear infinite',
      },
    },
  },
  plugins: [],
}
