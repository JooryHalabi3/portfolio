// ==========================================
// Portfolio Design System
// Joory Halabi Portfolio
// ==========================================

export const theme = {
  colors: {
    background: "#081B38",
    surface: "#10284D",
    surfaceLight: "#163763",

    primary: "#D6BA74",
    primaryLight: "#E8D6A2",
    primaryDark: "#B6924E",

    white: "#FFFFFF",

    text: "#FFFFFF",
    textSecondary: "#AAB6C8",
    textMuted: "#73829B",

    border: "rgba(214,186,116,.15)",

    success: "#6FCF97",
    danger: "#EB5757",
  },

  radius: {
    sm: "10px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    full: "9999px",
  },

  shadow: {
    glow:
      "0 0 80px rgba(214,186,116,.12)",

    card:
      "0 20px 60px rgba(0,0,0,.35)",

    soft:
      "0 10px 30px rgba(0,0,0,.15)",
  },

  container: {
    width: "1280px",
  },

  animation: {
    fast: "250ms",
    normal: "400ms",
    slow: "700ms",
  },
} as const;