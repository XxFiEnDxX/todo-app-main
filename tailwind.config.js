/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-dark': "url('./images/bg-desktop-dark.jpg')",
        'desktop-light': "url('./images/bg-desktop-light.jpg')",

        'mobile-dark': "url('./images/bg-mobile-dark.jpg')",
        'mobile-light': "url('./images/bg-mobile-light.jpg')",
      },
      fontFamily: {
        Josefin: ['Josefin Sans','sans-serif'],
      },
      colors: {
        //dark mode
        'Bright-Blue': 'hsl(220, 98%, 61%)',
        'Very-Dark-Blue': 'hsl(235, 21%, 11%)',
        'Very-Dark-Desaturated-Blue': 'hsl(235, 24%, 19%)',
        'Light-Grayish-Blue': 'hsl(234, 39%, 85%)',
        'Light-Grayish-Blue-hover' : 'hsl(236, 33%, 92%)',
        'Dark-Grayish-Blue': 'hsl(234, 11%, 52%)',
        'Very-Dark-Grayish-Blue': 'hsl(233, 14%, 35%)',
        'Very-Dark-Grayish-Blue-2': 'hsl(237, 14%, 26%)',
        // Light mode
        'Very-Light-Gray': 'hsl(0, 0%, 98%)',
        'Very-Light-Grayish-Blue': 'hsl(236, 33%, 92%)',
        'Light-Grayish-Blue-L': 'hsl(233, 11%, 84%)',
        'Dark-Grayish-Blue-L': 'hsl(236, 9%, 61%)',
        'Very-Dark-Grayish-Blue-L': 'hsl(235, 19%, 35%)',
        //gradient
        'gradient-c1': 'hsl(192, 100%, 67%)',
        'gradient-c2': 'hsl(280, 87%, 65%)',
      }
    },
  },
  plugins: [],
}

