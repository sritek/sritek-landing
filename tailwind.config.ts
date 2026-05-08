import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#9a0002",
          dark: "#7a0001",
        },
        cream: {
          DEFAULT: "#efe6de",
          dark: "#d9cfc5",
          muted: "#e8ddd4",
          border: "#d4c8bb",
        },
        dark: {
          DEFAULT: "#130606",
          deep: "#0e0404",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};

export default config;
