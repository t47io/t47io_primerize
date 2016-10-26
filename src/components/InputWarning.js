import React from 'react';


const InputWarning = ({ seqLen }) => {
  let content = [];
  if (seqLen > 1000) {
    content.push(
      <span key={"w1s"} style={{color: "red"}}>no way</span>
    );
  } else if (seqLen > 500) {
    content.push(
      <span key={"w1s"} style={{color: "orange"}}>too long</span>
    );
  }
  return (
    <div>{content}</div>
  );
};
InputWarning.propTypes = {
  seqLen: React.PropTypes.number.isRequired
};


export default InputWarning;
