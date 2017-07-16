import React from 'react';

import Avatar from 'material-ui/Avatar';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

import { colors } from '../../../theme';
import injectSheet from '../../../utilities/jssImportant';

import * as inputs from '../InputOptionsSingle';


const stylesLocal = {
  mainIcon: {
    backgroundColor: colors.main.amber,

    '& > span.material-icons': { color: colors.faint.amber },

    '&:hover': {
      backgroundColor: colors.main.grey,

      '& > span.material-icons': { color: colors.main.white },
    },
  },

};


class PanelOptions1D extends React.Component {
  static propTypes = {
    options: React.PropTypes.object.isRequired,
    onChangeTm: React.PropTypes.func.isRequired,
    onChangePrimerLen: React.PropTypes.func.isRequired,
    onChangeNumPrimer: React.PropTypes.func.isRequired,
    onChangeCheckT7: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func.isRequired,
    styles: React.PropTypes.object.isRequired,
  }

  render() {
    const {
      options,
      onChangeTm, onChangePrimerLen, onChangeNumPrimer, onChangeCheckT7, onBlur,
      styles, sheet: { classes: stylesLocal },
    } = this.props;

    return (
      <Card className={styles.card} >
        <CardHeader
          title={
            <span className={styles.cardTitle}>Advanced Options</span>
          }
          subtitle="Primer Restrictions"
          subtitleStyle={{ paddingTop: '4px' }}
          avatar={
            <Avatar
              icon={<FontIcon className="material-icons">settings</FontIcon>}
              className={stylesLocal.mainIcon}
            />
          }
          className={styles.cardTitle}
          actAsExpander
          showExpandableButton
        />

        <CardText>
          <GridList
            cols={2}
            cellHeight={240}
            padding={24}
          >
            <GridTile cols={1} >
              <inputs.InputMinTm tm={options.tm} onChangeTm={onChangeTm} onBlur={onBlur} styles={styles} />
              <inputs.InputPrimerLen minLen={options.minLen} maxLen={options.maxLen} onChangePrimerLen={onChangePrimerLen} onBlur={onBlur} styles={styles} />
            </GridTile>
            <GridTile cols={1} >
              <inputs.InputNumPrimer numPrimer={options.numPrimer} isNumPrimer={options.isNumPrimer} onChangeNumPrimer={onChangeNumPrimer} onBlur={onBlur} styles={styles} />
              <br />
              <inputs.InputCheckT7 isCheckT7={options.isCheckT7} onChangeCheckT7={onChangeCheckT7} styles={styles} />
            </GridTile>
          </GridList>
        </CardText>
        <CardText expandable className={styles.comments} >
          <ul>
            <li>Minimum annealing temperature <i>Tm</i> for overlapping regions. Default is <u>60.0 &deg;C</u></li>
            <li>Minimum and maximum length for each primer. Defaults are <u>15 nt</u> and <u>60 nt</u>.</li>
            <li>Exact limit of number of primers in design. Default is <u>0</u>, i.e. no restriction; solutions have less or more number of primers will not be shown. Even number only.</li>
            <li>Check if <i>T7 promoter</i> (<b>TTCTAATACGACTCACTATA</b>) is present in input sequence. If not, it will be prepended automatically.</li>
          </ul>
        </CardText>
      </Card>
    );
  }
}
PanelOptions1D = injectSheet(stylesLocal)(PanelOptions1D);


export default PanelOptions1D;
