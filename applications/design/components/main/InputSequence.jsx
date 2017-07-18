import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from 'material-ui';
import { SimCard as SequenceIcon } from 'material-ui-icons';


const InputSequence = ({
  value,
  onChange,
  onBlur,
}) => (
  <TextField
    name="sequence"
    value={value}
    type="text"
    required
    rows={3}
    rowsMax={7}
    placeholder="Full-length DNA sequence for design"
    label={(
      <span>
        <SequenceIcon />
        Sequence
        ({value.length} nt)
      </span>
    )}
    helperText={(
      <ul>
        <li>Valid nucleotides only (<b>A</b>, <b>C</b>, <b>G</b>, <b>T</b>, and <b>U</b>); and at least <u>60 nt</u> long.</li>
        <li>Multi-line input is valid and automatically concatenated.</li>
        <li>Flanking sequences (e.g. T7 promoter, buffering region, tail) should be included.</li>
      </ul>
    )}
    fullWidth
    multiline
    onChange={onChange}
    onBlur={onBlur}
  />
);

InputSequence.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
InputSequence.defaultProps = {
  value: '',
  onChange: () => {},
  onBlur: () => {},
};


export default InputSequence;
