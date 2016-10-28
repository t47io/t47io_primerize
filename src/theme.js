import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  amberA400, amber100,
  deepOrangeA400, deepOrange100,
  purpleA400, purple100,
  greenA400, green100,
  limeA700, lime100,
  tealA700, teal100,
  blueA400, blue100,
  cyanA400, cyan100,
  white, transparent
} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  ...darkBaseTheme,
  palette: {
    ...(darkBaseTheme.palette),
    primary1Color: blueA400,
    primary2Color: blueA400,
    shadowColor: transparent
  },
  appBar: {
    ...(darkBaseTheme.appBar),
    textColor: white
  }
});

const colors = {
  main: {
    yellow: amberA400,
    red: deepOrangeA400,
    purple: purpleA400,
    green: greenA400,
    lime: limeA700,
    teal: tealA700,
    blue: blueA400,
    cyan: cyanA400,
    white: white
  },
  faint: {
    yellow: amber100,
    red: deepOrange100,
    purple: purple100,
    green: green100,
    lime: lime100,
    teal: teal100,
    blue: blue100,
    cyan: cyan100

  }
};


export { muiTheme, colors };
