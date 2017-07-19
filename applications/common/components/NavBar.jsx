import React from 'react';

import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
} from 'material-ui';
import { Pets as LogoIcon } from 'material-ui-icons';


const NavBar = () => (
  <AppBar position="fixed">
    <Toolbar>
      <IconButton><LogoIcon /></IconButton>
      <Button>Primerize</Button>
    </Toolbar>
  </AppBar>
);


export default NavBar;
