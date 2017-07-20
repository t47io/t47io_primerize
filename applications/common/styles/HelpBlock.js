import { createStyleSheet } from 'material-ui/styles';

import {
  row,
  flexGrow,
} from '../mixins.js';


const styles = createStyleSheet('HelpBlock', theme => ({
  row,
  flexGrow,
  chip: {
    justifyContent: 'flex-start',
    marginTop: theme.spacing.unit * 2,
    height: 'auto',
    width: '100%',
  },
  label: {
    whiteSpace: 'normal',
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
  span: {
    lineHeight: 1.2,
  },
  collapse: {
    width: '100%',
  },
  [theme.breakpoints.up('lg')]: {
    label: {
      padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit * 2.5}px`,
    },
  },
}));


export default styles;
