import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import { MuiThemeProvider } from 'material-ui';

import routes from './routes.jsx';
import store from './store.js';


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <div>
          <div>
            <Route path="/design" render={routes.side.design} />
            <Route path="/result" render={routes.side.design} />
            <Route path="/tutorial" render={routes.side.tutorial} />
            <Route path="/about" render={routes.side.about} />
          </div>
          <div>
            <Route path="/design" render={routes.main.design} />
            <Route path="/result" render={routes.main.result} />
            <Route path="/tutorial" render={routes.main.tutorial} />
            <Route path="/about" render={routes.main.about} />
          </div>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
