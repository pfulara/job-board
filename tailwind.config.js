/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': {
        'light': '#e879f9',
        DEFAULT: '#c026d3',
        'dark': "#86198f"
      },
      'secondary': {
        'light': '#f9fafb',
        DEFAULT: '#f3f4f6',
        'dark': '#e5e7eb'
      },
      'text': {
        'light': '#e2e8f0',
        'dark': '#0f172a'
      }
    },
  },
  plugins: [],
};
