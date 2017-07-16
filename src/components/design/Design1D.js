import React from 'react';
import { connect } from 'react-redux';

import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

import { colors } from '../../theme';
import stylesShared from './stylesShared';
import injectSheet from '../../utilities/jssImportant';

import PanelMain from '../input/panel/PanelMain';
import PanelOptions1D from '../input/panel/PanelOptions1D';
import PanelSubmit from '../input/panel/PanelSubmit';


const styles = {
  ...stylesShared,
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
    onSubmit: React.PropTypes.func.isRequired,
  }

  render() {
    const {
      tag, sequence, options,
      onChangeTag, onChangeSequence, onChangeTm, onChangePrimerLen, onChangeNumPrimer, onChangeCheckT7,
      onBlur, onReset, onSubmit,
      sheet: { classes: styles },
    } = this.props;

    return (
      <form action="/submit" method="post" onSubmit={onSubmit}>
        <h1 className={styles.titleH1} >
          <Avatar
            icon={<FontIcon className="material-icons">compare_arrows</FontIcon>}
            className={styles.titleIcon}
          />
          Single Assembly
          <sub>[1D]</sub>
        </h1>
        <PanelMain tag={tag} sequence={sequence} onChangeTag={onChangeTag} onChangeSequence={onChangeSequence} onBlur={onBlur} styles={styles} />
        <br />
        <PanelOptions1D options={options} onChangeTm={onChangeTm} onChangePrimerLen={onChangePrimerLen} onChangeNumPrimer={onChangeNumPrimer} onChangeCheckT7={onChangeCheckT7} onBlur={onBlur} styles={styles} />
        <br />
        <PanelSubmit onReset={onReset} styles={styles} />
      </form>
    );
  }
}


export default injectSheet(styles)(Design1D);
