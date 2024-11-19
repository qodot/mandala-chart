import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#2F7D47",
      secondary: "#8FBF92",
      tertiary: "#D4E3D3",
      quaternary: "#F1F7F0",
      black: "#000000",
      white: "#FFFFFF",
      transparent: "transparent",
    },
  },
  plugins: [],
};
export default config;
