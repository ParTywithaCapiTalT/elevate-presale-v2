import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          '950': '#0f172a',
          '900': '#111827',
        },
        orange: {
          '400': '#fb923c',
          '500': '#f97316',
          '600': '#ea580c',
        },
      },
    },
  },
} satisfies Config