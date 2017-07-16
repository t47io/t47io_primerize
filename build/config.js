import path from 'path';

import { PUBLIC_PATH } from '../server/env.js';


export const ROOT_PATH = path.join(PUBLIC_PATH, '../');
export const MANIFEST_JS = 'f.012345.min.js';
export const CHUNK_FILE_NAME = (DEBUG = true, ext = 'js') => (
  DEBUG ? `[name].${ext}` : `[name].[chunkhash].min.${ext}`
);
export const ASSET_FILE_NAME = (dir = '') => (`${dir}/[hash:6].[ext]`);

const CHUNK_NAME = (chunk, DEBUG = true) => (
  DEBUG ? chunk : chunk.slice(0, 1)
);
export const CHUNK_NAMES = (DEBUG = true) => ({
  design: CHUNK_NAME('design', DEBUG),
  vendor: CHUNK_NAME('vendor', DEBUG),
  manifest: DEBUG ? 'manifest' : 'f',
});

export const HTML_MINIFIER = {
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
};
export const HTML_TEMPLATE = `${ROOT_PATH}/applications/index.html`;
