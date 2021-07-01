const theme = {
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 1.5, // rem
    mediaQuery: "only screen",
    container: {
      sm: 0, // rem
      md: 64, // rem
      lg: 68 // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 80.3 // em
    }
  },
  font: {
    base: "'DM Sans', sans-serif",
    headings: "'Minipax', serif"
  },
  fontSize: {
    base: 19,
    lead: 22,
    h1: 56,
    h2: 38,
    h3: 22,
    h4: 18,
    h5: 16
  },
  fontWeight: {
    light: 200,
    base: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  colors: {
    primary: "#ff4747",
    secondary: "#6068ee",
    tertiary: "#3F5FBF",
    dark: "#252628",
    accent: "#fdebd1",
    gray: "rgba(119, 123, 132, 0.8)",
    black: "#00030e",
    white: "#ffffff",
    odd: "#f7f7f7",
    background: "#f7f7f7"
  },
  transition: {
    base: "0.3s ease"
  }
}

export default theme
