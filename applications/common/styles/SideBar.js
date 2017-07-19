import { createStyleSheet } from 'material-ui/styles';


const styles = createStyleSheet('SideBar', theme => ({
  paper: {
    width: 250,
    backgroundColor: theme.palette.background.paper,
  },
  [theme.breakpoints.up('lg')]: {
    sideBar: {
      width: 250,
    },
  },
}));


export default styles;
