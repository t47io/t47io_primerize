import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { MuiThemeProvider } from 'material-ui';

import Layout from './common/components/Layout.jsx';

import routes from './routes.jsx';
import store from './store.js';


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <Layout {...routes} />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
