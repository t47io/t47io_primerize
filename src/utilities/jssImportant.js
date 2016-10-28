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


export default (styles) => (traverse(styles));
