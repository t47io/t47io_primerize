const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
});


module.exports = {
  entry: "./src/index.js",
  output: {
    path: `$(__dirname)/build`,
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /.js?$/,
        loader: "eslint-loader",
        include: `$(__dirname)/src`
      }
    ],
    loaders: [
      {
        test: /.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig
  ],
  devServer: {
    inline: true,
    port: 9000,
    historyApiFallback: true
  }
};
