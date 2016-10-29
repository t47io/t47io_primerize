import { colors } from '../../theme';

const stylesShared = {
  titleH1: {
    '& > sub': {
      marginLeft: "12px",
      color: colors.faint.purple,
      fontStyle: "italic"
    }
  },
  titleIcon: {
    backgroundColor: colors.main.blue,
    marginRight: "12px",

    '& > span.material-icons': { color: colors.faint.blue },

    '&:hover': {
      backgroundColor: colors.main.cyan,

      '& > span.material-icons': { color: colors.main.white }
    }
  },
  conditionalInput: {
    fontStyle: "italic",

    '&.short': { color: colors.main.grey },
    '&.good': { color: colors.main.green },
    '&.long': { color: colors.main.amber },
    '&.bad': { color: colors.main.red },
  },
  inputLabelIcon: {
    fontSize: "20px",
    verticalAlign: "top",
    color: "inherit"
  },
  // questionTooltip: {
  //   width: "24px",
  //   height: "24px"
  // },
  // gridSmallTooltip: {
  //   overflow: "visible",
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  // }
  card: {
    '& > div > div:not(:first-child)': { padding: "0px 16px" }
  },
  cardTitle: { fontSize: "18px" },
  comments: {
    backgroundColor: colors.faint.blue,
    color: colors.main.grey,
    padding: "0px",
    margin: "16px",
    marginTop: "0px",
    borderRadius: "2px",
    boxShadow: "",

    '& > p': { padding: "16px" },
    '& > ul': {
      padding: "16px 32px",
      lineHeight: "150%"
    },
  },
  toggle: { marginLeft: "6px" },

};


export default stylesShared;
