/**
 * Theme config, we can add all the colors needed for the app.
 */
export default {
  colors: {
    primary: 'rgb(141, 122, 255)',
    secondary: 'rgb(255, 21, 85)',
    secondaryTransparent: 'rgba(255, 3, 100, 0.49)',
    pink: 'rgb(255, 216, 231)',
    grayLight: 'rgb(233, 233, 233)',
    body: 'rgb(249, 249, 249)',
    textPrimary: 'rgb(74, 74, 74)',
    linkHover: 'rgb(238, 238, 238)',
  },
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 2, // rem
    outerMargin: 0, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 64, // em
      md: 64, // em
      lg: 75, // em
    },
  },
};
