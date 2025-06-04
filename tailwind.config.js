export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EBF4FC",
          100: "#D7EAFD",
          200: "#AFDAF8",
          300: "#87C9F4",
          400: "#5FB8F0",
          500: "#145D9D", // primary
          600: "#12548E",
          700: "#0F4A7F",
          800: "#0C4170",
          900: "#093761",
        },
        secondary: {
          50: "#FFF8ED",
          100: "#FFEECE",
          200: "#FFDF9C",
          300: "#FFD06B",
          400: "#FFC139",
          500: "#FCB109", // secondary
          600: "#E3A008",
          700: "#CA8E07",
          800: "#B07D06",
          900: "#976C05",
        },
        accent: {
          50: "#FEEFEF",
          100: "#FDDEDE",
          200: "#FBCBCB",
          300: "#F9B8B8",
          400: "#F7A5A5",
          500: "#DE3222", // accent
          600: "#C82D1F",
          700: "#B2281B",
          800: "#9C2217",
          900: "#861D13",
        },
        success: {
          50: "#F0FAF3",
          100: "#E0F5E7",
          200: "#C1EBD0",
          300: "#A1E0BA",
          400: "#82D6A3",
          500: "#029341", // success
          600: "#02843A",
          700: "#017634",
          800: "#01682D",
          900: "#015A26",
        },
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["Poppins", "SF Pro Display", "system-ui", "sans-serif"],
      },
      spacing: {
        128: "32rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
