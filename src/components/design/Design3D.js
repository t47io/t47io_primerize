import React from 'react';
import { connect } from 'react-redux';

import { InputTag, InputSequence, InputPrimerList, InputStructureList } from '../input/InputShared';
import * as inputs from '../input/InputOptionsMultiple';
import { Illustration3D } from '../input/InputIllustration';
import { design3DLibChoices } from '../../states/constants/status';

const Design3D = ({
  tag,
  sequence,
  primers,
  structures,
  options,

  isRender,

  onChangeTag,
  onChangeSequence,
  onChangePrimer,
  onAddPrimer,
  onRemovePrimer,
  onChangeStructure,
  onAddStructure,
  onRemoveStructure,
  onChangeOffset,
  onChangePos,
  onChangeLibOpt,
  onChangeNumMut,
  onChangeFillWT,
  onChangeIncludeSingle,

  onBlur,
  onReset,
  onSubmit
}) => (
  <form action="/submit" method="post" onSubmit={onSubmit}>
    <InputTag tag={tag} onChangeTag={onChangeTag} onBlur={onBlur} />
    <InputSequence sequence={sequence} onChangeSequence={onChangeSequence} onBlur={onBlur} />
    <InputStructureList structures={structures} onChangeStructure={onChangeStructure} onAddStructure={onAddStructure} onRemoveStructure={onRemoveStructure} onBlur={onBlur} />
    <InputPrimerList primers={primers} onChangePrimer={onChangePrimer} onAddPrimer={onAddPrimer} onRemovePrimer={onRemovePrimer} onBlur={onBlur} />
    <div>
      OPTIONS
      <inputs.InputOffset offset={options.offset} onChangeOffset={onChangeOffset} onBlur={onBlur} />
      <inputs.InputRegionPos startPos={options.startPos} endPos={options.endPos} onChangePos={onChangePos} onBlur={onBlur} />
      <inputs.InputLibChoice libChoice={options.libChoice} allLibChoices={design3DLibChoices} onChangeLibOpt={onChangeLibOpt} />
      <inputs.InputNumMutation numMutation={options.numMutation} onChangeNumMut={onChangeNumMut} />
      <inputs.InputFillWT isFillWT={options.isFillWT} onChangeFillWT={onChangeFillWT} />
      <inputs.InputIncludeSingle isIncludeSingle={options.isIncludeSingle} onChangeIncludeSingle={onChangeIncludeSingle} />
    </div>
    <button type="submit">submit form</button>
    <button type="button" onClick={onReset}>clear form</button>

    <Illustration3D sequence={sequence} structures={structures} offset={options.offset} startPos={options.startPos} endPos={options.endPos} isRender={isRender} />
  </form>
);


export default Design3D;
