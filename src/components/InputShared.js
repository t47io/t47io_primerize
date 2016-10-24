import React from 'react';

const InputSequence = ({
  sequence,
  onChangeSequence,
  onBlur
}) => (
  <div>
    <p>SEQUENCE</p>
    <textarea type="text" value={sequence} onChange={onChangeSequence} onBlur={onBlur} />
    <p>len = {sequence.length}</p>
  </div>
);
InputSequence.propTypes = {
  sequence: React.PropTypes.string.isRequired,
  onChangeSequence: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired
};

export { InputSequence };


