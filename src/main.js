import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
import Design1D from './containers/Design1D';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Hello, World!</h1>
        <Design1D />

      </div>
    );
  }
};
