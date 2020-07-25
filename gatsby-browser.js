import "babel-polyfill";
import "normalize.css";

import browserWrapper from "@src/rootBrowser";
import pageWrapper from "@src";

export const wrapRootElement = browserWrapper;
export const wrapPageElement = pageWrapper;

export const onRouteUpdate = ({ prevLocation }) => {
  if (prevLocation !== null) {
    const skipLink = document.querySelector("#reach-skip-nav");
    if (skipLink) {
      skipLink.focus();
    }
  }
};
