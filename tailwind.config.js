/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        background: '#F5F0E8',
        primary: '#FFD84D',
        secondary: '#A8D8FF',
        accent: '#FF7A59',
        ink: '#171717',
        card: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px #171717',
        brutal: '4px 4px 0px 0px #171717',
        'brutal-lg': '8px 8px 0px 0px #171717',
        'brutal-xl': '12px 12px 0px 0px #171717',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
}