import path from "path";

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@src": path.resolve(__dirname, "src"),
        "@static": path.resolve(__dirname, "static"),
      },
    },
  });
};
