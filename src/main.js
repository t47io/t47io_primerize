import React from 'react';

import Sidebar from './containers/Sidebar';


export default class Main extends React.Component {
  static propTypes = {
    children: React.PropTypes.object
  }

  render() {
    return (
      <div>
        <Sidebar />
        <h1>Hello, World!</h1>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
};
