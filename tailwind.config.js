/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      neutral: {
        0: "hsl(0, 0%, 100%)",
        300: "hsl(252, 6%, 83%)",
        500: "hsl(245, 15%, 58%)",
        700: "hsl(245, 19%, 35%)",
        900: "hsl(248, 70%, 10%)",
      },
      orange: {
        500: "hsl(7, 88%, 67%)",
        700: "hsl(7, 71%, 60%)",
      },
    },
    backgroundImage: {
      "mobile-bg": "url('./src/assets/images/background-mobile.png')",
      "desktop-bg": "url('./src/assets/images/background-desktop.png')",
      "tablet-bg": "url('./src/assets/images/background-tablet.png')",
      "squiggly-desktop":
        "url('./src/assets/images/pattern-squiggly-line-bottom-desktop.svg')",
      "squiggly-mobile":
        "url('./src/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg')",
      "squiggly-top":
        "url('./src/assets/images/pattern-squiggly-line-top.svg')",
      "pattern-lines": "url('./src/assets/images/pattern-lines.svg')",
      "pattern-lines": "url('./src/assets/images/pattern-lines.svg')",
      "pattern-ticket": "url('./src/assets/images/pattern-ticket.svg')",
      "pattern-circle": "url('./src/assets/images/pattern-circle.svg')",
    },
    gradientColorStops: (theme) => ({
      "gradient-start": "hsl(7, 86%, 67%)",
      "gradient-end": "hsl(0, 0%, 100%)",
    }),
    fontFamily: {
      inconsolata: ["Inconsolata", "monospace"],
    },
  },
  plugins: [],
};
