import React from 'react';

import { Drawer } from 'material-ui';


const SideBar = ({ children }) => (
  <Drawer docked>
    { children }
  </Drawer>
);


export default SideBar;
