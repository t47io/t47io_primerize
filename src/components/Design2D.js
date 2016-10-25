import React from 'react';
import { connect } from 'react-redux';

import { InputTag, InputSequence, InputPrimerList } from './InputShared';
import * as inputs from './InputOptionsMultiple';


const Design2D = ({
  tag,
  sequence,
  primers,
  onChangeTag,
  onChangeSequence,
  onChangePrimer,
  onAddPrimer,
  onBlur,
  onReset
}) => (
  <div>
    <InputTag tag={tag} onChangeTag={onChangeTag} onBlur={onBlur} />
    <InputSequence sequence={sequence} onChangeSequence={onChangeSequence} onBlur={onBlur} />
    <InputPrimerList primers={primers} onChangePrimer={onChangePrimer} onAddPrimer={onAddPrimer} onBlur={onBlur} />

    <button onClick={onReset}>clear form</button>
  </div>
);


export default Design2D;
