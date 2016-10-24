import React from 'react';

import Navbar from './components/Navbar';

const Main = (props) => (
  <div>
    <Navbar />
    <h1>Hello, World!</h1>

    <div>
      {props.children}
    </div>
  </div>
);
Main.propTypes = {
  children: React.PropTypes.object,
};


export default Main;
