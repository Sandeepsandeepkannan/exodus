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
          DEFAULT: "#B91941",
          navy: "#B91941",
          navyHover: "#9E1537",
          lightNavy: "#D3234F",
          red: "#DC2626", // Red accent from official Exodus Exports logo
          redLight: "#FEE2E2",
          dark: "#0A0F1D",
          darker: "#050811",
          light: "#F8FAFC",
          muted: "#F1F5F9",
          slate: "#64748B",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Manrope", "Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        wider: "0.05em",
        widest: "0.15em",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        card: "0 10px 30px -10px rgba(185, 25, 65, 0.08)",
        elevated: "0 20px 40px -15px rgba(185, 25, 65, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
