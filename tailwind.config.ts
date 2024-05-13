import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        main: '#FAFAFA'
      },
      fontFamily: {
        title: ['"Baloo 2"', "sans-serif"],
        body: ['"Roboto"', "sans-serif"],
      },
      fontSize: {
        min: '0.5rem',
        titleL: '2rem'
      }
    },
  },
  plugins: [],
} satisfies Config
