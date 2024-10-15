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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs:"320px",
        sm:"375px",
        sml:"510px",
        md:"767px",
        lg:"970px",
        lgl:"1024px",
        xl:"1280px"
      },
    },
  },
  plugins: [],
};

export default config;
