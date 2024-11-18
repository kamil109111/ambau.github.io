/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bg: '#ffe4e6',
        accent: '#FB8B24',
        dark: '#2D3142',
      },
      fontFamily: {
        'dmsans': ['DM Sans', 'sans-serif']
      },
      maxWidth: {
        'maxwidth': '82rem'
      }
    },
  },
  plugins: [],
}

