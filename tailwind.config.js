/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      fontSize: {
        xs: "0.8rem",
        sm: "0.875rem",
        base: "1rem",
        xl: "1.25rem",
        lg: "1.125rem",
        "2xl": "1.5rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      screens: {
        //Responsive breakpoints default can be change
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    extend: {
      fontFamily: {
        "montserrat" : "var(--typeDefault)",
      },
      colors: {
        "token-primary": "var(--token-primary-color)",
        "token-secondary": "var(--token-secondary-color)",
      },
      spacing: {
        "token-spacing-small": "var(--token-spacing-small)",
        "token-spacing-medium": "var(--token-spacing-medium)",
        "token-spacing-large": "var(--token-spacing-large)",
      }
    },
  },
  plugins: [],
}
