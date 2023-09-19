/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#2098ff'
      },
      boxShadow: {
        'innerlg': 'inset 0px 60px 100px -78px rgba(184,255,247,1)',
        // -webkit-box-shadow: inset 0px 60px 100px -78px rgba(184,255,247,1);
        // -moz-box-shadow: inset 0px 60px 100px -78px rgba(184,255,247,1);
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'e&tfront': "url('/images/e&tfront.jpg')",
      },
      animation: {
        scroll: 'scroll 2s infinite ease-in-out',
      },
      keyframes: {
        scroll:{
          '0%':{
            opacity : '0',
            padding: "-25px 0",
          },
          '50%':{
            opacity: '1',
            padding: "50px 0",
          },
          '100%':{
            opacity: '0',
            padding: "125px 0",
          },
        },
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
