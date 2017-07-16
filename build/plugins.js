import glob from 'glob';
import webpack from 'webpack';

import BabiliPlugin from 'babili-webpack-plugin';
import BrotliPlugin from 'brotli-webpack-plugin';
import CommonShakePlugin from 'webpack-common-shake';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import OptimizeJsPlugin from 'optimize-js-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import ZopfliPlugin from 'zopfli-webpack-plugin';

import {
  ROOT_PATH,
  CHUNK_FILE_NAME,
  CHUNK_NAMES,
  MANIFEST_JS,
  HTML_TEMPLATE,
} from './config.js';


const plugins = (DEBUG = true) => {
  const chunkNames = CHUNK_NAMES(DEBUG);

  const plugin = [
    new webpack.LoaderOptionsPlugin({
      minimize: !DEBUG,
      debug: DEBUG,
    }),
    new HtmlWebpackPlugin({
      chunks: [chunkNames.main, chunkNames.vendor, chunkNames.manifest],
      template: HTML_TEMPLATE,
      filename: `${ROOT_PATH}/public/design.html`,
      inject: false,
      chunk: chunkNames.main,
      manifest: MANIFEST_JS,
      debug: DEBUG,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: chunkNames.vendor,
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
      name: chunkNames.manifest,
      filename: MANIFEST_JS,
    }),
    new ManifestPlugin(),
    new CommonShakePlugin.Plugin(),
    new BabiliPlugin(),
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
    new OptimizeJsPlugin({ sourceMap: false }),
    new BrotliPlugin({ test: /\.(html|js|css)$/i }),
    new ZopfliPlugin({
      test: /\.(html|js|css)$/i,
      algorithm: 'zopfli',
      deleteOriginalAssets: true,
    }),
  ];
};


export default plugins;
