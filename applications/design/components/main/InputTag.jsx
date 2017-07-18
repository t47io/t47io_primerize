import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from 'material-ui';
import { Style as TagIcon } from 'material-ui-icons';


const InputTag = ({
  value,
  onChange,
  onBlur,
}) => (
  <TextField
    name="tag"
    value={value}
    type="text"
    placeholder="Construct name prefix for primers"
    label={(
      <span>
        <TagIcon />
        Name Tag
      </span>
    )}
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
