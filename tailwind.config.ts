import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-mid':   '#5B8FA8',
        'blue-dark':  '#1F5F6B',
        'blue-slate': '#3D5A6B',
        'green-mint': '#52BFA0',
        'green-cta':  '#4DB896',
        'gray-dark':  '#4A5568',
        'gray-mid':   '#7A8A90',
        'cream':      '#F5F0E8',
        'off-white':  '#FAFAF7',
        'text-main':  '#1A2B35',
      },
      fontFamily: {
        lora:  ['var(--font-lora)',  'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
