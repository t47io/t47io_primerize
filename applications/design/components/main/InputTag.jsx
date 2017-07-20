import PropTypes from 'prop-types';
import React from 'react';

import { Style as TagIcon } from 'material-ui-icons';

import TextInput from '../../../common/components/TextInput.jsx';


const InputTag = ({
  value,
  onChange,
  onBlur,
}) => (
  <TextInput
    name="tag"
    value={value}
    icon={TagIcon}
    label="Name Tag"
    placeholder="Construct name prefix for primers"
    helperText={(
      <span>Maximum length is <u>32</u> characters. This is optional, default is “primers”.</span>
    )}
    fullWidth
    onChange={onChange}
    onBlur={onBlur}
  />
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
