import { handleActions } from 'redux-actions';

import { design2DState } from '../models';
import { ACTIONS_2D } from '../actions/actionTypes';
import { cleanupTagSequence, cleanupPrimers } from './sharedFunc';


const design2DReducer = handleActions({
  [ACTIONS_2D.CHANGE_TAG]: (state, { payload }) => ({
    ...state,
    tag: payload.tag
  }),

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


  [ACTIONS_2D.CLEANUP]: (state) => {
    let { tag, sequence } = cleanupTagSequence(state);
    let primers = cleanupPrimers(state.primers)

    return {
      ...state,
      tag,
      sequence,
      primers,
      options: {
        ...(state.options),
      }
    };
  },
  [ACTIONS_2D.RESET]: (state) => (design2DState)  
}, design2DState);


export default design2DReducer;
