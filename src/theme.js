import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  yellowA400, yellow50,
  amberA400, amber50,
  deepOrangeA400, deepOrange50,
  purpleA700, purple50,
  greenA400, green50,
  limeA700, lime50,
  tealA700, teal50,
  blueA400, blue200, blue50,
  cyanA400, cyan50,
  blueGrey500, grey700, grey900, grey500, grey50,
  white, transparent
} from 'material-ui/styles/colors';


const light = getMuiTheme(lightBaseTheme);
const dark = getMuiTheme(darkBaseTheme);
const muiTheme = getMuiTheme({
  ...light,
  palette: {
    ...(lightBaseTheme.palette),
    primary1Color: blueA400,
    primary2Color: blueA400,
    primary3Color: blueA400,
    accent1Color: deepOrangeA400,
    accent2Color: grey500,
    accent3Color: grey900,
    pickerHeaderColor: blueA400,
    shadowColor: transparent
  },
  appBar: {
    ...(light.appBar),
    color: blueA400
  },
  listItem: dark.listItem,
  subheader: dark.subheader,
  textField: {
    ...(light.textField),
    textColor: grey900,
    hintColor: grey500,
    focusColor: blueA400,
    floatingLabelColor: blueA400,
    errorColor: deepOrangeA400
  },
  toggle: {
    ...(light.toggle),
    thumbOnColor: blueA400,
    trackOnColor: blue200,
    thumbRequiredColor: deepOrangeA400,
    trackRequiredColor: deepOrange50
  },
  tooltip: {
    color: grey700,
    rippleBackgroundColor: amberA400
  }
});
console.log(muiTheme.toggle)

const colors = {
  main: {
    yellow: yellowA400,
    amber: amberA400,
    red: deepOrangeA400,
    purple: purpleA700,
    green: greenA400,
    lime: limeA700,
    teal: tealA700,
    blue: blueA400,
    cyan: cyanA400,
    grey: grey700,
    blueGrey700: blueGrey500,
    white: white,
    black: grey900,
    none: transparent
  },
  faint: {
    yellow: yellow50,
    amber: amber50,
    red: deepOrange50,
    purple: purple50,
    green: green50,
    lime: lime50,
    teal: teal50,
    blue: blue50,
    cyan: cyan50,
    grey: grey500,
    white: grey50,

  }
};


export { muiTheme, colors };
