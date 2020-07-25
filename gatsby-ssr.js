import React from "react";
import "babel-polyfill";
import "normalize.css";

import ssrWrapper from "@src/rootSSR";
import pageWrapper from "@src";

export const wrapRootElement = ssrWrapper;
export const wrapPageElement = pageWrapper;
