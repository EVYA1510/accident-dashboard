import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        primaryDark: "#1E40AF",
        positive: "#22C55E",
        warning: "#F97316",
        danger: "#EF4444",
        textMain: "#111827",
        textSecondary: "#6B7280",
        bgMain: "#F9FAFB",
      },
    },
  },
  plugins: [],
};

export default config;
