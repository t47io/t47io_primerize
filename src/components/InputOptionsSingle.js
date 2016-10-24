import React from 'react';


const InputMinTm = ({
  tm,
  onChangeTm,
  onBlur
}) => (
  <div>
    Min TM:
    <input type="number" step="0.1" min="0" max="95" value={tm} onChange={onChangeTm} onBlur={onBlur} />
  </div>
);
InputMinTm.propTypes = {
  tm: React.PropTypes.number.isRequired,
  onChangeTm: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired
};


const InputPrimerLen = ({
  minLen,
  maxLen,
  onChangePrimerLen,
  onBlur
}) => (
  <div>
    Min LEN:
    <input type="number" name="min" value={minLen} onChange={onChangePrimerLen} onBlur={onBlur} />
    Max LEN:
    <input type="number" name="max" value={maxLen} onChange={onChangePrimerLen} onBlur={onBlur} />
  </div>
);
InputPrimerLen.propTypes = {
  minLen: React.PropTypes.number.isRequired,
  maxLen: React.PropTypes.number.isRequired,
  onChangePrimerLen: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired
};


const InputNumPrimer = ({
  numPrimer,
  isNumPrimer,
  onChangeNumPrimer,
  onBlur
}) => (
  <div>
    # of Primers:
    <input type="checkbox" name="prmchk" value={""} checked={isNumPrimer} onChange={onChangeNumPrimer} />
    <input type="number" name="prmnum" min="0" value={numPrimer} disabled={!isNumPrimer} onChange={onChangeNumPrimer} onBlur={onBlur} />
  </div>
);
InputNumPrimer.propTypes = {
  numPrimer: React.PropTypes.number.isRequired,
  isNumPrimer: React.PropTypes.bool.isRequired,
  onChangeNumPrimer: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired
};


const InputCheckT7 = ({
  isCheckT7,
  onChangeCheckT7
}) => (
  <div>
    Check T7:
    <input type="checkbox" checked={isCheckT7} onChange={onChangeCheckT7} />
  </div>
);
InputCheckT7.propTypes = {
  isCheckT7: React.PropTypes.bool.isRequired,
  onChangeCheckT7: React.PropTypes.func.isRequired
};


export { InputMinTm, InputPrimerLen, InputNumPrimer, InputCheckT7 };
