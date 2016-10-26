import React from 'react';

import { design2DLibChoices } from '../../states/constants/status';


const InputOffset = ({
  offset,
  onChangeOffset,
  onBlur
}) => (
  <div>
    OFFSET:
    <input type="number" value={offset} onChange={onChangeOffset} onBlur={onBlur} />
  </div>
);
InputOffset.propTypes = {
  offset: React.PropTypes.number.isRequired,
  onChangeOffset: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired
};


const InputRegionPos = ({
  startPos,
  endPos,
  onChangePos,
  onBlur
}) => (
  <div>
    Start POS:
    <input type="number" name="start" value={startPos} onChange={onChangePos} onBlur={onBlur} />
    End POS:
    <input type="number" name="end" value={endPos} onChange={onChangePos} onBlur={onBlur} />
  </div>
);
InputRegionPos.propTypes = {
  startPos: React.PropTypes.number.isRequired,
  endPos: React.PropTypes.number.isRequired,
  onChangePos: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired
};


const InputLibChoice = ({
  libChoice,
  onChangeLibOpt,
}) => (
  <div>
    LIB Choice:
    <select value={libChoice} onChange={onChangeLibOpt} >
      { Object.keys(design2DLibChoices).map((choice, i) => (
          <option value={choice} key={i} >{design2DLibChoices[choice]}</option>
        )
      ) }
    </select>
  </div>
);
InputLibChoice.propTypes = {
  libChoice: React.PropTypes.number.isRequired,
  onChangeLibOpt: React.PropTypes.func.isRequired
};


export { InputOffset, InputRegionPos, InputLibChoice };
