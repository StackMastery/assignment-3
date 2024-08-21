/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      width: {
        'primary': '1440px',
      },
      colors: {
        'primary': '#ABEF5F',
        'lightPrimary': 'rgba(171, 239, 95, 0.5)',
        'textcolor': '#212121',
        'borderColor': '#E9E9E9'
      },
      fontFamily: {
        'main': 'Manrope'
      },
      screens: {
        '3xl': '1536px', 
        '2xl': '1440px',
        'xl': '1280px',
        'lg': '1024px',
        'md': '868px',
        'sm': '640px',
        'sx': '567px',
        'xs': '480px',
        '2xs': '375px',
        '3xs': '320px',
        '4xs': '250px'  
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
