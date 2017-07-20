import PropTypes from 'prop-types';
import React from 'react';

import { SimCard as SequenceIcon } from 'material-ui-icons';

import HelpBlock from '../../../common/components/HelpBlock.jsx';
import TextInput from '../../../common/components/TextInput.jsx';


const InputSequence = ({
  value,
  onChange,
  onBlur,
}) => (
  <HelpBlock
    help={(
      <ul>
        <li>Valid nucleotides only (<b>A</b>, <b>C</b>, <b>G</b>, <b>T</b>, and <b>U</b>); and at least <u>60 nt</u> long.</li>
        <li>Multi-line input is valid and automatically concatenated.</li>
        <li>Flanking sequences (e.g. T7 promoter, buffering region, tail) should be included.</li>
      </ul>
    )}
  >
    <TextInput
      name="sequence"
      value={value}
      type="text"
      icon={SequenceIcon}
      label={`Sequence (${value.length} nts)`}
      placeholder="Full-length DNA sequence for design"
      required
      multiline
      fullWidth
      rows={3}
      rowsMax={7}
      onChange={onChange}
      onBlur={onBlur}
    />
  </HelpBlock>
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
