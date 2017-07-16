import {
  CHANGE_1D_INPUT,
  BLUR_1D_INPUT,
} from '../constants/actionTypes.js';

import regexInput from '../utilities/regexInput.js';


export const changeInput1d = ({ target: { name, value } }) => ({
  type: CHANGE_1D_INPUT,
  payload: { [name]: value },
});

export const blurInput1d = ({ target: { name, value } }) => ({
  type: BLUR_1D_INPUT,
  payload: { [name]: regexInput(name, value) },
});
