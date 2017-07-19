import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import { compose } from 'redux';

import { withStyles } from 'material-ui/styles';
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth';

import NavBar from './NavBar.jsx';
import SideBar from './SideBar.jsx';

import styles from '../styles/Layout.js';


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }
  handleDrawerToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { main, side, width, classes } = this.props;
    const { open } = this.state;
    const docked = isWidthUp('md', width);

    return (
      <div className={classes.layout}>
        <NavBar onToggle={this.handleDrawerToggle} />

        <SideBar
          docked={docked}
          open={docked || open}
          onClose={this.handleDrawerClose}
        >
          {side.map((item, i) => (
            <Route
              key={`side-${i}`}
              path={item.path}
              render={item.render}
            />
          ))}
        </SideBar>

        <div className={classes.content}>
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
  }
}

Layout.propTypes = {
  main: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    render: PropTypes.func,
  })),
  side: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    render: PropTypes.func,
  })),
  width: PropTypes.string,
};
Layout.defaultProps = {
  main: [],
  side: [],
  width: '',
};

export default compose(
  withStyles(styles),
  withWidth()
)(Layout);
