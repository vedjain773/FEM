/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        "cream": "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
        "white": "hsl(0, 0%, 100%)"
      },

      fontFamily: {
        "mon-reg": ["montserrat-reg", "sans"],
        "mon-med": ["montserrat-med", "sans"],
        "fra-bold": ["fraunces-bold", "serif"]
      },

      backgroundImage: {
        "perfume": "url('../assets/images/image-product-desktop.jpg')"
      }
    },
  },
  plugins: [],
}

