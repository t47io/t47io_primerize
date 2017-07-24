import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


const loaders = (DEBUG = true) => {
  const loader = [
    {
      test: /\.js(x)?$/i,
      exclude: /node_module/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
        },
      },
    },
    {
      test: /\.scss$/i,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?importLoaders=1',
          {
            loader: 'postcss-loader',
            options: { plugins: () => ([autoprefixer]) },
          },
          'resolve-url-loader?-sourceMap',
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      }),
    },
  ];

  if (!DEBUG) {
    loader.unshift({
      test: /redux-logger/,
      use: { loader: 'null-loader' },
    });
  }
  return loader;
};


export default loaders;
