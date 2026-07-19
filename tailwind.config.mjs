import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 复古米白底色
        'cream': {
          50: '#FBF9F4',
          100: '#F5F1E8',
          200: '#EDE7D8',
          300: '#E2D9C3',
        },
        // 深炭灰文字
        'charcoal': {
          800: '#2D2A26',
          900: '#1A1815',
          950: '#0F0E0C',
        },
        // 暖赭石/焦糖色强调色
        'ochre': {
          400: '#D4956A',
          500: '#C47F4E',
          600: '#A8683D',
          700: '#8B5432',
        },
        // 暗黑模式背景
        'dark-bg': {
          900: '#1A1815',
          950: '#12110F',
        }
      },
      fontFamily: {
        // 衬线字体 - 标题
        'serif-display': ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        // 无衬线字体 - 正文
        'sans-body': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // 等宽字体 - 数字/代码
        'mono-code': ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [typography],
}
