import PropTypes from 'prop-types';
import React from 'react';

import { Grid } from 'material-ui';
import {
  FirstPage as TagIconMin,
  LastPage as TagIconMax,
  Straighten as TitleIcon,
} from 'material-ui-icons';

import HelpBlock from '../../../common/components/HelpBlock.jsx';
import IconTitle from '../../../common/components/IconTitle.jsx';
import TextInput from '../../../common/components/TextInput.jsx';


const InputPrimerLen = ({
  valueMin,
  valueMax,
  onChange,
  onBlur,
}) => (
  <HelpBlock
    title={(
      <IconTitle
        icon={TitleIcon}
        title="Primer Length"
      />
    )}
    help={(
      <span>
        Length range (inclusive) for each primer. Defaults are <u>15 nts</u> and <u>60 nts</u>.
      </span>
    )}
  >
    <Grid container gutter={24}>
      <Grid item xs={6}>
        <TextInput
          name="minLen"
          value={valueMin}
          type="number"
          icon={TagIconMin}
          label="Minimum"
          unit="nts"
          placeholder="Minimum"
          fullWidth
          onChange={onChange}
          onBlur={onBlur}
        />
      </Grid>
      <Grid item xs={6}>
        <TextInput
          name="maxLen"
          value={valueMax}
          type="number"
          icon={TagIconMax}
          label="Maximum"
          unit="nts"
          placeholder="Maximum"
          fullWidth
          onChange={onChange}
          onBlur={onBlur}
        />
      </Grid>
    </Grid>
  </HelpBlock>
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
