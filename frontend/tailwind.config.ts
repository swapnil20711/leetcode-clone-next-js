import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#1a1a1a',
          layer: '#262626',
          accent: '#3e3e3e'
        },
        brand: {
          orange: '#ffa116',
          darkOrange: '#e69113'
        }
      }
    }
  },
  plugins: [],
}
export default config

