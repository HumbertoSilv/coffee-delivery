import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.tsx'],
  theme: {
    extend: {
      boxShadow: {
        base: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0 ,0, 0.3) 0px 1px 3px -1px',
      },
      keyframes: {
        slideIn: {
          'from': { "margin-top": '2px', opacity: "0" },
          'to': { top: "0", opacity: "1" },
        }
      },
      colors: {
        main: '#FAFAFA'
      },
      fontFamily: {
        title: ['"Baloo 2"', "sans-serif"],
        body: ['"Roboto"', "sans-serif"],
      },
      fontSize: {
        min: '0.625rem',
        titleL: '2rem'
      }
    },
  },
  plugins: [],
} satisfies Config
