/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'rgb(4, 8, 7)',
        'background': 'rgb(244, 251, 248)',
        'primary': 'rgb(67, 192, 145)',
        'primary-30' : 'rgba(67, 192, 145, 0.3)',
        'secondary': 'rgb(154, 226, 199)',
        'secondary-80': 'rgba(154, 226, 199, 0.8)',
        'accent': 'rgb(98, 217, 172)',
       },
    },
  },
  plugins: [],
}

