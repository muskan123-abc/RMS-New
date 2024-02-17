/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "24px",
      },
    },
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif",
        inter: "Inter, sans-serif",
      },
      screens: {
        "custom-sm": "480px",
        "custom-2xl": "1350px",
        "custom-3xl": "1400px",
        "custom-4xl": "1440px",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateY(10%)" },
        },
      },
      colors: {
        white: "#fff",
        "light-white": "#FFFFFF0A",
        black: "#000",
        "light-yellow": "#F2CD75",
        "dark-yellow": "#A97424",
        gray: "#6C757D",
        "light-gray": "#BBBAB9",
        "dark-gray": "#FFFFFF4D",
        "	graphite-gray": "#2c271f",

      },
      fontSize: {
        // we  can use  default fonts for 12px{xs},14px{sm},16px{base},20px{xl},24px{2xl} font size
        xxl: "22px",
        "3xl": "40px",
        "4xl": "55px",
      },
      boxShadow: {
        modal: "0px 15px 30px 0px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        sm: "8px",
        base: "10px",
      },
      backgroundImage: {
        gradient: "linear-gradient(146.59deg, #F2CD75 -0.66%, #A97424 98.99%)",
        "homepage-hero-bg":
          "url('../src/assets/images/webp/homepage_hero_bg_img.webp')",
        "common-bg-image": "url('/src/assets/images/webp/HeroSection_bg.webp')",
        "my-account-bg":
          "url('../src/assets/images/myaccount/HeroSection_bg.webp')",
      },
      lineHeight: {
        150: "150%", // Custom line height
        140: "140%", // Custom line height
        160: "160%", // Custom line height
        158: "158%", // Custom line height
        // You can add more custom line heights here as needed
      },
    },
  },
};
