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
        'md': '809px',
      },
      backgroundImage: {
        'cupertinopoint': "url('../images/non-vector/1280px-Cupertinopoint.jpeg')",
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
          }
      },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease-out'
      }
    },
  },
  plugins: [],
}
