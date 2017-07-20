import { createStyleSheet } from 'material-ui/styles';

import { row } from '../mixins.js';


const styles = createStyleSheet('IconTitle', theme => ({
  row,
  circle: {
    height: 32,
    width: 32,
  },
  icon: {
    height: 20,
    width: 20,
  },
  title: {
    paddingLeft: theme.spacing.unit * 1.5,
  }
}));


export default styles;
