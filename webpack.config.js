import colors from 'colors';

import entries from './build/entries.js';
import loaders from './build/loaders.js';
import plugins from './build/plugins.js';
import { CHUNK_FILE_NAME } from './build/config.js';
import { PUBLIC_PATH } from './server/env.js';


const DEBUG = !(process.argv.includes('--production') || (process.env.BABEL_ENV === 'production') || process.env.PM2_USAGE);
console.log(colors.magenta('*********************************'));
console.log(`${DEBUG ? ' ' : ''}${colors.blue('DEBUG')} mode applied: ${DEBUG ? colors.green(DEBUG) : colors.red(DEBUG)} => ${colors.yellow(DEBUG ? 'DEV' : 'PROD')}`);
console.log(colors.magenta('*********************************'));


const config = {
  entry: entries(DEBUG),
  output: {
    filename: CHUNK_FILE_NAME(DEBUG),
    chunkFilename: CHUNK_FILE_NAME(DEBUG),
    hashDigestLength: 6,
    hotUpdateChunkFilename: '[name].[hash].json',
    path: PUBLIC_PATH,
    publicPath: '/',
  },

  devtool: `cheap-module-${DEBUG ? 'eval-' : ''}source-map`,

  module: { rules: loaders(DEBUG) },
  plugins: plugins(DEBUG),
};


export default config;
