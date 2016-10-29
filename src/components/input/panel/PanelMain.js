import React from 'react';

import Avatar from 'material-ui/Avatar';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import { colors } from '../../../theme';
import injectSheet from '../../../utilities/jssImportant';

import { InputTag, InputSequence } from '../InputShared';
import InputWarning from '../InputWarning';


const stylesLocal = {
  mainIcon: {
    backgroundColor: colors.main.red,

    '& > span.material-icons': { color: colors.faint.red },

    '&:hover': {
      backgroundColor: colors.main.grey,

      '& > span.material-icons': { color: colors.main.white }
    }
  },
  warningCard: {
    marginTop: "16px",

    '&.good': {
      height: "1px",
      borderTop: "none",
      borderShadow: "none",
      '& > *': { display: "none" }
    },
    '&.long': { backgroundColor: colors.faint.amber },
    '&.bad': { backgroundColor: colors.faint.red }
  },
  warningIcon: {
    marginTop: "6px",
    borderRadiusTop: "0px",
    borderRadiusBottom: "0px",

    '&.long': {
      backgroundColor: colors.main.none,

      '& > span.material-icons': { color: colors.main.amber },
    },

    '&.bad': {
      backgroundColor: colors.main.none,

      '& > span.material-icons': { color: colors.main.red },
    }
  }
};


class PanelMain extends React.Component {
 static propTypes = {
    tag: React.PropTypes.string.isRequired,
    sequence: React.PropTypes.string.isRequired,
    onChangeTag: React.PropTypes.func.isRequired,
    onChangeSequence: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func.isRequired,
    styles: React.PropTypes.object.isRequired
  }

  render() {
    const {
      tag, sequence,
      onChangeTag, onChangeSequence, onBlur,
      styles, sheet: { classes: stylesLocal }
    } = this.props;

    return (
      <Card className={styles.card} >
        <CardHeader
          title={
            <span className={styles.cardTitle}>Main Inputs</span>
          }
          subtitle="Sequence & Name"
          subtitleStyle={{paddingTop: "4px"}}
          avatar={
            <Avatar
              icon={<FontIcon className="material-icons">create</FontIcon>}
              className={stylesLocal.mainIcon}
            />
          }
          className={styles.cardTitle}
          actAsExpander={true}
          showExpandableButton={true}
        />

        <CardText>
          <InputTag tag={tag} onChangeTag={onChangeTag} onBlur={onBlur} styles={styles} />
        </CardText>
        <CardText expandable={true} className={styles.comments} >
          <p>Maximum length is <u>32</u> characters. This is optional, default is “primers”.</p>
        </CardText>

        <CardText>
          <InputSequence sequence={sequence} onChangeSequence={onChangeSequence} onBlur={onBlur} styles={styles} />
        </CardText>
        <CardText expandable={true} className={styles.comments} >
          <ul>
            <li>Valid nucleotides only (<b>A</b>, <b>C</b>, <b>G</b>, <b>T</b>, and <b>U</b>); and at least <u>60 nt</u> long.</li>
            <li>Multi-line input is valid and automatically concatenated.</li>
            <li>Flanking sequences (e.g. T7 promoter, buffering region, tail) should be included.</li>
          </ul>
        </CardText>

        <InputWarning seqLen={sequence.length} styles={stylesLocal} />
      </Card>
    );
  }
}
PanelMain = injectSheet(stylesLocal)(PanelMain);


export default PanelMain;
