import React from 'react';
import { connect } from 'react-redux';

import { colors } from '../../theme';
import injectSheet from 'react-jss';
import jssImportant from '../../utilities/jssImportant';

import { InputTag, InputSequence } from '../input/InputShared';
import InputWarning from '../input/InputWarning';
import * as inputs from '../input/InputOptionsSingle';


const styles = {
  textField: { color: colors.main.blue },
};


class Design1D extends React.Component {
  static propTypes = {
    tag: React.PropTypes.string.isRequired,
    sequence: React.PropTypes.string.isRequired,
    options: React.PropTypes.object.isRequired,
    onChangeTag: React.PropTypes.func.isRequired,
    onChangeSequence: React.PropTypes.func.isRequired,
    onChangeTm: React.PropTypes.func.isRequired,
    onChangePrimerLen: React.PropTypes.func.isRequired,
    onChangeNumPrimer: React.PropTypes.func.isRequired,
    onChangeCheckT7: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func.isRequired,
    onReset: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired    
  }

  render() {
    const {
      tag, sequence, options,
      onChangeTag, onChangeSequence, onChangeTm, onChangePrimerLen, onChangeNumPrimer, onChangeCheckT7,
      onBlur, onReset, onSubmit,
      sheet: { classes: styles } 
    }  = this.props;
    console.log(styles.textField)

    return (
      <form action="/submit" method="post" onSubmit={onSubmit}>
        <h1>Single Assembly</h1>
        <InputTag tag={tag} onChangeTag={onChangeTag} onBlur={onBlur} styles={styles} />
        <InputSequence sequence={sequence} onChangeSequence={onChangeSequence} onBlur={onBlur} />
        <div>
          OPTIONS
          <inputs.InputMinTm tm={options.tm} onChangeTm={onChangeTm} onBlur={onBlur} />
          <inputs.InputPrimerLen minLen={options.minLen} maxLen={options.maxLen} onChangePrimerLen={onChangePrimerLen} onBlur={onBlur} />
          <inputs.InputNumPrimer numPrimer={options.numPrimer} isNumPrimer={options.isNumPrimer} onChangeNumPrimer={onChangeNumPrimer} onBlur={onBlur} />
          <inputs.InputCheckT7 isCheckT7={options.isCheckT7} onChangeCheckT7={onChangeCheckT7} />
        </div>
        <InputWarning seqLen={sequence.length} />
        <button type="submit">submit form</button>
        <button type="button" onClick={onReset}>clear form</button>
      </form>
    );
  }
}


export default injectSheet(jssImportant(styles))(Design1D);
