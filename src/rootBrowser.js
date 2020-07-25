import React from "react";
import { ThemeProvider, Styled } from "theme-ui";
import theme from "@src/theme";

export default ({ element }) => (
  <ThemeProvider theme={theme}>
    <Styled.root>{element} </Styled.root>
  </ThemeProvider>
);
