import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(../public/home_img/hero-bg-2.png)",
        contact: "url(../public/contact/contact.png)",
        join: "url(../public/home_img/Rectangle-11.png)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        purp: {
          100: "#CEA2D7",
          200: "#A348A6",
          300: "#9F63C4",
          400: "#674AB3",
        },
        cy: {
          100: "#e3fafc",
          200: "#E7F5FF",
          300: "#A5D8FF",
          500: "#22b8cf",
          700: "#1098ad",
          400: "#0078D4",
        },
        oran: {
          100: "#F59631",
        },
        themBlue: {
          100: "#a4b7d7",
          200: "#5f8cdb",
          300: "#1b4a9b",
        },
      },
      screens: {
        md2: "560px",
        xs: "460px",
        xxs: "370px",
      },
    },
  },
  plugins: [],
};
export default config;
