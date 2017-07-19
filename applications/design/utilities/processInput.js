import {
  INPUT_TYPES,
  INPUT_ALL_TYPES,
} from '../constants/inputTypes.js';


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
  switch (INPUT_ALL_TYPES[name]) {
    case INPUT_TYPES.BOOL:
      return checked;

    case INPUT_TYPES.FLOAT:
      return parseFloat(value);

    case INPUT_TYPES.INT:
      return parseInt(value, 10);

    case INPUT_TYPES.STR:
    default:
      return value;
  }
};

export const fitRange = (value, min, max) => {
  const useMin = Math.min(min, max);
  const useMax = Math.max(min, max);

  return Math.min(Math.max(value, useMin), useMax);
};
