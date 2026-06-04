/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg:        '#0b0b0b',
        bg2:       '#111111',
        surface:   '#161616',
        surface2:  '#1c1c1c',
        border:    '#242424',
        border2:   '#2e2e2e',
        accent:    '#20c65a',
        accent2:   '#18a34a',
        accent3:   '#4ade80',
        text:      '#e8e8e8',
        muted:     '#5a5a5a',
        muted2:    '#3a3a3a',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
