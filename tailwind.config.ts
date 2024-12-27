import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "Helvetica": "Helvetica, Arial, sans-serif",
      "Gilroy": "Gilroy"
    },
    extend: {
      colors: {
        bg_1_10:      "var(--bg-1-10)",
        bg_1_50:      "var(--bg-1-50)",
        bg_1_100:     "var(--bg-1-100)",
        grey:         "var(--grey)",
        accent_500:   "var(--accent-500)",
        accent_300:   "var(--accent-300)",
        accent_600:   "var(--accent-600)",
      
        accent_2_50:  "var(--accent-2-50)",
        accent_2_300: "var(--accent-2-300)",
        accent_2_600: "var(--accent-2-600)",
        accent_2_700: "var(--accent-2-700)",
      },
    },
  },
  plugins: [],
} satisfies Config;
