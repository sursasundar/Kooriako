/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#ebfffe',
          '100': '#cdffff',
          '200': '#a1fbff',
          '300': '#60f6ff',
          '400': '#18e7f8',
          '500': '#00cade',
          '600': '#00a3bd',
          '700': '#087f96',
          '800': '#10667a',
          '900': '#125567',
          '950': '#053847',
        },
        secondary: {
          '50': '#f2f9fd',
          '100': '#e4f0fa',
          '200': '#c2e1f5',
          '300': '#8ccaed',
          '400': '#4faee1',
          '500': '#2994ce',
          '600': '#1a76af',
          '700': '#165e8e',
          '800': '#165076',
          '900': '#184462',
          '950': '#13344e',
        },
        grey: {
          80: '#575756',
          15: '#d7d5d5',
        },
        blue: {
          mid: '#5f71b5',
        },
        white: '#fffefe',
        gradient: {
          dark: '#001C38',
          light: '#0E607C'
        }
      },
      screens:{
        'lg-md': '992px'
      }
    },
  },
  plugins: [],
}