import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRedirect } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { blue500, amber500, limea400, deeporange500, white, transparent } from 'material-ui/styles/colors';


import Main from './main';
import Design1D from './containers/design/Design1D';
import Design2D from './containers/design/Design2D';
import Design3D from './containers/design/Design3D';
import ResultLanding from './containers/result/ResultLanding';
import { ResultPageSmart, onResultEnter } from './containers/result/ResultPage';

import { store, persistor } from './states/store';


injectTapEventPlugin();
const muiTheme = getMuiTheme({
  ...darkBaseTheme,
  palette: {
    ...(darkBaseTheme.palette),
    primary1Color: blue500,
    primary2Color: blue500,
    shadowColor: transparent
  },
  appBar: {
    ...(darkBaseTheme.appBar),
    textColor: white
  }
});


ReactDOM.render(
  <Provider store={store} persistor={persistor} >
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory} >
        <Route path="/" component={Main} >
          <IndexRedirect to="/1d" />
          <Route path="/1d" component={Design1D} />
          <Route path="/2d" component={Design2D} />
          <Route path="/3d" component={Design3D} />

          <Route path="/result" component={ResultLanding} />
          <Route path="/result/:jobId" component={ResultPageSmart} onEnter={onResultEnter} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
