import PropTypes from 'prop-types';
import React from 'react';

import { Drawer } from 'material-ui';
import { withStyles } from 'material-ui/styles';

import styles from '../styles/SideBar.js';


const SideBar = ({
  docked,
  open,
  onClose,
  classes,
  children,
}) => (
  <Drawer
    docked={docked}
    open={open}
    onRequestClose={onClose}
    classes={{ paper: classes.paper }}
    className={classes.sideBar}
  >
    {children}
  </Drawer>
);

SideBar.propTypes = {
  docked: PropTypes.bool,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
SideBar.defaultProps = {
  docked: false,
  open: false,
  onClose: () => {},
};


export default withStyles(styles)(SideBar);
