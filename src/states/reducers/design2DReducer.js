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
      payload.sequence,
      ...(state.primers.slice(payload.id))
    ]
  }),

  [ACTIONS_2D.ADD_PRIMER]: (state, { payload }) => ({
    ...state,
    primers: [
      ...(state.primers),
      '',
      ''
    ]
  }),

  [ACTIONS_2D.REMOVE_PRIMER]: (state, { payload }) => ({
    ...state,
    primers: [
      ...(state.primers.slice(0, payload.id - 1)),
      ...(state.primers.slice(payload.id))
    ]
  }),


  [ACTIONS_2D.CHANGE_OFFSET]: (state, { payload }) => ({
    ...state,
    options: {
      ...(state.options),
      offset: parseInt(payload.offset, 10)
    }
  }),

  [ACTIONS_2D.CHANGE_REGPOS]: (state, { payload }) => {
    let { startPos, endPos } = state.options;
    startPos = parseInt(payload.startPos) || startPos;
    endPos = parseInt(payload.endPos) || endPos;
    return {
      ...state,
      options: {
        ...(state.options),
        startPos,
        endPos
      }
    };
  },

  [ACTIONS_2D.CHANGE_LIBOPT]: (state, { payload }) => ({
      ...state,
      options: {
        ...(state.options),
        libChoice: parseInt(payload.libChoice, 10)
      }
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
