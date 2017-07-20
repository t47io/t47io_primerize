import { createStyleSheet } from 'material-ui/styles';

import { flexGrow } from '../mixins.js';


const styles = createStyleSheet('AccordionCard', theme => ({
  card: {
    marginBottom: theme.spacing.unit * 2,
  },
  body: theme.mixins.gutters({}),
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flexGrow,
}));


export default styles;
