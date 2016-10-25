import React from 'react';
import { connect } from 'react-redux';

import { InputTag, InputSequence } from './InputShared';
import * as inputs from './InputOptionsSingle';


const Design1D = ({
  tag,
  sequence,
  tm,
  minLen,
  maxLen,
  numPrimer,
  isNumPrimer,
  isCheckT7,
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
  <form action="/submit" method="post" encType="multipart/form-data" onSubmit={onSubmit}>
    <InputTag tag={tag} onChangeTag={onChangeTag} onBlur={onBlur} />
    <InputSequence sequence={sequence} onChangeSequence={onChangeSequence} onBlur={onBlur} />
    <div>
      OPTIONS
      <inputs.InputMinTm tm={tm} onChangeTm={onChangeTm} onBlur={onBlur} />
      <inputs.InputPrimerLen minLen={minLen} maxLen={maxLen} onChangePrimerLen={onChangePrimerLen} onBlur={onBlur} />
      <inputs.InputNumPrimer numPrimer={numPrimer} isNumPrimer={isNumPrimer} onChangeNumPrimer={onChangeNumPrimer} onBlur={onBlur} />
      <inputs.InputCheckT7 isCheckT7={isCheckT7} onChangeCheckT7={onChangeCheckT7} />
    </div>
    <button type="submit">submit form</button>
    <button type="button" onClick={onReset}>clear form</button>
  </form>
);


export default Design1D;
