import React from 'react';
import { connect } from 'react-redux';

import { InputSequence } from './InputShared';
import * as inputs from './InputOptionsSingle';


const Design1D = ({
  sequence,
  tm,
  minLen,
  maxLen,
  numPrimer,
  isNumPrimer,
  isCheckT7,
  onChangeSequence,
  onChangeTm,
  onChangePrimerLen,
  onChangeNumPrimer,
  onChangeCheckT7,
  onBlur
}) => (
  <div>
    <InputSequence sequence={sequence} onChangeSequence={onChangeSequence} onBlur={onBlur} />
    <div>
      OPTIONS
      <inputs.InputMinTm tm={tm} onChangeTm={onChangeTm} onBlur={onBlur} />
      <inputs.InputPrimerLen minLen={minLen} maxLen={maxLen} onChangePrimerLen={onChangePrimerLen} onBlur={onBlur} />
      <inputs.InputNumPrimer numPrimer={numPrimer} isNumPrimer={isNumPrimer} onChangeNumPrimer={onChangeNumPrimer} onBlur={onBlur} />
      <inputs.InputCheckT7 isCheckT7={isCheckT7} onChangeCheckT7={onChangeCheckT7} />
    </div>
  </div>
);


export default Design1D;
