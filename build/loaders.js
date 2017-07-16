import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import { ASSET_FILE_NAME } from './config.js';


const loaders = (DEBUG = true, SSR = false) => {
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
    {
      test: /\.(png|jpg|gif)$/i,
      use: {
        loader: 'url-loader',
        options: {
          limit: 25600,
          name: ASSET_FILE_NAME('image'),
        },
      },
    },
  ];

  if (SSR) {
    loader.unshift({
      test: /web-animations-js/,
      use: { loader: 'null-loader' },
    });
  } else if (!DEBUG) {
    loader.unshift({
      test: /redux-logger/,
      use: { loader: 'null-loader' },
    });
  }
  return loader;
};


export default loaders;
