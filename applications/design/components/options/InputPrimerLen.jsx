import PropTypes from 'prop-types';
import React from 'react';

import { TextField } from 'material-ui';
import {
  FirstPage as TagIconMin,
  LastPage as TagIconMax,
} from 'material-ui-icons';


const InputPrimerLen = ({
  valueMin,
  valueMax,
  onChange,
  onBlur,
}) => (
  <div>
    <TextField
      name="minLen"
      value={valueMin}
      type="number"
      placeholder="Minimum Primer Length"
      label={(
        <span>
          <TagIconMin />
          Minimum Primer Length
        </span>
      )}
      helperText={(
        <span>Minimum and maximum length for each primer. Defaults are <u>15 nt</u> and <u>60 nt</u>.</span>
      )}
      fullWidth
      onChange={onChange}
      onBlur={onBlur}
    />
    <TextField
      name="maxLen"
      value={valueMax}
      type="number"
      placeholder="Maximum Primer Length"
      label={(
        <span>
          <TagIconMax />
          Maximum Primer Length
        </span>
      )}
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
