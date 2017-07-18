import React from 'react';
import PropTypes from 'prop-types';

import { Switch } from 'material-ui';


const InputCheckT7 = ({
  value,
  onChange,
}) => (
  <Switch
    name="isCheckT7"
    checked={value}
    onChange={onChange}
  />
);

InputCheckT7.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
};
InputCheckT7.defaultProps = {
  value: true,
  onChange: () => {},
};


export default InputCheckT7;
