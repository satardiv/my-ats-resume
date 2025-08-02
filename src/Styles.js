// Layout Constants
export const LAYOUT = {
  mainColumnWidth: "60%",
  highlightColumnWidth: "40%",
  mainPadding: "30px 10px 30px 30px",
  highlightPadding: "108px 40px 40px 20px",
};

// Typography Constants
export const TYPOGRAPHY = {
  fontFamily: "Helvetica",
  sizes: {
    h1: "16px",
    h2: "10px",
    body: "8px",
    bodySmall: "7px",
  },
  lineHeight: {
    normal: "12px",
    tight: "10px",
  },
  fontWeights: {
    normal: "normal",
    semibold: "semibold", 
    bold: "600",
  },
};

// Color Palette
export const COLORS = {
  primary: "#006666",
  secondary: "#1AB0B3",
  text: {
    primary: "#3E3E3E",
    white: "#fff",
    muted: "#D2D2D2",
  },
  borders: {
    light: "#ccc",
    white: "#fff",
  },
  background: {
    white: "#fff",
    primary: "#006666",
  },
};

// Spacing Constants
export const SPACING = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "12px",
  xxxl: "20px",
  xxxxl: "28px",
};

// Icon Configuration
export const ICONS = {
  size: 12,
  stroke: COLORS.text.muted,
  viewBox: "0 0 24 24",
};

// Legacy export for backward compatibility
export const style = {
  icon: ICONS,
  h1: TYPOGRAPHY.sizes.h1,
  h2: TYPOGRAPHY.sizes.h2,
  bodyFontSize: TYPOGRAPHY.sizes.body,
  bodyFontSizeSm: TYPOGRAPHY.sizes.bodySmall,
  bodyFontColor: COLORS.text.primary,
  colors: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
  },
};

// Button Styles
export const BUTTON_STYLES = {
  download: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    borderRadius: "4px",
    textDecoration: "none",
    display: "inline-block",
    cursor: "pointer",
  },
};

// PDF Viewer Styles
export const PDF_VIEWER_STYLES = {
  container: {
    width: "80vw",
    height: "80vh", 
    display: "flex",
    overflow: "hidden",
  },
};
