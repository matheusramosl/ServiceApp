const plugin = require("tailwindcss/plugin");
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{html,js}"],
  
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
        xs: "320px",
      },
      width: {
        138: "138px",
        429: "429px",
        480: "480px",
        343: "343px"
      },
      height: {
        53: "53px",
        78: "78px",
        79: "79px",
        98: "98px",
        237: "237px",
        543: "543px",
        524: "524px"
      },
      margin: {
        24: "24px",
        26: "26px",
        40: "40px",
        50: "50px",
        120: "120px",
        200: "200px",
        150: "150px"
      },
      animation: {
        zoomOutDown: "zoomOutDown 1s ease-in forwards",
        fadeIn: "fadeIn .75s ease-in forwards",
        bounceIn: "bounceIn 1s ease-in forwards",
        flipIn: "flipIn .75s ease-in forwards",
        flipOut: "flipOut 1s ease-in forwards",
        slideInLeft: "slideInLeft .75s ease-in forwards",
        slideInRight: "slideInRight 1s linear forwards",
        slideInDown: "slideInDown 1s ease-in forwards",
        slideInTop: "slideInTop 1s ease-in forwards",
        zoomIn: "zoomIn .35s ease-in forwards",
        rotateY: "rotateY 1s  ease-in forwards",
        rotateX: "rotateX 1s  ease-in forwards",
        "spin-slow": "spin 3s linear infinite",
        "ping-slow":
          "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite; @keyframes ping {75%, 100% { transform: scale(2); opacity: 0; } }",
        glowing: "glowing 20s linear infinite",
      },
      keyframes: {
        zoomOutDown: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "40%": { transform: "scale(0.475) translateY(-60px)", opacity: 1 },
          "100%": { transform: "scale(0.1) translateY(2000px)", opacity: 0 },
        },
        bounceIn: {
          "0%": { transform: "scale(0.1)", opacity: 0 },
          "60%": { transform: "scale(1.2)", opacity: 1 },
          "100%": { transform: "scale(1)" },
        },
        flipIn: {
          "0%": { transform: "rotateY(-90deg)", opacity: 0 },
          "100%": { transform: "rotateY(0deg)", opacity: 1 },
        },
        flipOut: {
          "0%": { transform: "rotateY(0deg)", opacity: 1 },
          "100%": { transform: "rotateY(90deg)", opacity: 0 },
        },
        slideInLeft: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideInRight: {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideInDown: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        slideInTop: {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(.5)" },
          "100%": { transform: "scale(1)" },
        },
        glowing: {
          "0%": { backgroundPosition: "0 0" },
          "50%": { backgroundPosition: "400% 0" },
          "100%": { backgroundPosition: "0 0" },
        },
        rotateY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        rotateX: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(360deg)" },
        },
      },
      fontFamily: {
        shadow: ["Shadows Into Light", "cursive"],
        robotocond: ["Roboto Condensed", "sans-serif"],
        dinbold: ["DINBold", "sans-serif"],
        dinlight: ["D-DIN", "sans-serif"],
        dinitalic: ["DINItalic", "sans-serif"],
        asap: ["Asap", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ['Inter', 'sans'],
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      spacing: {
        128: "32rem",
        160: "40rem",
        240: "45rem",
      },
      colors: {
        drummond: {
          primary: "#A21A17",
          error: "#FFF3F3",
          success: "#ECFCF0",
          neutral: {
            50: "#FCFCFC",
            70: "#757575",
            90: "#424242",
            100: "#F0F1F2",
            200: "#CFD1D3",
            300: "#878787",
            400: "#3a3a3a",
          },
          secondary: {
            50: "#27348B",
            100: "#E83368",
            200: "#63C3D1",
            300: "#CC3F3C",
            400: "#8E0502",
            500: "#EBFAF0",
            600: "#1343ED",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#A21A17",
          neutral: "#F0F1F2",
          "base-100": "#ffffff",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    // darkTheme: "dark",
  },
  darkMode: "class"
});