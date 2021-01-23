module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkness: "#2C3A47",
      },
      backgroundImage: (theme) => ({
        rick: "url('/src/images/bg2.jpg')",
      }),
      fontFamily: {
        rick: ["shlop"],
        morty: ["shlopwoff"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
