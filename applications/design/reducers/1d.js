import {
  CHANGE_1D_INPUT,
  BLUR_1D_INPUT,
} from '../constants/actionTypes.js';
import { DEFAULT_1D_DATA } from '../constants/inputDefaults.js';


const reducer = (state = DEFAULT_1D_DATA, { type, payload }) => {
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
