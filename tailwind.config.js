const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: [
      "./public/index.html",
      "./src/**/*.{svelte,ts,js,html}",
      "./src/*.{svelte,ts,js,html}",
    ],
    options: {
      defaultExtractor: (content) => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      background: "#101010",
    },
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen-Sans",
          "Ubuntu",
          "Cantarell",
          "Helvetica Neue",
          "sans-serif",
        ],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
