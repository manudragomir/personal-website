import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0f17",
        foreground: "#e6edf6",
        muted: "#9aa9bf",
        card: "#121a27",
        accent: "#62a8ff"
      }
    }
  },
  plugins: []
};

export default config;
