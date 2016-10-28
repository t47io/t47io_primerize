import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import ImageTune from 'material-ui/svg-icons/image/tune';

import Sidebar from './containers/Sidebar';
import Modal from './containers/Modal';


export default class Main extends React.Component {
  static propTypes = {
    children: React.PropTypes.object
  }

  render() {
    return (
      <div>
        <AppBar title="Primerize" iconElementLeft={<IconButton><ImageTune/></IconButton>} />
        <Sidebar />
        <Modal />

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
};
