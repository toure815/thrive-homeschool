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
        brand: {
          yellow:  "#F7C331",
          orange:  "#F4831F",
          pink:    "#E8297A",
          purple:  "#6B3FA0",
          blue:    "#4A6CB5",
          maroon:  "#7B1D4E",
          cream:   "#FDF8F3",
        },
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "72ch",
            color: "#7B1D4E",
            a: {
              color: "#6B3FA0",
              "&:hover": { color: "#E8297A" },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
