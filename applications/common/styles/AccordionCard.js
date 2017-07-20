import { createStyleSheet } from 'material-ui/styles';


const styles = createStyleSheet('AccordionCard', theme => ({
  card: {
    marginBottom: theme.spacing.unit * 2,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flexGrow: {
    flex: '1 1 auto',
  },
}));


export default styles;
