import {
  CHANGE_1D_INPUT,
  BLUR_1D_INPUT,
} from '../constants/actionTypes.js';

import {
  convertInput,
  regexInput,
  fitRange,
} from '../utilities/processInput.js';


export const changeInput1d = (
  { target: { name, value } },
  checked
) => ({
  type: CHANGE_1D_INPUT,
  payload: { [name]: convertInput(name, value, checked) },
});

export const blurInput1d = () => (dispatch, getState) => {
  let {
    design: {
      '1d': {
        tag,
        sequence,
        minTm,
        minLen,
        maxLen,
        primerNum,
      },
    },
  } = getState();

  tag = regexInput('tag', tag, 32);
  sequence = regexInput('sequence', sequence);

  minTm = fitRange(minTm, 10, 95);
  minLen = fitRange(Math.min(minLen, maxLen), 15, Infinity);
  maxLen = fitRange(Math.max(minLen, maxLen), minLen, sequence.length || Infinity);
  primerNum = fitRange(Math.round(primerNum / 2) * 2, 0, 20);

  return dispatch({
    type: BLUR_1D_INPUT,
    payload: {
      tag,
      sequence,
      minTm,
      minLen,
      maxLen,
      primerNum,
    },
  });
};
