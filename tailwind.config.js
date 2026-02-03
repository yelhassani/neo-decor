/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#b33b2a',
        sand: '#f7f1ea',
        charcoal: '#1f1a17'
      },
      boxShadow: {
        card: '0 20px 60px -25px rgba(0,0,0,0.2)'
      }
    }
  },
  plugins: [],
};

