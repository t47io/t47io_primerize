import React from 'react';


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
  allLibChoices,
  onChangeLibOpt
}) => (
  <div>
    LIB Choice:
    <select value={libChoice} onChange={onChangeLibOpt} >
      { Object.keys(allLibChoices).map((choice, i) => (
          <option value={choice} key={i} >{allLibChoices[choice]}</option>
        )
      ) }
    </select>
  </div>
);
InputLibChoice.propTypes = {
  libChoice: React.PropTypes.number.isRequired,
  allLibChoices: React.PropTypes.object.isRequired,
  onChangeLibOpt: React.PropTypes.func.isRequired
};


const InputFillWT = ({
  isFillWT,
  onChangeFillWT
}) => (
  <div>
    Fill WT Primers:
    <input type="checkbox" checked={isFillWT} onChange={onChangeFillWT} />
  </div>
);
InputFillWT.propTypes = {
  isFillWT: React.PropTypes.bool.isRequired,
  onChangeFillWT: React.PropTypes.func.isRequired
};


const InputIncludeSingle = ({
  isIncludeSingle,
  onChangeIncludeSingle
}) => (
  <div>
    Include Single Mutants:
    <input type="checkbox" checked={isIncludeSingle} onChange={onChangeIncludeSingle} />
  </div>
);
InputIncludeSingle.propTypes = {
  isIncludeSingle: React.PropTypes.bool.isRequired,
  onChangeIncludeSingle: React.PropTypes.func.isRequired
};


export { InputOffset, InputRegionPos, InputLibChoice, InputFillWT, InputIncludeSingle };
