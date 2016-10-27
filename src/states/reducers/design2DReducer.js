import { handleActions } from 'redux-actions';

import { design2DState } from '../constants/models';
import { ACTIONS_2D } from '../constants/actions';
import { cleanupTagSequence, cleanupPrimers } from '../../utilities/regexInputs';


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

  [ACTIONS_2D.ADD_PRIMER]: (state) => ({
    ...state,
    primers: [
      ...(state.primers),
      ...(state.primers.length % 2 ? [''] : ['', ''])
    ]
  }),

  [ACTIONS_2D.REMOVE_PRIMER]: (state, { payload }) => ({
    ...state,
    primers: [
      ...(state.primers.slice(0, payload.id - 1)),
      ...(state.primers.slice(payload.id))
    ]
  }),


  [ACTIONS_2D.CHANGE_OFFSET]: (state, { payload }) => {
    const offset = state.options.offset;
    const newOffset = parseInt(payload.offset, 10);

    return {
      ...state,
      options: {
        ...(state.options),
        offset: newOffset,
        startPos: state.options.startPos - newOffset + offset,
        endPos: state.options.endPos - newOffset + offset
      }
    };
  },

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


  [ACTIONS_2D.DRAW_ILLUSTRATION]: (state) => ({
    ...state,
    isRender: true
  }),

  [ACTIONS_2D.STOP_ILLUSTRATION]: (state) => ({
    ...state,
    isRender: false
  }),


  [ACTIONS_2D.CLEANUP]: (state) => {
    let { tag, sequence } = cleanupTagSequence(state);
    let primers = cleanupPrimers(state.primers)

    let { offset, startPos, endPos } = state.options;
    if (sequence.length) {
      startPos = Math.min(Math.max(startPos, 1 - offset), state.sequence.length - offset);
      endPos = Math.max(Math.min(endPos, sequence.length - offset), 1 - offset);
      if (startPos === endPos) {
        startPos = Math.max(startPos - 1, 1 - offset);
        endPos = Math.min(endPos + 1, sequence.length - offset);
      }
    } else {
      startPos = endPos = 0;
    }

    return {
      ...state,
      tag,
      sequence,
      primers,
      options: {
        ...(state.options),
        offset,
        startPos,
        endPos
      }
    };
  },

  [ACTIONS_2D.FORMAT]: (state) => ({
    ...state,
    primers: state.primers.filter((primer) => (primer.length))
  }),


  [ACTIONS_2D.RESET]: (state) => (design2DState)  
}, design2DState);


export default design2DReducer;
