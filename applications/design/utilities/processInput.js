const strInputs = ['tag', 'sequence'];
const boolInputs = ['isPrimerNum', 'isCheckT7'];
const floatInputs = ['minTm'];

const regex = {
  tag: /[a-zA-Z0-9 .\-_]+/g,
  sequence: /[ACGTUacgtu \n]+/g,
  primer: /[ACGTUacgtu \n]+/g,
  structure: /[.()[\]]+/g,
};

export const regexInput = (name, value, maxLen = null) => {
  const match = value.match(regex[name]) || [];
  const cleaned = match.join('');
  return maxLen ? cleaned.slice(0, maxLen) : cleaned;
};

export const convertInput = (name, value, checked) => {
  if (strInputs.includes(name)) {
    return value;
  } else if (boolInputs.includes(name)) {
    return checked;
  } else if (floatInputs.includes(name)) {
    return parseFloat(value);
  }
  return parseInt(value, 10);
};

export const fitRange = (value, min, max) => (
  Math.min(Math.max(value, min), max)
);
