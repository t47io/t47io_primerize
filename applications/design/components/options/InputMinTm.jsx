import PropTypes from 'prop-types';
import React from 'react';

import { TextField } from 'material-ui';
import { Opacity as TagIcon } from 'material-ui-icons';


const InputMinTm = ({
  value,
  onChange,
  onBlur,
}) => (
  <TextField
    name="minTm"
    value={value}
    type="number"
    placeholder="Minimum Tm"
    label={(
      <span>
        <TagIcon />
        Minimum Tm
      </span>
    )}
    helperText={(
      <span>Minimum annealing temperature <i>Tm</i> for overlapping regions. Default is <u>60.0 &deg;C</u>.</span>
    )}
    fullWidth
    onChange={onChange}
    onBlur={onBlur}
  />
);

InputMinTm.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
InputMinTm.defaultProps = {
  value: NaN,
  onChange: () => {},
  onBlur: () => {},
};


export default InputMinTm;
