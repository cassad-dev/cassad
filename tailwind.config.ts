import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'cassad-blue': '#0C4068',
        'cassad-black': '#000000',
        'cassad-white': '#FFFFFF',
        mainAzul: {
          100: '#0c4068',
        },
      },
    },
  },
  plugins: [],
};
export default config;
