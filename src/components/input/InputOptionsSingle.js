import React from 'react';

import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

import { colors } from '../../theme';


const InputMinTm = ({
  tm,
  onChangeTm,
  onBlur,
  styles
}) => (
  <TextField
    type="number" name="tm"
    hintText="Minimum Tm"
    floatingLabelText={
      <span>
        <FontIcon className={`material-icons ${styles.inputLabelIcon}`}>opacity</FontIcon>
        {" "} Minimum Tm
      </span>
    }
    fullWidth={true}       
    step="0.1" min="0" max="95"
    value={tm} 
    onChange={onChangeTm} onBlur={onBlur}
  />
);
InputMinTm.propTypes = {
  tm: React.PropTypes.number.isRequired,
  onChangeTm: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired,
  styles: React.PropTypes.object.isRequired
};


const InputPrimerLen = ({
  minLen,
  maxLen,
  onChangePrimerLen,
  onBlur,
  styles
}) => (
  <div>
    <TextField
      type="number" name="min"
      hintText="Minimum Primer Length"
      floatingLabelText={
        <span>
          <FontIcon className={`material-icons ${styles.inputLabelIcon}`}>first_page</FontIcon>
          {" "} Minimum Primer Length
        </span>
      }
      fullWidth={true}
      value={minLen}
      onChange={onChangePrimerLen} onBlur={onBlur}
    />
    <TextField
      type="number" name="max"
      hintText="Maximum Primer Length"
      floatingLabelText={
        <span>
          <FontIcon className={`material-icons ${styles.inputLabelIcon}`}>last_page</FontIcon>
          {" "} Maximum Primer Length
        </span>
      }
      fullWidth={true}
      value={maxLen}
      onChange={onChangePrimerLen} onBlur={onBlur}
    />
  </div>
);
InputPrimerLen.propTypes = {
  minLen: React.PropTypes.number.isRequired,
  maxLen: React.PropTypes.number.isRequired,
  onChangePrimerLen: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired,
  styles: React.PropTypes.object.isRequired
};


const InputNumPrimer = ({
  numPrimer,
  isNumPrimer,
  onChangeNumPrimer,
  onBlur,
  styles
}) => (
  <div>
    <Toggle
      type="checkbox" name="prmchk"
      label="Override Number of Primers"
      labelPosition="right"
      className={styles.toggle}
      value={""} toggled={isNumPrimer}
      onToggle={onChangeNumPrimer} 
    />
    <TextField
      type="number" name="prmnum"
      hintText="Number of Primers"
      floatingLabelText={
        <span>
          <FontIcon className={`material-icons ${styles.inputLabelIcon}`}>exposure</FontIcon>
          {" "} Number of Primers
        </span>
      }
      fullWidth={true}
      min="0" value={numPrimer}
      disabled={!isNumPrimer}
      onChange={onChangeNumPrimer} onBlur={onBlur}
    />
  </div>
);
InputNumPrimer.propTypes = {
  numPrimer: React.PropTypes.number.isRequired,
  isNumPrimer: React.PropTypes.bool.isRequired,
  onChangeNumPrimer: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired,
  styles: React.PropTypes.object.isRequired
};


const InputCheckT7 = ({
  isCheckT7,
  onChangeCheckT7,
  styles
}) => (
  <div>
    <Toggle
      type="checkbox" name="prmchk"
      label="Check for T7 Promoter"
      labelPosition="right"
      className={styles.toggle}
      value={""} toggled={isCheckT7}
      onToggle={onChangeCheckT7} 
    />
  </div>
);
InputCheckT7.propTypes = {
  isCheckT7: React.PropTypes.bool.isRequired,
  onChangeCheckT7: React.PropTypes.func.isRequired,
  styles: React.PropTypes.object.isRequired
};


export { InputMinTm, InputPrimerLen, InputNumPrimer, InputCheckT7 };
