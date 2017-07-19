import {
  CHANGE_1D_INPUT,
  BLUR_1D_INPUT,
} from '../constants/actionTypes.js';
import { LIMIT_1D_DATA } from '../constants/inputLimits.js';

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

  tag = regexInput('tag', tag, LIMIT_1D_DATA.tag);
  sequence = regexInput('sequence', sequence);

  minTm = fitRange(minTm, ...LIMIT_1D_DATA.minTm);
  minLen = fitRange(Math.min(minLen, maxLen), LIMIT_1D_DATA.minLen, LIMIT_1D_DATA.maxLen);
  maxLen = fitRange(Math.max(minLen, maxLen), minLen, sequence.length || LIMIT_1D_DATA.maxLen);
  primerNum = fitRange(Math.round(primerNum / 2) * 2, ...LIMIT_1D_DATA.primerNum);

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
