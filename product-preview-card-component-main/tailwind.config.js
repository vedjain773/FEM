/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "perfume": "url('../assets/images/image-product-desktop.jpg')"
      },

      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        "cream": "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
        "white": "hsl(0, 0%, 100%)",
      },

      fontFamily: {
        "mon-reg": ["mon-reg"],
        "mon-med": ["mon-med"],
        "fra-bold": ["fra-bold"]
      }
    },
  },
  plugins: [],
}

