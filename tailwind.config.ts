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
      },
      fontFamily: {
        isocpeur: ["Isocpeur", "sans-serif"], // Custom font integration
      },
      clipPath: {
        polygon: "polygon(100% 50%, 0 0, 0 100%)", // Custom polygon shape
      },
      spacing: {
        '100': '25rem', // Example for large spacing (if needed)
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Optional: For better styling of forms
    require("@tailwindcss/typography"), // Optional: For text-rich pages
    require("@tailwindcss/aspect-ratio"), // Optional: For maintaining aspect ratios
  ],
} satisfies Config;
