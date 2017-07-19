import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import SideBar from './SideBar.jsx';


const Layout = ({
  main,
  side,
}) => (
  <div style={{ display: 'flex' }}>
    <SideBar>
      {side.map((item, i) => (
        <Route
          key={`side-${i}`}
          path={item.path}
          render={item.render}
        />
      ))}
    </SideBar>
    <div>
      <NavBar />
      {main.map((item, i) => (
        <Route
          key={`main-${i}`}
          path={item.path}
          render={item.render}
        />
      ))}
    </div>
  </div>
);

Layout.propTypes = {
  main: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    render: PropTypes.func,
  })),
  side: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    render: PropTypes.func,
  })),
};
Layout.defaultProps = {
  main: [],
  side: [],
};


export default Layout;
