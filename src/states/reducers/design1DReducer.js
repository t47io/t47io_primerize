import { handleActions } from 'redux-actions';
import { design1DState } from '../models';

import { CHANGE_SEQUENCE } from '../actions/actionTypes';

const design1DReducer = handleActions({
  CHANGE_SEQUENCE: (state, { payload }) => ({
    ...state,
    sequence: payload.sequence
  })
}, design1DState);

export default design1DReducer;