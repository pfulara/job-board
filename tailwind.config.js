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
        'light': '#f1f5f9',
        DEFAULT: '#cbd5e1',
        'dark': '#0f172a'
      },
      'error': {
        'light': '#fca5a5',
        DEFAULT: '#dc2626',
        'dark': '#7f1d1d'
      },
      'success': {
        'light': '#86efac',
        DEFAULT: '#16a34a',
        'dark': '#064e3b'
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(primary|secondary|text|success|error)+(-(light|dark))?/,
      variants: ['hover']
    },
  ]
};
