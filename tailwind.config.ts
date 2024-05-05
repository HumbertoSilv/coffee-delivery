import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Baloo 2"', "sans-serif"],
        body: ['"Roboto"', "sans-serif"],
      },
      fontSize: {
        min: '0.5rem',
      }
    },
  },
  plugins: [],
} satisfies Config
