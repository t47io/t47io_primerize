import React from 'react';
import { connect } from 'react-redux';

import { InputSequence } from './InputShared';
// import * as inputs from './Inputs';


const Design1D = ({ sequence, onChangeSequence }) => (
  <div>
    <InputSequence sequence={sequence} onChangeSequence={onChangeSequence} />
    <div>
      OPTIONS
    </div>
  </div>
);

export default Design1D;