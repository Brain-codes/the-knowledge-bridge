/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ['"Clash Display"', "sans-serif"],
      },
      colors: {
        primary: {
          green: "#005E02",
          text: "#041F00",
          dark: "#041F00",
          light: "#15B800",
          border: "#003601",
        },
      },
      fontSize: {
        xxs: ["0.625rem", { lineHeight: "0.875rem" }], // 10px for ultra-small screens
      },
    },
  },
  plugins: [],
};
