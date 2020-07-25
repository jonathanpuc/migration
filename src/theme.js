export const pxToRem = (pxSize, rootSize = 16) => {
  return (pxSize / rootSize).toFixed(2);
};
export const rem = (pxSize) => {
  return `${pxToRem(pxSize)}rem`;
};

const theme = {
  fonts: {
    body: "'Akzidenz', sans-serif",
  },
  colors: {
    green: "#009606",
    white: "#FFFFFF",
    black: "#000000",
  },

  breakpoints: [
    "580px", //0
    "920px", //1
    "1176px", //2
    "1478px", //3
    "1842px", //4
  ],

  //Misc
  styles: {
    root: {
      backgroundColor: "#F9F9F9",
      textRendering: "optimizeLegibility !important",
      "-webkit-font-smoothing": "antialiased !important",
    },
  },
};

export default theme;

// buttons need to match link size
