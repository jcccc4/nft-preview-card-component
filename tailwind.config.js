/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#0D192C",
        card: "#15263F",
        text: "#8BACD9",
        icon: "hsl(178, 100%, 50%)",
        line: "#2E405A",
      },
      height: {
        card: "543px",
        "card-dsk": "596px",
        eth: "278px",
        "eth-dsk": "302px",
        "eth-icon": "11px",
        hero:"33px"
      },
      width: {
        card: "327px",
        "card-dsk": "350px",
        eth: "278px",
        "eth-dsk": "302px",
        "eth-icon": "11px",
        hero:"33px"
      },
      fontFamily: {
        outfit: "Outfit",
      },
      fontSize: {
        title: ["22px", "28px"],
        description: ["18px", "26px"],
        hero:["15px","19px"],
        "hero-dsk":["16px","20px"],
      },
      margin: {
        eth: "6.48px",
        clk: "7.7px",
      },borderRadius:{
        card: "15px",
        img: "8px"
      }
    },
  },
  plugins: [],
};
