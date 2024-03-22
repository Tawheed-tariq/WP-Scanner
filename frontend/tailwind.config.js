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
        'text-80': 'rgba(4, 8, 7, 0.8)',
        'background': 'rgb(244, 251, 248)',
        'background-50' : 'rgba(244, 251, 248, 0.7)',
        'primary': 'rgba(155, 215, 222, 1)',
        'secondary': 'rgb(154, 226, 199)',
        'secondary-50' : 'rgba(154, 226, 199, 0.6)',
        'secondary-80' : 'rgba(155, 215, 222, 0.8)',
        'accent': 'rgba(34, 111, 120, 1)',
        'home-bg' : '#040B08',
        'home-primary' : '#269C6F',
        'home-secondary' : 'rgba(29, 99, 73, 0.6)',
        'txt' : '#F8FCFB',
        'home-accent' : '#3EBB8C'
       },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

