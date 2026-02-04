import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        butter: {
          DEFAULT: "#E8D88C",
          light: "#F5EBB8",
          dark: "#D4C76A",
        },
        "pastel-blue": {
          DEFAULT: "#6B9BB8",
          light: "#8FB4CC",
          dark: "#5A8AA5",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
