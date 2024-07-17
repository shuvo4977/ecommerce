/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  darkMode: "media",
  theme: {
    screens : {
      xs : '360px',
      xsm : '440px',
      sm : '576px',
      md : '768px',
      lg : '990px',
      xl : '990px',
    },
    container : {
      center : true,
      // padding : '0rem'
    },
    extend: {
      colors : {
        primary : '#02FE9B',
        secondary : '#1a191d'
      },
      fontFamily : {
        'JetBrains-Mono' :['JetBrains Mono'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

