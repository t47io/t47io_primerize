import PropTypes from 'prop-types';
import React from 'react';

import {
  FormControlLabel,
  Switch,
} from 'material-ui';


const Toggle = ({
  name,
  checked,
  label,
  onChange,
}) => (
  <FormControlLabel
    control={(
      <Switch
        name={name}
        checked={checked}
        onChange={onChange}
      />
    )}
    label={label}
  />
);

Toggle.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};
Toggle.defaultProps = {
  name: '',
  checked: false,
  label: '',
  onChange: () => {},
};


export default Toggle;
