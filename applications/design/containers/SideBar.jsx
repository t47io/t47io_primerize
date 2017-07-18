import React from 'react';
import { NavLink } from 'react-router-dom';


const SideBar = () => (
  <ul>
    {[1, 2, 3].map(i => (
      <li key={i}>
        <NavLink
          to={`/design/${i}d`}
          activeStyle={{ color: 'red' }}
        >
          {i}
        </NavLink>
      </li>
    ))}
    <li>
      <NavLink
        to="/result"
        activeStyle={{ color: 'blue' }}
      >
        result
      </NavLink>
    </li>
  </ul>
);


export default SideBar;
