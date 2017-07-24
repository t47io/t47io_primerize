const entries = (DEBUG = true) => {
  const entry = {
    main: [
      './applications/index.jsx',
    ],
    vendor: [
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
    entry.main.unshift('webpack-hot-middleware/client?reload=true');
  }
  return entry;
};


export default entries;
