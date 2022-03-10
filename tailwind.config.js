const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["EB Garamond", ...defaultTheme.fontFamily.serif],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      screens: {
        'md': '832px',
      },
      backgroundImage: {
        'cupertinopoint': "url('./images/non-vector/1280px-Cupertinopoint.jpeg')",
        'assembly': "url('./images/non-vector/assembly.jpeg')",
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                transform: 'translateY(100px)'
            },
            '100%': {
                transform: 'translateY(0)'
            },
          }
      },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease'
      }
    },
  },
  plugins: [],
}
