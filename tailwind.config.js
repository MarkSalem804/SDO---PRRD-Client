export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EBF4',
          100: '#CCD7E9',
          200: '#99AFD3',
          300: '#6687BD',
          400: '#335FA7',
          500: '#0A2463', // primary
          600: '#081D4F',
          700: '#06163B',
          800: '#040E28',
          900: '#020714',
        },
        secondary: {
          50: '#EFFCFB',
          100: '#DEF9F7',
          200: '#BEF3EF',
          300: '#9DEDE7',
          400: '#7DE7DF',
          500: '#3CAEA3', // secondary
          600: '#309B92',
          700: '#248882',
          800: '#187571',
          900: '#0C6261',
        },
        accent: {
          50: '#FFF6EC',
          100: '#FEEDDA',
          200: '#FDCAA0',
          300: '#FBA866',
          400: '#F9852C',
          500: '#E76F51', // accent
          600: '#D15A3C',
          700: '#BD4528',
          800: '#A93013',
          900: '#8C1500',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          'system-ui',
          'sans-serif'
        ],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}