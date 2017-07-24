import PropTypes from 'prop-types';
import React from 'react';

import {
  TextField,
  Typography,
} from 'material-ui';
import { withStyles } from 'material-ui/styles';

import styles from '../styles/TextInput.js';


const TextInput = ({
  icon: Icon,
  label,
  unit,
  onChange,
  onBlur,
  classes,
  ...props
}) => (
  <div className={classes.input}>
    <TextField
      {...props}
      label={(
        <span>
          <Icon className={classes.icon} />
          <Typography
            component="span"
            className={classes.label}
          >
            {label}
          </Typography>
        </span>
      )}
      onChange={onChange}
      onBlur={onBlur}
    />
    {unit && (
      <Typography
        type="body2"
        component="i"
        className={classes.unit}
      >
        {unit}
      </Typography>
    )}
  </div>
);

TextInput.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  label: PropTypes.string,
  unit: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
TextInput.defaultProps = {
  icon: null,
  label: '',
  unit: '',
  onChange: () => {},
  onBlur: () => {},
};


export default withStyles(styles)(TextInput);
