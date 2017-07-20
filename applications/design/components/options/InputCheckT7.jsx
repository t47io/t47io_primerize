import PropTypes from 'prop-types';
import React from 'react';

import { Typography } from 'material-ui';

import HelpBlock from '../../../common/components/HelpBlock.jsx';
import Toggle from '../../../common/components/Toggle.jsx';


const InputCheckT7 = ({
  value,
  onChange,
}) => (
  <HelpBlock
    title={(
      <Toggle
        name="isCheckT7"
        checked={value}
        label="Check for T7 Promoter"
        onChange={onChange}
      />
    )}
    help={(
      <Typography type="caption">
        Check whether <i>T7 promoter</i> (<b>TTCTAATACGACTCACTATA</b>) is present in input sequence. If not, it will be prepended automatically.
      </Typography>
    )}
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
