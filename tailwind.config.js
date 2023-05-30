/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        'Tomato': 'hsl(4, 100%, 67%)',
        'Dark-Slate-Grey': 'hsl(234, 29%, 20%)',
        'Charcoal-Grey': 'hsl(235, 18%, 26%)',
        'Grey': 'hsl(231, 7%, 60%)',
        'White': 'hsl(0, 0%, 100%)',
        'Error': 'rgba(255, 97, 85, 0.15)'
      },
      fontSize: {
        'lg': ['40px', '40px'],
        'md': ['16px', '24px'],
        'sm': ['12px', '18px'],
      },
      fontWeight: {
        'reg': '400',
        'bold': '700'
      },
      listStyleImage: {
        'check': "url('../../public/icon-list.svg')"
      }
    },
  },
  plugins: [],
}
