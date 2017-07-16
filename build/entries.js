import { CHUNK_NAMES } from './config.js';


const entries = (DEBUG = true) => {
  const chunkNames = CHUNK_NAMES(DEBUG);
  const entry = {
    [chunkNames.design]: [
      './applications/design/index.jsx',
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
    entry.design.unshift('webpack-hot-middleware/client?reload=true');
    entry.design.unshift('preact/devtools');
  }
  return entry;
};


export default entries;
