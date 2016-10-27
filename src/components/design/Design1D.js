import React from 'react';
import { connect } from 'react-redux';

import { InputTag, InputSequence } from '../input/InputShared';
import InputWarning from '../input/InputWarning';
import * as inputs from '../input/InputOptionsSingle';


const Design1D = ({
  tag,
  sequence,
  options,

  onChangeTag,
  onChangeSequence,
  onChangeTm,
  onChangePrimerLen,
  onChangeNumPrimer,
  onChangeCheckT7,

  onBlur,
  onReset,
  onSubmit
}) => (
  <form action="/submit" method="post" onSubmit={onSubmit}>
    <InputTag tag={tag} onChangeTag={onChangeTag} onBlur={onBlur} />
    <InputSequence sequence={sequence} onChangeSequence={onChangeSequence} onBlur={onBlur} />
    <div>
      OPTIONS
      <inputs.InputMinTm tm={options.tm} onChangeTm={onChangeTm} onBlur={onBlur} />
      <inputs.InputPrimerLen minLen={options.minLen} maxLen={options.maxLen} onChangePrimerLen={onChangePrimerLen} onBlur={onBlur} />
      <inputs.InputNumPrimer numPrimer={options.numPrimer} isNumPrimer={options.isNumPrimer} onChangeNumPrimer={onChangeNumPrimer} onBlur={onBlur} />
      <inputs.InputCheckT7 isCheckT7={options.isCheckT7} onChangeCheckT7={onChangeCheckT7} />
    </div>
    <InputWarning seqLen={sequence.length} />
    <button type="submit">submit form</button>
    <button type="button" onClick={onReset}>clear form</button>
  </form>
);


export default Design1D;
