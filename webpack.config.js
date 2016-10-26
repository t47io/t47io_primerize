const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: `$(__dirname)/build`,
    publicPath: "/"
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
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body',
    })
  ],
  devServer: {
    inline: true,
    port: 9000,
    historyApiFallback: true
  }
};
