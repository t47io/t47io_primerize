import { CHUNK_NAMES } from './config.js';


const entries = (DEBUG = true) => {
  const chunkNames = CHUNK_NAMES(DEBUG);
  const entry = {
    [chunkNames.design]: [
      './applications/design/index.jsx',
    ],
    [chunkNames.vendor]: [
      'material-ui',
      'material-ui-icons',
      'react',
      'react-redux',
      'redux',
      'redux-thunk',
      'whatwg-fetch',
    ],
  };

  if (DEBUG) {
    entry.design.unshift('webpack-hot-middleware/client?reload=true');
  }
  return entry;
};


export default entries;
