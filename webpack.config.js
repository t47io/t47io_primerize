var path = require("path"),
    webpack = require("webpack");

module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: ["react-hot", "babel-loader"],
        exclude: /node_modules/,
      }
    ]
  },
};
