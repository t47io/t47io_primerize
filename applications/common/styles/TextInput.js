import { createStyleSheet } from 'material-ui/styles';

import { row } from '../mixins.js';


const styles = createStyleSheet('TextInput', theme => ({
  input: {
    ...row,
    alignItems: 'baseline',
    flexGrow: 1,
  },
  icon: {
    height: theme.spacing.unit * 2.5,
    width: theme.spacing.unit * 2.5,
    verticalAlign: 'text-top',
  },
  label: {
    display: 'inline-block',
    paddingLeft: theme.spacing.unit / 2,
    color: 'inherit',
  },
  unit: {
    padding: `0 ${theme.spacing.unit / 2}px`,
  },
}));


export default styles;
