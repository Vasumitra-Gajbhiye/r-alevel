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
        hero: "url(../public/hero-bg-2.png)",
        contact: "url(../public/contact.png)",
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
          500: "#22b8cf",
          700: "#1098ad",
          400: "#0078D4",
        },
        oran: {
          100: "#F59631",
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
