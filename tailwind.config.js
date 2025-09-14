/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Custom colors that match your existing stone theme
        primary: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        vedica: {
          "primary": "#78716c",
          "primary-focus": "#57534e", 
          "primary-content": "#ffffff",
          "secondary": "#e7e5e4",
          "secondary-focus": "#d6d3d1",
          "secondary-content": "#292524",
          "accent": "#a8a29e",
          "accent-focus": "#78716c",
          "accent-content": "#ffffff",
          "neutral": "#292524",
          "neutral-focus": "#1c1917",
          "neutral-content": "#ffffff",
          "base-100": "#fafaf9",
          "base-200": "#f5f5f4",
          "base-300": "#e7e5e4",
          "base-content": "#292524",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      "light",
      "dark",
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}
