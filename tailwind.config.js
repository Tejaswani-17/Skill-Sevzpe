/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        grey: "#f3f3f3",
        dark: "#191a23",
        dimgray: {
          "100": "#4d4d57",
          "200": "rgba(77, 77, 87, 0.09)",
        },
        black: "#000",
        gray: "#898989",
        yellowgreen: "#b9ff66",
      },
      spacing: {},
      fontFamily: {
        p: "'Space Grotesk'",
      },
      borderRadius: {
        "26xl": "45px",
        sm: "14px",
        "10xl": "29px",
        "6xs": "7px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      lg: "18px",
      "21xl": "40px",
      "13xl": "32px",
      "5xl": "24px",
      "11xl": "30px",
      "41xl": "60px",
      "29xl": "48px",
      "17xl": "36px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
