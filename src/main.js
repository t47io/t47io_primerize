import React from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import { colors } from './theme';
import injectSheet from './utilities/jssImportant';

import Sidebar from './containers/Sidebar';
import Modal from './containers/Modal';


const styles = {
  container: {
    fontFamily: 'Roboto, sans-serif',
    paddingLeft: '256px',
    paddingTop: '64px',
    minHeight: '400px',
  },
  body: { margin: '48px 72px' },
  drawer: {
    backgroundColor: '#303030',
    color: colors.main.white,

    '& > div:last-child': { paddingTop: '64px' },
  },
  appbar: { position: 'fixed' },
};


class Main extends React.Component {
  static propTypes = {
    children: React.PropTypes.object,
  }

  render() {
    const { sheet: { classes: styles } } = this.props;

    return (
      <div>
        <AppBar
          title="Primerize"
          iconElementLeft={
            <IconButton>
              <FontIcon className="material-icons">pets</FontIcon>
            </IconButton>
          }
          className={styles.appbar}
        />
        <Drawer docked containerClassName={styles.drawer} >
          <AppBar
            title="Primerize"
            iconElementLeft={
              <IconButton>
                <FontIcon className="material-icons">pets</FontIcon>
              </IconButton>
            }
            className={styles.appbar}
          />
          <Sidebar />
        </Drawer>

        <Modal />

        <div className={styles.container} >
          <div className={styles.body} >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}


export default injectSheet(styles)(Main);

