/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'b1': '#F0F8FF',
        'b2': '#E8F1FF',
        'b3': '#C1D4FF',
        'b4': '#9CB3FC',
        'b5': '#8797E4',
        'b6': '#717BDC',
        'b7': '#6167D6',
        'b8': '#5252D0',
        'b9': '#3C3CC3',
        'b10': '#2C2CAA',
        'b11': '#231E9B',
        'b12': '#1A1689',
        'b13': '#120E76',
        'b14': '#090654',
        'b15': '#020038',
        'b16': '#010022',
      },
    },
  },
  plugins: [],
}

