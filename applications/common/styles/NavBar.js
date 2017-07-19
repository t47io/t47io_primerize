import { createStyleSheet } from 'material-ui/styles';


const styles = createStyleSheet('AppBar', theme => ({
  grow: {
    flex: '1 1 auto',
  },
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
