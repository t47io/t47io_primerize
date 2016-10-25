import React from 'react';
import { connect } from 'react-redux';

import { InputTag, InputSequence, InputPrimerList } from './InputShared';
import * as inputs from './InputOptionsMultiple';
import { Illustration2D } from './InputIllustration';


const Design2D = ({
  tag,
  sequence,
  primers,
  offset,
  startPos,
  endPos,
  libChoice,
  onChangeTag,
  onChangeSequence,
  onChangePrimer,
  onAddPrimer,
  onRemovePrimer,
  onChangeOffset,
  onChangePos,
  onChangeLibOpt,
  onBlur,
  onReset
}) => (
  <div>
    <InputTag tag={tag} onChangeTag={onChangeTag} onBlur={onBlur} />
    <InputSequence sequence={sequence} onChangeSequence={onChangeSequence} onBlur={onBlur} />
    <InputPrimerList primers={primers} onChangePrimer={onChangePrimer} onAddPrimer={onAddPrimer} onRemovePrimer={onRemovePrimer} onBlur={onBlur} />
    <div>
      OPTIONS
      <inputs.InputOffset offset={offset} onChangeOffset={onChangeOffset} onBlur={onBlur} />
      <inputs.InputRegionPos startPos={startPos} endPos={endPos} onChangePos={onChangePos} onBlur={onBlur} />
      <inputs.InputLibChoice libChoice={libChoice} onChangeLibOpt={onChangeLibOpt} />
    </div>
    <button onClick={onReset}>clear form</button>

    <Illustration2D sequence={sequence} offset={offset} startPos={startPos} endPos={endPos} />
  </div>
);


export default Design2D;
