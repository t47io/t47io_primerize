import React from 'react';
import PropTypes from 'prop-types';

import {
  Switch,
  TextField,
} from 'material-ui';
import { Exposure as TagIcon } from 'material-ui-icons';


const InputPrimerNum = ({
  value,
  isActive,
  onChange,
  onBlur,
}) => (
  <div>
    <Switch
      name="isPrimerNum"
      checked={isActive}
      onChange={onChange}
    />
    <TextField
      name="primerNum"
      value={value}
      type="number"
      disabled={!isActive}
      placeholder="Number of Primers"
      label={(
        <span>
          <TagIcon />
          Number of Primers
        </span>
      )}
      helperText={(
        <span>Exact limit of number of primers in design. Default is <u>0</u>, i.e. no restriction; solutions have less or more number of primers will not be shown. Even number only.</span>
      )}
      fullWidth
      onChange={onChange}
      onBlur={onBlur}
    />
  </div>
);

InputPrimerNum.propTypes = {
  value: PropTypes.number,
  isActive: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
InputPrimerNum.defaultProps = {
  value: NaN,
  isActive: false,
  onChange: () => {},
  onBlur: () => {},
};


export default InputPrimerNum;
