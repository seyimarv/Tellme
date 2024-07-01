/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      primary: "#181818", // Primary background
      secondary: "#000000", // Secondary background
      tertiary: "#282828", // Tertiary background
      quaternary: "#333333", // Quaternary background
      highlight: "#B3DFF1", // Highlight color
      textPrimary: "#FFFFFF", // Primary text color
      textSecondary: "#FAFAFA", // Secondary text color
      accent: "#D4AF37", // Accent color (used for textTertiary)
      info: "#33A9DA", // Info text color (used for textToggle)
      textBoldAccent: "#66BEE3", // Bold secondary text color
      textLight: "#FAFAFA", // Light text color (merged several white variants)
      textCard: "#FFFFFF", // Card text color
      button: "#D4AF37", // Button background color
      background: "#131313", // Overall background color (theme)
      primaryDark: "#2B2B2B", // Primary dark color
      secondaryDark: "#5F5F5F", // Secondary dark color
      active: "#006792", // Active color
      danger: "#FF5B6B", // Red color
      success: "#39BA66", // Green color
      layer: "#152A59", // Layer color
      calendar: "#3057AE", // Calendar color
      successLight: "#A9D3AB", // Light green color
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
      serif: ["Ubuntu", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        primary: "#181818", // Example: a shade of blue
      },
      textColor: {
        primary: "#FFFFFF", // Primary text color
        secondary: "#FAFAFA", // Secondary text color
        accent: "#D4AF37", // Accent color
        info: "#33A9DA", // Info text color
        boldAccent: "#66BEE3", // Bold secondary text color
        light: "#FAFAFA", // Light text color
        card: "#FFFFFF",
        dark: "#5F5F5F",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0rem 1rem", // Default padding for all breakpoints
          sm: "0rem 2rem", // Custom padding for small screens and up
          lg: "0rem 4rem", // Custom padding for large screens and up
          xl: "0rem 5rem", // Custom padding for extra-large screens
          "2xl": "0rem 6rem", // Custom padding for 2x-large screens
        },
      },
    },
  },
  plugins: [],
};
