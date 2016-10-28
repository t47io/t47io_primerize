import React from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';

import ImageTune from 'material-ui/svg-icons/image/tune';

import Sidebar from './containers/Sidebar';
import Modal from './containers/Modal';


const container_style = {
  paddingLeft: "256px",
  paddingTop: "64px",
  minHeight: "400px"
};
const body_style = {
  margin: "48px 72px",
};


export default class Main extends React.Component {
  static propTypes = {
    children: React.PropTypes.object
  }

  render() {
    return (
      <div>
        <AppBar title="Primerize" iconElementLeft={<IconButton><ImageTune/></IconButton>} />
        <Drawer docked={true} >
          <AppBar
            title="Primerize"
            iconElementLeft={<IconButton><ImageTune/></IconButton>} 
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
