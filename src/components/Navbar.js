import React from 'react';
import { Link } from 'react-router'


export default class Navbar extends React.Component {
  render() {
    return (
      <navbar>
        Primerize
        <ul>
          <li><Link to="/1d">1D</Link></li>
          <li><Link to="/2d">2D</Link></li>
          <li><Link to="/3d">3D</Link></li>
        </ul>
      </navbar>
    )
  }
};

