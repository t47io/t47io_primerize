import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui';

import Design from './design/containers/index.jsx';
import store from './store.js';


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Design />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
