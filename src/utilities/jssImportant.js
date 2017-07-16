import injectSheet from 'react-jss';

const IMPORTANT = '!important';


const makeImportant = val => (`${val} ${IMPORTANT}`);

const traverse = (obj) => {
  const newObj = { ...obj };
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === 'object') {
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
    keys = Object.keys(styles).filter(key => (targets.indexOf(key) > -1));
  } else {
    keys = Object.keys(styles);
  }
  const subset = keys.reduce((obj, key) => {
    obj[key] = styles[key];
    return obj;
  }, {}
  );
  return {
    ...styles,
    ...(traverse(subset)),
  };
};


export default (styles, options = {}) => {
  const stylesImportant = jssImportant(styles);
  return injectSheet(stylesImportant, options);
};
