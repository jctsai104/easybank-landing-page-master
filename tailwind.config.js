/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'public-sans' : ['"Public Sans"'],
      },
      colors: {
        'db': '#2D314D',
        'lime': '#31D35C',
        'bcn': '#2BB7DA',
        'gb': '#9698A6',
        'lgb': '#F3F4F6',
        'vlg': '#FAFAFA',
      },
      maxWidth: {
        '1200' : '1200px',
      },
      padding: {
        'm' : '0 6%',
      },
      screens: {
        'mobile' : {'max' : '375px'},
        'desktop' : '768px',
      },
      spacing: {
        '3.2rem' : '3.2rem',
      },
      translate: {
        '10%' : '10%',
        '12px' : '12px',
      },
      transitionProperty: {
        'mh' : 'max-height',
      },

    },
  },
  plugins: [],
}
