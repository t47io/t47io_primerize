import React from 'react';

import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
// import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

import { colors } from '../../theme';
import injectSheet from 'react-jss';
import jssImportant from '../../utilities/jssImportant';

import { InputTag, InputSequence } from './InputShared';


const stylesLocal = {
  mainIcon: {
    backgroundColor: colors.main.red,
    '& > span.material-icons': { color: colors.faint.red },
    '&:hover': {
      backgroundColor: colors.main.grey,
      '& > span.material-icons': { color: colors.main.white }
    }
  },

};


class InputMain extends React.Component {
 static propTypes = {
    tag: React.PropTypes.string.isRequired,
    sequence: React.PropTypes.string.isRequired,
    onChangeTag: React.PropTypes.func.isRequired,
    onChangeSequence: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func.isRequired,
    styles: React.PropTypes.object.isRequired
  }

  render() {
    const { tag, sequence,
      onChangeTag, onChangeSequence, onBlur,
      styles, sheet: { classes: stylesLocal } } = this.props;

    return (
      <Card className={styles.card} >
        <CardHeader
          title="Main Inputs"
          titleStyle={{fontSize: "18px"}}
          subtitle="Sequence & Name"
          avatar={
            <Avatar
              icon={<FontIcon className="material-icons">last_page</FontIcon>}
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
          <p>Maximum length is 32 characters. This is optional, default is “primers”.</p>
        </CardText>

        <CardText>
          <InputSequence sequence={sequence} onChangeSequence={onChangeSequence} onBlur={onBlur} styles={styles} />
        </CardText>
        <CardText expandable={true} className={styles.comments} >
          <ul>
            <li>Valid nucleotides only (A, C, G, T, and U); and at least 60 nt long.</li>
            <li>Flanking sequences (e.g. T7 promoter, buffering region, tail) should be included.</li>
          </ul>
        </CardText>
      </Card>
    );
  }
}
InputMain = injectSheet(jssImportant(stylesLocal))(InputMain);


export { InputMain };
