import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 蓝图蓝 — CAD 主色调
        'blueprint': {
          50: '#E8EDF5',
          100: '#C5D1E8',
          200: '#9EB0D6',
          300: '#6A8BC4',
          400: '#3B5FBF',
          500: '#1E40AF', // 主色
          600: '#1A3592',
          700: '#152A75',
          800: '#0F1F58',
          900: '#0A143B',
        },
        // 纸张色 — 切割垫 / 蓝图背景
        'paper': {
          50: '#FCFAF7',
          100: '#F5F0EB',
          200: '#EDE5DB',
          300: '#E0D6C8',
        },
        // 深炭灰文字
        'charcoal': {
          800: '#2D2A26',
          900: '#1A1815',
          950: '#0F0E0C',
        },
        // 浅灰 — 面板/边框层次
        'cad-gray': {
          50: '#F8F9FA',
          100: '#F0F1F3',
          200: '#E2E4E8',
          300: '#C8CBD2',
          400: '#A0A5B0',
          500: '#7A808E',
        },
        // 状态色
        'status': {
          green: '#22C55E',
          yellow: '#EAB308',
          red: '#EF4444',
        },
        // 旧配色残留（兼容引用）
        'klein': {
          50: '#E8EDF5',
          100: '#C5D1E8',
          200: '#9EB0D6',
          300: '#6A8BC4',
          400: '#3B5FBF',
          500: '#1E40AF',
          600: '#1A3592',
          700: '#152A75',
          800: '#0F1F58',
          900: '#0A143B',
        },
        'slate-blue': {
          50: '#F5F6FA',
          100: '#E8EBF3',
          200: '#D5D9E5',
          300: '#B8BFD4',
          400: '#9FA7C8',
          500: '#7A85AD',
        },
        'cream': {
          50: '#FBF9F4',
          100: '#F5F1E8',
          200: '#EDE7D8',
        },
        'dark-bg': {
          900: '#0F0A2E',
          950: '#0A0620',
        },
        'ochre': {
          400: '#D4956A',
          500: '#C47F4E',
          600: '#A8683D',
        },
      },
      fontFamily: {
        'serif-display': ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        'sans-body': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'mono-code': ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'text-mask-in': 'textMaskIn 1.2s cubic-bezier(.76, 0, .24, 1) forwards',
        'text-mask-out': 'textMaskOut 0.8s cubic-bezier(.76, 0, .24, 1) forwards',
        'appear-right': 'appearRight 1s cubic-bezier(.76, 0, .24, 1) forwards',
        'marquee-ltr': 'marqueeLtr 20s linear infinite',
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
        textMaskIn: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        textMaskOut: {
          '0%': { clipPath: 'inset(0 0 0 0)' },
          '100%': { clipPath: 'inset(0 100% 0 0)' },
        },
        appearRight: {
          '0%': { clipPath: 'inset(0 100% 0 0)', opacity: '0' },
          '100%': { clipPath: 'inset(0 0 0 0)', opacity: '1' },
        },
        marqueeLtr: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [typography],
}
