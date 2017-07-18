import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
} from 'react-router-dom';
// import { bindActionCreators } from 'redux';

import Design1D from './Design1D.jsx';
import Design2D from './Design2D.jsx';
import Design3D from './Design3D.jsx';


const Design = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/1d`} component={Design1D} />
    <Route path={`${match.url}/2d`} component={Design2D} />
    <Route path={`${match.url}/3d`} component={Design3D} />
  </Switch>
);

Design.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};
Design.defaultProps = {
  match: {
    url: '',
  },
};


const mapStateToProps = state => (state.design);
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Design);
