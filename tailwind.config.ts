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
        // Placeholders — will be updated from logo palette once received
        brand: {
          pink: "#E8759A",
          purple: "#6B3FA0",
          orange: "#F4A261",
          navy: "#1E2255",
          cream: "#FDF8F3",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "72ch",
            color: "#1E2255",
            a: {
              color: "#6B3FA0",
              "&:hover": { color: "#E8759A" },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
