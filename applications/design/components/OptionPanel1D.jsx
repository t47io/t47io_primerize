import PropTypes from 'prop-types';
import React from 'react';

import {
  Avatar,
  Grid,
  Typography,
} from 'material-ui';
import { Settings as CardIcon } from 'material-ui-icons';

import AccordionCard from '../../common/components/AccordionCard.jsx';
import InputCheckT7 from './options/InputCheckT7.jsx';
import InputMinTm from './options/InputMinTm.jsx';
import InputPrimerNum from './options/InputPrimerNum.jsx';
import InputPrimerLen from './options/InputPrimerLen.jsx';


const OptionPanel1D = ({
  minTm,
  minLen,
  maxLen,
  primerNum,
  isPrimerNum,
  isCheckT7,
  onChange,
  onBlur,
}) => (
  <AccordionCard
    title="Advanced Options"
    subheader="Primer Restrictions"
    avatar={(
      <Avatar>
        <CardIcon />
      </Avatar>
    )}
  >
    <Grid container gutter={24}>
      <Grid item xs={12} md={6}>
        <InputMinTm
          value={minTm}
          onChange={onChange}
          onBlur={onBlur}
        />
        <Typography paragraph />
        <InputCheckT7
          value={isCheckT7}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InputPrimerLen
          valueMin={minLen}
          valueMax={maxLen}
          onChange={onChange}
          onBlur={onBlur}
        />
        <Typography paragraph />
        <InputPrimerNum
          value={primerNum}
          isActive={isPrimerNum}
          onChange={onChange}
          onBlur={onBlur}
        />
      </Grid>
    </Grid>
  </AccordionCard>
);

OptionPanel1D.propTypes = {
  minTm: PropTypes.number,
  minLen: PropTypes.number,
  maxLen: PropTypes.number,
  primerNum: PropTypes.number,
  isPrimerNum: PropTypes.bool,
  isCheckT7: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
OptionPanel1D.defaultProps = {
  minTm: NaN,
  minLen: NaN,
  maxLen: NaN,
  primerNum: NaN,
  isPrimerNum: false,
  isCheckT7: true,
  onChange: () => {},
  onBlur: () => {},
};


export default OptionPanel1D;
