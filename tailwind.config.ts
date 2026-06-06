import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        card: "hsl(var(--card))",
        foreground: "hsl(var(--foreground))",
        accent: "hsl(var(--accent))",
        "accent-soft": "hsl(var(--accent-soft))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 40px hsl(var(--accent) / 0.35)",
        "glow-soft": "0 0 80px hsl(var(--accent-soft) / 0.18)"
      },
      backgroundImage: {
        "grid-fade": "radial-gradient(circle at 1px 1px, hsl(var(--accent) / 0.12) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
