import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0B62AA",
        "faded-blue": "#0961A84D",
      },
    },
  },
  plugins: [],
} satisfies Config;
