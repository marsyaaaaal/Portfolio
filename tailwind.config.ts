import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        content: '940px',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
        serif: ['Palatino Linotype', 'Book Antiqua', 'Palatino', 'serif'],
      },
      colors: {
        editorial: {
          bg: '#fafaf8',
          'bg-alt': '#f4f1eb',
          'bg-warm': '#f0ece4',
          'bg-dark': '#0d0d0d',
          fg: '#111111',
          secondary: '#666666',
          muted: '#999999',
          border: '#e0ddd7',
          accent: '#dc2626',
        },
      },
    },
  },
  plugins: [],
}

export default config
