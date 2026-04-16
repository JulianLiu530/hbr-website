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
        brand: {
          navy: '#0A2463',
          ice: '#A8D8EA',
          silver: '#C0C8D8',
          deep: '#061840',
          glow: '#4FC3F7',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(10,36,99,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(10,36,99,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}
export default config
