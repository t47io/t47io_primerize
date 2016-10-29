import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import { colors } from '../../../theme';
import injectSheet from '../../../utilities/jssImportant';


const stylesLocal = {
  toolbar: {
    height: "96px",
    padding: "12px 24px"
  }
};


class PanelSubmit extends React.Component {
  static propTypes = {
    onReset: React.PropTypes.func.isRequired,
    styles: React.PropTypes.object.isRequired
  }

  render() {
    const { onReset, styles, sheet: { classes: stylesLocal } } = this.props;

    return (
      <Toolbar className={stylesLocal.toolbar} >
        <ToolbarGroup firstChild={true} >
          <RaisedButton
            type="submit"
            label="Go Primerize"
            primary={true}
            icon={
              <FontIcon className="material-icons">queue_play_next</FontIcon>
            }
            className={styles.buttonLarge}
          />
        </ToolbarGroup>
        <ToolbarGroup lastChild={true} className="bbb">
          <RaisedButton
            type="button"
            label="Use Demo"
            icon={
              <FontIcon className="material-icons">ondemand_video</FontIcon>
            }
            className={`${styles.buttonGreen} ${styles.buttonLarge}`}
          />
          <RaisedButton
            type="button"
            label="Clear Form"
            icon={
              <FontIcon className="material-icons">remove_from_queue</FontIcon>
            }
            onClick={onReset}
            className={styles.buttonLarge}
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
PanelSubmit = injectSheet(stylesLocal)(PanelSubmit);


export default PanelSubmit;
