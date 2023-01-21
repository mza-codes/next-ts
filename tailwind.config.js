/** @type {import('tailwindcss').Config} */

module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        highlight: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        abel: ['Abel', 'sans- serif'],
        kanit: ['Kanit', 'sans- serif'],
        poorStory: ['Poor Story', 'cursive'],
        righteous: ['Righteous', 'cursive'],
        gloria: ['Gloria Hallelujah', 'cursive'],
        poppins: ['Poppins', 'sans-serif']
      },
      screens: {
        narrow: { raw: '(max-aspect-ratio: 3 / 2)' },
        wide: { raw: '(min-aspect-ratio: 3 / 2)' },
        'taller-than-854': { raw: '(min-height: 854px)' },
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [
    {
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
  ],
}
