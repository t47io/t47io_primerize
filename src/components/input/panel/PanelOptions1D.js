import React from 'react';

import Avatar from 'material-ui/Avatar';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import { colors } from '../../theme';
import injectSheet from '../../../utilities/jssImportant';

import * as inputs from '../InputOptionsSingle';


const stylesLocal = {

};


class PanelOptions1D extends React.Component {
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
          title={
            <span className={styles.cardTitle}>Main Inputs</span>
          }
          subtitle="Sequence & Name"
          subtitleStyle={{paddingTop: "4px"}}
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
          <p>Maximum length is <u>32</u> characters. This is optional, default is “primers”.</p>
        </CardText>
      </Card>
    );
  }
}
PanelOptions1D = injectSheet(stylesLocal)(PanelOptions1D);


export { PanelOptions1D };
