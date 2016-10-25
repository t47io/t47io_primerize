import React from 'react';
import { connect } from 'react-redux';

import { InputSequence, InputPrimerList } from './InputShared';
import * as inputs from './InputOptionsMultiple';


const Design2D = ({
  sequence,
  tag,
  primers,
  onChangeSequence,
  onChangePrimer,
  onAddPrimer,
  onBlur
}) => (
  <div>
    <InputSequence sequence={sequence} onChangeSequence={onChangeSequence} onBlur={onBlur} />
    <InputPrimerList primers={primers} onChangePrimer={onChangePrimer} onAddPrimer={onAddPrimer} onBlur={onBlur} />
  </div>
);


export default Design2D;
