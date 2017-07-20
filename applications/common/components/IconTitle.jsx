import PropTypes from 'prop-types';
import React from 'react';

import {
  Avatar,
  Typography,
} from 'material-ui';
import { withStyles } from 'material-ui/styles';

import styles from '../styles/IconTitle.js';


const IconTitle = ({
  icon: Icon,
  title,
  classes,
}) => (
  <div className={classes.row}>
    <Avatar className={classes.circle}>
      <Icon className={classes.icon} />
    </Avatar>
    <Typography
      type="subheading"
      className={classes.title}
    >
      {title}
    </Typography>
  </div>
);

IconTitle.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  title: PropTypes.string,
};
IconTitle.defaultProps = {
  icon: null,
  title: '',
};


export default withStyles(styles)(IconTitle);
