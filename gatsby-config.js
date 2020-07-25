const config = require("./site.config");
module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `babel-plugin-styled-components`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
  ],
};
