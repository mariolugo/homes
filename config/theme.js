/**
 * Theme config
 */
export default {
  colors: {
    primary: "rgb(141, 122, 255)",
    secondary: "rgb(255, 21, 85)",
    pink: "rgb(255, 216, 231)",
    grayLight: "rgb(233, 233, 233)",
    body: "rgb(249, 249, 249)",
  },
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 0, // rem
    outerMargin: 0, // rem
    mediaQuery: "only screen",
    container: {
      sm: 46, // rem
      md: 64, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
};
