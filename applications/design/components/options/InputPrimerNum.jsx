import PropTypes from 'prop-types';
import React from 'react';

import { Exposure as TagIcon } from 'material-ui-icons';

import HelpBlock from '../../../common/components/HelpBlock.jsx';
import TextInput from '../../../common/components/TextInput.jsx';
import Toggle from '../../../common/components/Toggle.jsx';


const InputPrimerNum = ({
  value,
  isActive,
  onChange,
  onBlur,
}) => (
  <HelpBlock
    title={(
      <Toggle
        name="isPrimerNum"
        checked={isActive}
        label="Override Number of Primers"
        onChange={onChange}
      />
    )}
    help={(
      <span>
        Exact limit of number of primer pairs in design. Default is <u>0</u>, <i>i.e.</i> no restriction; solutions with less or more number of primers will not be shown.
      </span>
    )}
  >
    <TextInput
      name="primerNum"
      value={value}
      type="number"
      icon={TagIcon}
      label="Number of Primers"
      unit="pairs"
      placeholder="Number of Primers"
      disabled={!isActive}
      fullWidth
      onChange={onChange}
      onBlur={onBlur}
    />
  </HelpBlock>
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
