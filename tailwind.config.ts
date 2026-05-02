import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        blue: "#99daff",
        "blue-mid": "#4ab8f0",
        "blue-muted": "rgba(153,218,255,0.5)",
        "blue-faint": "rgba(153,218,255,0.08)",
        "dark-surface": "#1a1a1a",
        "dark-deep": "#0d0d0d",
        "dark-border": "rgba(153,218,255,0.1)",
      },
      fontFamily: {
        canela: ["Canela", "Georgia", "serif"],
        avenir: ["Avenir Next", "Avenir", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(153,218,255,0.12) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-sm": "28px 28px",
        "grid-md": "40px 40px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        revealMask: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(153,218,255,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(153,218,255,0.25)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        fadeUp: "fadeUp 0.7s ease forwards",
        glowPulse: "glowPulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".glow-blue": {
          "box-shadow": "0 0 30px rgba(153,218,255,0.2)",
        },
        ".glow-blue-text": {
          "text-shadow": "0 0 60px rgba(153,218,255,0.25)",
        },
      });
    }),
  ],
};

export default config;
