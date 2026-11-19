import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f5fa",
          100: "#e2ebf4",
          200: "#c7d9e9",
          300: "#9ebfdb",
          400: "#6e9eca",
          500: "#4980b6",
          600: "#34669c",
          700: "#2a527f",
          800: "#1a3658",
          900: "#0f2239",
          950: "#0a1728",
        },
        brand: {
          orange: "#DC2626",
          "orange-hover": "#B91C1C",
          red: "#DC2626",
          "red-hover": "#B91C1C",
          blue: "#0F2239",
          "blue-light": "#1E3A5F",
          accent: "#2563EB",
          light: "#F4F7FA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
