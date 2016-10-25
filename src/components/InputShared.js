import React from 'react';


const InputSequence = ({
  sequence,
  onChangeSequence,
  onBlur
}) => (
  <div>
    <p>SEQUENCE: len=<span>{sequence.length}</span></p>
    <textarea type="text" value={sequence} onChange={onChangeSequence} onBlur={onBlur} />
  </div>
);
InputSequence.propTypes = {
  sequence: React.PropTypes.string.isRequired,
  onChangeSequence: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired
};


const InputPrimer = ({
  id,
  sequence,
  onChangePrimer,
  onBlur
}) => (
  <div>
    <span>{id}</span>
    <input type="text" name={`p${id}`} value={sequence} onChange={onChangePrimer} onBlur={onBlur} />
    <span>len={sequence.length}</span>
  </div>
);
InputPrimer.propTypes = {
  id: React.PropTypes.number.isRequired,
  sequence: React.PropTypes.string.isRequired,
  onChangePrimer: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired
};

const InputPrimerList = ({
  primers,
  onChangePrimer,
  onAddPrimer,
  onBlur
}) => (
  <div>
    <button onClick={onAddPrimer} >add primer</button>
    { primers.map((primer) => (
        <InputPrimer key={primer.id} {...primer} onChangePrimer={onChangePrimer} onBlur={onBlur} />
      )
    ) }
  </div>
);
InputPrimerList.propTypes = {
  primers: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onChangePrimer: React.PropTypes.func.isRequired,
  onAddPrimer: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired
};


export { InputSequence, InputPrimerList };


