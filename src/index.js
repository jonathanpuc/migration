import React from "react";
import "normalize.css/normalize.css";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider, Styled } from "theme-ui";
import AkzidenzGrotesk from "./fonts/AkzidenzGrotesk-Regular.woff";
import AkzidenzGrotesk2 from "./fonts/AkzidenzGrotesk-Regular.woff2";
import AkzidenzGroteskOTF from "./fonts/AkzidenzGrotesk-Regular.otf";
import AkzidenzGroteskTTF from "./fonts/AkzidenzGrotesk-Regular.ttf";

import theme, { rem } from "@src/theme";
export const GlobalStyle = createGlobalStyle`


@font-face {
  font-family: "Akzidenz";
src: url(${AkzidenzGrotesk}) format("woff"),
    url(${AkzidenzGrotesk2}) format("woff2"),
    url(${AkzidenzGroteskOTF}) format("opentype"),
    url(${AkzidenzGroteskTTF}) format("truetype");
  font-style: normal;
  font-weight: 400;
}


  * {
    box-sizing: border-box;

  }

  button {
    cursor: pointer;
  }

  html {
    -webkit-print-color-adjust: exact;
    font-family: ${theme.fonts.body};
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.2;
    position: relative;
    color: ${theme.colors.black};
    overflow-x: hidden;
    background: #f9f9f9;
  }


  body {
    min-height: 100%;
  }



  ul {
    margin: 0;
    padding: 0;
  }



  button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }

  /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance:textfield;
}



ul {
  margin: 0;
}
button, div[role="button"] {
  outline: none;
}
`;

export default ({ element }) => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Styled.root>{element}</Styled.root>
    </ThemeProvider>
  </React.Fragment>
);
