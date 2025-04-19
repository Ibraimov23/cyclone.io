import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cyclone: {
          DEFAULT: "#90010A",
          light: "#B30D17",
          dark: "#6E0008",
          50: "#FFF0F1",
          100: "#FFD9DC",
          200: "#FFB3B9",
          300: "#FF8D96",
          400: "#FF6773",
          500: "#FF4150",
          600: "#FF1A2D",
          700: "#E3000F",
          800: "#90010A",
          900: "#6E0008",
        },
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1", borderRadius: "0" },
          "100%": { transform: "translateY(-1000px) rotate(720deg)", opacity: "0", borderRadius: "50%" },
        },
      },
      animation: {
        float: "float 25s linear infinite",
      },
    },
  },
  plugins: [],
}

export default config
