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
        'secondary': 'rgb(154, 226, 199)',
        'accent': 'rgb(98, 217, 172)',
        'home-bg' : '#040B08',
        'home-primary' : '#269C6F',
        'home-secondary' : 'rgba(29, 99, 73, 0.6)',
        'txt' : '#F8FCFB',
        'home-accent' : '#3EBB8C'
       },
    },
  },
  plugins: [],
}

