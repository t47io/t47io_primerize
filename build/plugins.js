import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import {
  ROOT_PATH,
  CHUNK_FILE_NAME,
  MANIFEST_JS,
  HTML_TEMPLATE,
} from './config.js';


const plugins = (DEBUG = true) => {
  const plugin = [
    new webpack.LoaderOptionsPlugin({
      minimize: !DEBUG,
      debug: DEBUG,
    }),
    new HtmlWebpackPlugin({
      chunks: ['main', 'vendor', 'manifest'],
      template: HTML_TEMPLATE,
      filename: `${ROOT_PATH}/public/index.html`,
      inject: false,
      chunk: 'main',
      manifest: MANIFEST_JS,
      debug: DEBUG,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: CHUNK_FILE_NAME(DEBUG),
    }),
    new ExtractTextPlugin({
      filename: CHUNK_FILE_NAME(DEBUG, 'css'),
      allChunks: true,
    }),
    new LodashModuleReplacementPlugin(),
  ];

  if (DEBUG) {
    return [
      new webpack.HotModuleReplacementPlugin(),
      ...plugin,
      new webpack.NamedModulesPlugin(),
    ];
  }
  return [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        BABEL_ENV: '"production"',
      },
    }),
    ...plugin,
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: MANIFEST_JS,
    }),
    new UglifyJsPlugin({
      beautify: false,
      comments: false,
      sourceMap: false,
      compress: {
        warnings: false,
        drop_console: true,
      },
      mangle: {
        except: ['$'],
        screw_ie8: true,
        keep_fnames: false,
      },
    }),
  ];
};


export default plugins;
