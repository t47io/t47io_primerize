import PropTypes from 'prop-types';
import React from 'react';

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from 'material-ui';
import {
  Menu as MenuIcon,
  Pets as LogoIcon,
} from 'material-ui-icons';
import { withStyles } from 'material-ui/styles';

import GitHubIcon from './GitHubIcon.jsx';

import styles from '../styles/NavBar.js';


const NavBar = ({
  onToggle,
  classes,
}) => (
  <AppBar
    position="fixed"
    className={classes.navBarShift}
  >
    <Toolbar>
      <IconButton
        color="contrast"
        onClick={onToggle}
        className={classes.navMenuIcon}
      >
        <MenuIcon />
      </IconButton>
      <IconButton
        color="contrast"
        onClick={onToggle}
        className={classes.navLogoIcon}
      >
        <LogoIcon />
      </IconButton>
      <Typography
        color="inherit"
        type="title"
        noWrap
        className={classes.title}
      >
        Primerize
      </Typography>
      <div className={classes.grow} />
      <IconButton
        title="GitHub"
        color="contrast"
        component="a"
        href="https://github.com/t47io/t47io_primerize"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

NavBar.propTypes = {
  onToggle: PropTypes.func,
};
NavBar.defaultProps = {
  onToggle: () => {},
};


export default withStyles(styles)(NavBar);
