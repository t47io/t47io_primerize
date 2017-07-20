import PropTypes from 'prop-types';
import React from 'react';

import { Switch } from 'material-ui';
import { Exposure as TagIcon } from 'material-ui-icons';

import TextInput from '../../../common/components/TextInput.jsx';


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
    <TextInput
      name="primerNum"
      value={value}
      type="number"
      icon={TagIcon}
      label="Number of Primers"
      unit="pairs"
      placeholder="Number of Primers"
      helperText={(
        <span>Exact limit of number of primers in design. Default is <u>0</u>, i.e. no restriction; solutions have less or more number of primers will not be shown. Even number only.</span>
      )}
      disabled={!isActive}
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
