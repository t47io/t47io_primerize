import {
  CHANGE_1D_INPUT,
  BLUR_1D_INPUT,
} from '../constants/actionTypes.js';


export const initialState = {
  tag: '',
  sequence: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_1D_INPUT: {
      return {
        ...state,
        ...payload,
      };
    }
    case BLUR_1D_INPUT: {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      return state;
    }
  }
};


export default reducer;
