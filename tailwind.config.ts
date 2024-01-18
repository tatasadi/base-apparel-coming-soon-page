import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: 'hsl(0, 7%, 24%)',
          'desaturated-red': 'hsl(0, 36%, 70%)',
          'soft-red': 'hsl(0, 93%, 68%)',
        },
        neutral: {
          'dark-grayish-red': 'hsl(0, 6%, 24%)',
        },
      },
      backgroundImage: {
        'gradient-body': 'linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(0, 100%, 98%) 100%)',
        'gradient-red': 'linear-gradient(135deg, hsl(0, 80%, 86%) 0%, hsl(0, 74%, 74%) 100%)',
      },
    },
  },
  plugins: [],
}
export default config
