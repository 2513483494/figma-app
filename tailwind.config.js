module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_600: "#777777",
        gray_500: "#979797",
        bluegray_100: "#cfd5de",
        gray_300: "#dadfe6",
        gray_100: "#f3f5f8",
        black_900_d8: "#000000d8",
        bluegray_800: "#32394b",
        black_900_33: "#00230b33",
        black_900: "#000000",
        bluegray_300: "#8697ad",
        yellow_900: "#fb8424",
        light_blue_A700: "#006eff",
        white_A700: "#ffffff",
      },
      fontFamily: { pingfangsc: "PingFang SC" },
      borderRadius: { radius8: "8px", radius12: "12px", radius50: "50%" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
