import { createStyleSheet } from 'material-ui/styles';


const styles = createStyleSheet('Layout', theme => ({
  '@global': {
    html: {
      boxSizing: 'border-box',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      lineHeight: '1.2',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      width: 'auto',
    },
  },
  layout: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
    width: '100%',
  },
  content: theme.mixins.gutters({
    paddingTop: 80,
    flex: '1 1 100%',
    maxWidth: '100%',
    margin: '0 auto',
  }),
  [theme.breakpoints.up('md')]: {
    content: {
      maxWidth: 'calc(100% - 250px)',
      marginLeft: 250,
    },
  },
  [theme.breakpoints.up('lg')]: {
    content: {
      maxWidth: 960,
      marginLeft: 'auto',
    },
  },
}));


export default styles;
