const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: '$(__dirname)/build',
    publicPath: '/',
  },

  devtool: 'cheap-module-eval-source-map',
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },

  module: {
    loaders: [
      {
        test: /.js?$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
  ],

  devServer: {
    inline: true,
    port: 9000,
    historyApiFallback: true,
  },
};
