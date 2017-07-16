import { CHUNK_NAMES } from './config.js';


const entries = (DEBUG = true) => {
  const chunkNames = CHUNK_NAMES(DEBUG);
  const entry = {
    [chunkNames.main]: [
      './src/index.js',
    ],
    [chunkNames.vendor]: [
      'react',
      'react-redux',
      'redux',
      'redux-thunk',
      'whatwg-fetch',
    ],
  };

  if (DEBUG) {
    entry.main.unshift('webpack-hot-middleware/client?reload=true');
  }
  return entry;
};


export default entries;
