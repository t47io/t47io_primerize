import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRedirect } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './main';
import Design1D from './containers/Design1D';
import Design2D from './containers/Design2D';

import store from './states/store';


injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store} >
    <MuiThemeProvider>
      <Router history={browserHistory} >
        <Route path="/" component={Main} >
          <IndexRedirect to="/1d" />
          <Route path="/1d" component={Design1D} />
          <Route path="/2d" component={Design2D} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
