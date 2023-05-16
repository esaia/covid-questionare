export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        2: "2 2 0%",
      },
      colors: {
        brown: "#232323",
      },

      keyframes: {
        wiggle: {
          "0%": { transform: "translate(-528px, 30px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
      },
    },

    fontFamily: {
      Helvetica: "Helvetica",
    },
  },
  plugins: [],
};
