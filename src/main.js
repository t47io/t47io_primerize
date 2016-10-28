import React from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';

import FontIcon from 'material-ui/FontIcon';
import { colors } from './theme';

import Sidebar from './containers/Sidebar';
import Modal from './containers/Modal';


const container_style = {
  paddingLeft: "256px",
  paddingTop: "24px",
  minHeight: "400px"
};
const body_style = {
  margin: "48px 72px",
};
const drawer_style = {
  backgroundColor: "#303030",
  color: colors.main.white
};


export default class Main extends React.Component {
  static propTypes = {
    children: React.PropTypes.object
  }

  render() {
    return (
      <div>
        <AppBar
          title="Primerize"
          iconElementLeft={
            <IconButton>
              <FontIcon className="material-icons">pets</FontIcon>
            </IconButton>
          } 
        />
        <Drawer docked={true} containerStyle={drawer_style} >
          <AppBar
            title="Primerize"
            iconElementLeft={
              <IconButton>
                <FontIcon className="material-icons">pets</FontIcon>
              </IconButton>
            }
          />
          <Sidebar />
        </Drawer>

        <Modal />

        <div style={container_style} >
          <div style={body_style} >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
};
