import path from 'path';

import { PUBLIC_PATH } from '../server/env.js';


export const ROOT_PATH = path.join(PUBLIC_PATH, '../');
export const MANIFEST_JS = '012345.min.js';
export const CHUNK_FILE_NAME = (DEBUG = true, ext = 'js') => (
  DEBUG ? `[name].${ext}` : `[chunkhash].min.${ext}`
);
export const ASSET_FILE_NAME = (dir = '') => (`${dir}/[hash:6].[ext]`);

export const HTML_MINIFIER = {
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
};
export const HTML_TEMPLATE = `${ROOT_PATH}/applications/index.html`;
