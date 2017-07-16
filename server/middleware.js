import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import bodyParser from 'body-parser';
import compression from 'compression';
import expressStatic from 'express-static-gzip';
import favicon from 'serve-favicon';
import helmet from 'helmet';
import path from 'path';
import userAgent from 'express-useragent';

import webpackConfig from '../webpack.config.js';
import {
  PUBLIC_PATH,
  DEBUG,
} from './env.js';
import { FILE_NAMES } from './config.js';


const middlewares = [
  DEBUG ? compression() : [
    '/',
    expressStatic(`${PUBLIC_PATH}/`, {
      enableBrotli: true,
      indexFromEmptyFile: false,
    }),
  ],
  favicon(path.join(PUBLIC_PATH, FILE_NAMES.FAVICO)),
  helmet(),
  bodyParser.json(),
  userAgent.express(),
];


let webpackMiddleware = null;
if (DEBUG) {
  const compiler = webpack(webpackConfig);
  webpackMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    index: '/',

    noInfo: false,
    quiet: false,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 2500,
      poll: true,
    },
    serverSideRender: false,
    stats: { colors: true },
  });

  middlewares.push(webpackMiddleware);
  middlewares.push(webpackHotMiddleware(compiler));
}


export default middlewares;
export { webpackMiddleware };
