import PropTypes from 'prop-types';
import React from 'react';

import { Style as TagIcon } from 'material-ui-icons';

import HelpBlock from '../../../common/components/HelpBlock.jsx';
import TextInput from '../../../common/components/TextInput.jsx';


const InputTag = ({
  value,
  onChange,
  onBlur,
}) => (
  <HelpBlock
    help={(
      <span>
      Maximum length is <u>32</u> characters. This is optional, default is &quot;primers&quot;.
      </span>
    )}
  >
    <TextInput
      name="tag"
      value={value}
      icon={TagIcon}
      label="Name Tag"
      placeholder="Construct name prefix for primers"
      fullWidth
      onChange={onChange}
      onBlur={onBlur}
    />
  </HelpBlock>
);

InputTag.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
InputTag.defaultProps = {
  value: '',
  onChange: () => {},
  onBlur: () => {},
};


export default InputTag;
