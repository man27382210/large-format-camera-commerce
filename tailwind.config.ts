import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#111111',
          accent: '#B05E60',
          muted: '#757575',
          paper: '#F7F0F0',
        }
      }
    },
  },
  plugins: [],
}
export default config
