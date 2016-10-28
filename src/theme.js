import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  amberA400, yellowA400,
  deepOrangeA400, deepOrange100,
  purpleA700, purple100,
  greenA400, green100,
  limeA700, lime100,
  tealA700, teal100,
  blueA400, blue100,
  cyanA400, cyan100,
  blueGrey500, grey700, grey900, grey500,
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
  }
});
// console.log(muiTheme.drawer)

const colors = {
  main: {
    yellow: amberA400,
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
    black: grey900
  },
  faint: {
    yellow: yellowA400,
    red: deepOrange100,
    purple: purple100,
    green: green100,
    lime: lime100,
    teal: teal100,
    blue: blue100,
    cyan: cyan100,
    grey: grey500

  }
};


export { muiTheme, colors };
