import PropTypes from 'prop-types';
import React from 'react';

import {
  FirstPage as TagIconMin,
  LastPage as TagIconMax,
} from 'material-ui-icons';

import TextInput from '../../../common/components/TextInput.jsx';


const InputPrimerLen = ({
  valueMin,
  valueMax,
  onChange,
  onBlur,
}) => (
  <div>
    <TextInput
      name="minLen"
      value={valueMin}
      type="number"
      icon={TagIconMin}
      label="Minimum Primer Length"
      unit="nts"
      placeholder="Minimum Primer Length"
      helperText={(
        <span>Minimum and maximum length for each primer. Defaults are <u>15 nt</u> and <u>60 nt</u>.</span>
      )}
      fullWidth
      onChange={onChange}
      onBlur={onBlur}
    />
    <TextInput
      name="maxLen"
      value={valueMax}
      type="number"
      icon={TagIconMax}
      label="Maximum Primer Length"
      unit="nts"
      placeholder="Maximum Primer Length"
      helperText={(
        <span>Minimum and maximum length for each primer. Defaults are <u>15 nt</u> and <u>60 nt</u>.</span>
      )}
      fullWidth
      onChange={onChange}
      onBlur={onBlur}
    />
  </div>
);

InputPrimerLen.propTypes = {
  valueMin: PropTypes.number,
  valueMax: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
InputPrimerLen.defaultProps = {
  valueMin: NaN,
  valueMax: NaN,
  onChange: () => {},
  onBlur: () => {},
};


export default InputPrimerLen;
