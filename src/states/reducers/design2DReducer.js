import { handleActions } from 'redux-actions';

import { design2DState } from '../models';
import { ACTIONS_2D } from '../actions/actionTypes';


const design2DReducer = handleActions({
  [ACTIONS_2D.CHANGE_SEQUENCE]: (state, { payload }) => ({
    ...state,
    sequence: payload.sequence
  }),

  [ACTIONS_2D.CHANGE_PRIMER]: (state, { payload }) => ({
    ...state,
    primers: [
      ...(state.primers.slice(0, payload.id - 1)),
      {
        id: payload.id,
        sequence: payload.sequence
      },
      ...(state.primers.slice(payload.id))
    ]
  }),

  [ACTIONS_2D.ADD_PRIMER]: (state, { payload }) => ({
    ...state,
    primers: [
      ...(state.primers),
      {
        id: state.primers.length + 1,
        sequence: ''
      },
      {
        id: state.primers.length + 2,
        sequence: ''
      }
    ]
  }),


  [ACTIONS_2D.CLEANUP_2D]: (state) => {
    return state;
  }
}, design2DState);


export default design2DReducer;
