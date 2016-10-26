import React from 'react';
import { connect } from 'react-redux';

import { InputTag, InputSequence, InputPrimerList } from './InputShared';
import * as inputs from './InputOptionsMultiple';
import { Illustration2D } from './InputIllustration';


const Design2D = ({
  tag,
  sequence,
  primers,
  options,
  isRender,
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
      <inputs.InputOffset offset={options.offset} onChangeOffset={onChangeOffset} onBlur={onBlur} />
      <inputs.InputRegionPos startPos={options.startPos} endPos={options.endPos} onChangePos={onChangePos} onBlur={onBlur} />
      <inputs.InputLibChoice libChoice={options.libChoice} onChangeLibOpt={onChangeLibOpt} />
    </div>
    <button onClick={onReset}>clear form</button>

    <Illustration2D sequence={sequence} offset={options.offset} startPos={options.startPos} endPos={options.endPos} isRender={isRender} />
  </div>
);


export default Design2D;
