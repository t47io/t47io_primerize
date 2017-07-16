import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import {
//   BrowserRouter,
//   Route,
//   IndexRedirect,
// } from 'react-router';
// import { bindActionCreators } from 'redux';

import Design1D from './Design1D.jsx';
// import Design2D from './Design2D.jsx';
// import Design3D from './Design3D.jsx';


const Design = () => (
  <Design1D />
);

Design.propTypes = {

};
Design.defaultProps = {
};


const mapStateToProps = state => state;
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Design);
