import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import {
  Route,
  Router,
} from 'preact-router';

import Design1D from './Design1D.jsx';
import Design2D from './Design2D.jsx';
import Design3D from './Design3D.jsx';

import NavBar from '../../common/components/NavBar.jsx';
import SideBar from '../../common/components/SideBar.jsx';


const Design = () => (
  <div>
    <NavBar />
    <SideBar />

    <div className="container">
      <Router>
        <Route component={Design1D} path="/design/1d" default />
        <Route component={Design2D} path="/design/2d" />
        <Route component={Design3D} path="/design/3d" />
      </Router>
    </div>
  </div>
);

Design.propTypes = {

};
Design.defaultProps = {
};


const mapStateToProps = state => ({ data: state.data });
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Design);
