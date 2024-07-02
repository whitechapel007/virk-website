/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "450px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontWeight: {
      thin: "100",
      "ultra-light": "200",
      light: "300",
      regular: "400",
      medium: "500",
      "semi-bold": "600",
      bold: "700",
      "extra-bold": "800",
      black: "900",
    },
    extend: {
      fontSize: {
        "display-l": [
          "57px",
          { lineHeight: "64px", fontWeight: 700, letterSpacing: "-0.25px" },
        ],
        "text-sm": [
          "18px",
          { lineHeight: "27px", fontWeight: 700,  },
        ],
        "display-m": ["45px", { lineHeight: "52px", fontWeight: 700 }],
        "display-s": ["36px", { lineHeight: "44px", fontWeight: 700 }],
        "headline-l": ["32px", { lineHeight: "40px", fontWeight: 700 }],
        "headline-m": ["28px", { lineHeight: "36px", fontWeight: 700 }],
        "headline-s": ["24px", { lineHeight: "32px", fontWeight: 700 }],
        "title-l": ["22px", { lineHeight: "28px", fontWeight: 600 }],
        "title-m": [
          "16px",
          { lineHeight: "24px", fontWeight: 600, letterSpacing: "0.15px" },
        ],
        "title-s": [
          "14px",
          { lineHeight: "20px", fontWeight: 600, letterSpacing: "0.1px" },
        ],

        "label-l": [
          "14px",
          { lineHeight: "20px", fontWeight: 500, letterSpacing: "0.1px" },
        ],
        "label-m": [
          "12px",
          { lineHeight: "16px", fontWeight: 500, letterSpacing: "0.5px" },
        ],
        "label-s": [
          "11px",
          { lineHeight: "16px", fontWeight: 500, letterSpacing: "0.5px" },
        ],
        "body-l": [
          "16px",
          { lineHeight: "24px", fontWeight: 500, letterSpacing: "0.5px" },
        ],
        "body-m": [
          "14px",
          { lineHeight: "20px", fontWeight: 500, letterSpacing: "0.25px" },
        ],
        "body-s": [
          "12px",
          { lineHeight: "16px", fontWeight: 500, letterSpacing: "0.4px" },
        ],
        "caption-r": [
          "14px",
          { lineHeight: "22px", fontWeight: 400, letterSpacing: "0.2px" },
        ],
        "primary-h": [
          "196.82px",
          { lineHeight: "216.51px", fontWeight: 700, fontFamily: "Satoshi" },
        ],
        "primary-p": [
          "38px",
          { lineHeight: "57px", fontWeight: 500, fontFamily: "Satoshi-light" },
        ],
      },
      boxShadow: {
        light: "0px 5px 14px 0px rgba(64, 64, 64, 0.05)",
      },
      colors: {
        "off-white": "#FCFCFC",
        "off-black": "#14142B",
        "box-shadow": "0 2px 8px rgba(0,0,0,.1)",
        "transparent-white": "rgba(255, 255, 255, 0.2)",
        primary: {
          main: "#E81D2C",
          dark: "#161212",
          light: "#949494",
          bg: "#C2D4FF",
          darkmode: "#1E356B",
          50: "#F9F5FF",
          500: "#F9F7F6",
        },
        neutral: {
          10: "#001B3C",
          20: "#2F3038",
          90: "#E2E1EC",
        },
        black: {
          50: "#eaf0f6",
          300: "#5A758F",
          400: "#161212",
          700: "#000000",
        },
        gray: {
          sm: "#c1c1c1",
          100: "#c1c1c1",
          200: "#BFBFBF",
          300: "#828282",
        },
        grayscale: {
          input: "#EFF0F7",
          line: "#D9DBE9",
          label: "#6E7191",
          placehold: "#A0A3BD",
          body: "#4E4B66",
        },
        "cool-gray": {
          100: "#F7F7FC",
        },
        green: {
          100: "#EAF9DE",
        },
        red: {
          100: "#F4F2EF",
        },
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        "satoshi-light": ["Satoshi-light", "sans-serif"],
        merriweather: ["Merriweather", "sans-serif"],
        "merriweather-light": ["Merriweather-light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
