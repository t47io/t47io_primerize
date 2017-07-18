import {
  CHANGE_1D_INPUT,
  BLUR_1D_INPUT,
} from '../constants/actionTypes.js';


export const initialState = {
  tag: '',
  sequence: '',
  minTm: 60.0,
  minLen: 15,
  maxLen: 60,
  primerNum: 0,
  isPrimerNum: false,
  isCheckT7: true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_1D_INPUT:
    case BLUR_1D_INPUT:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};


export default reducer;
