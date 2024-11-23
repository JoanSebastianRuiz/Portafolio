/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-y": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "marquee-horizontal": "marquee-x var(--duration) infinite linear",
        "marquee-vertical": "marquee-y var(--duration) linear infinite",
      },
      fontFamily: {
        mosk900: ['Mosk100', 'sans-serif'],
        mosk900: ['Mosk200', 'sans-serif'],
        mosk900: ['Mosk300', 'sans-serif'],
        mosk400: ['Mosk400', 'sans-serif'],
        mosk500: ['Mosk500', 'sans-serif'],
        mosk900: ['Mosk600', 'sans-serif'],
        mosk700: ['Mosk700', 'sans-serif'],
        mosk900: ['Mosk800', 'sans-serif'],
        mosk900: ['Mosk900', 'sans-serif'],
        leckerli: ['Leckerli One', 'sans-serif']
      },
    },
  },
  plugins: [],
};
