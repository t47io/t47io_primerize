import PropTypes from 'prop-types';
import React from 'react';

import {
  TextField,
  Typography,
} from 'material-ui';
import { withStyles } from 'material-ui/styles';

import styles from '../styles/TextInput.js';


const TextInput = ({
  name,
  value,
  type,
  icon: Icon,
  label,
  unit,
  placeholder,
  helperText,
  required,
  disabled,
  multiline,
  fullWidth,
  rows,
  rowsMax,
  onChange,
  onBlur,
  classes,
}) => (
  <div className={classes.input}>
    <TextField
      name={name}
      value={value}
      type={type}
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
      placeholder={placeholder}
      helperText={helperText}
      required={required}
      disabled={disabled}
      multiline={multiline}
      fullWidth={fullWidth}
      rows={rows}
      rowsMax={rowsMax}
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
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  type: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  label: PropTypes.string,
  unit: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.node,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  fullWidth: PropTypes.bool,
  rows: PropTypes.number,
  rowsMax: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
TextInput.defaultProps = {
  name: '',
  value: '',
  type: 'text',
  icon: null,
  label: '',
  unit: '',
  placeholder: '',
  helperText: null,
  required: false,
  disabled: false,
  multiline: false,
  fullWidth: true,
  rows: 1,
  rowsMax: 1,
  onChange: () => {},
  onBlur: () => {},
};


export default withStyles(styles)(TextInput);
