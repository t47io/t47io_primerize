import PropTypes from 'prop-types';
import React from 'react';

import { Opacity as TagIcon } from 'material-ui-icons';

import TextInput from '../../../common/components/TextInput.jsx';


const InputMinTm = ({
  value,
  onChange,
  onBlur,
}) => (
  <TextInput
    name="minTm"
    value={value}
    type="number"
    icon={TagIcon}
    label="Minimum Tm"
    unit="&deg;C"
    placeholder="Minimum Tm"
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
