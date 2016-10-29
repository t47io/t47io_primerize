import injectSheet from 'react-jss';

const IMPORTANT = '!important';


const makeImportant = (val) => (`${val} ${IMPORTANT}`);

const traverse = (obj) => {
  let newObj = { ...obj };
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "object") {
      newObj[key] = traverse(obj[key]);
    } else {
      newObj[key] = makeImportant(obj[key]);
    }
  }
  return newObj;
};

const jssImportant = (styles, targets = []) => {
  let keys = [];
  if (targets.length) {
    keys = Object.keys(styles).filter((key) => (targets.indexOf(key) > -1));
  } else {
    keys = Object.keys(styles);
  }
  let subset = keys.reduce((obj, key) => {
      obj[key] = styles[key];
      return obj;
    }, {}
  );
  return {
    ...styles,
    ...(traverse(subset))
  };
};


export default (styles, options = {}) => {
  let stylesImportant = jssImportant(styles);
  return injectSheet(stylesImportant, options);
};
