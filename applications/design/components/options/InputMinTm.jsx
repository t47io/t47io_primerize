import PropTypes from 'prop-types';
import React from 'react';

import {
  AcUnit as TagIcon,
  InvertColors as TitleIcon,
} from 'material-ui-icons';

import HelpBlock from '../../../common/components/HelpBlock.jsx';
import IconTitle from '../../../common/components/IconTitle.jsx';
import TextInput from '../../../common/components/TextInput.jsx';


const InputMinTm = ({
  value,
  onChange,
  onBlur,
}) => (
  <HelpBlock
    title={(
      <IconTitle
        icon={TitleIcon}
        title="Annealing Temperature"
      />
    )}
    help={(
      <span>
      Minimum annealing temperature <i>T<sub>m</sub></i> for overlapping regions. Default is <u>60.0 &deg;C</u>.
      </span>
    )}
  >
    <TextInput
      name="minTm"
      value={value}
      type="number"
      icon={TagIcon}
      label="Minimum Tm"
      unit="&deg;C"
      placeholder="Minimum Tm"
      fullWidth
      onChange={onChange}
      onBlur={onBlur}
    />
  </HelpBlock>
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
