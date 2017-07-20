import { createStyleSheet } from 'material-ui/styles';

import { flexGrow } from '../mixins.js';


const styles = createStyleSheet('NavBar', theme => ({
  flexGrow,
  title: {
    fontWeight: 700,
    marginLeft: 24,
    flex: '0 1 auto',
  },
  navBar: {
    transition: theme.transitions.create('width'),
  },
  [theme.breakpoints.up('md')]: {
    navBarShift: {
      width: 'calc(100% - 250px)',
    },
    navMenuIcon: {
      display: 'none',
    },
  },
  [theme.breakpoints.down('md')]: {
    navLogoIcon: {
      display: 'none',
    },
  },
}));


export default styles;
