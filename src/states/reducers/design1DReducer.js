import { handleActions } from 'redux-actions';

import { design1DState } from '../models';
import { ACTIONS_1D } from '../actions/actionTypes';


const design1DReducer = handleActions({
  [ACTIONS_1D.CHANGE_SEQUENCE]: (state, { payload }) => ({
    ...state,
    sequence: payload.sequence
  }),
  [ACTIONS_1D.CHANGE_TM]: (state, { payload }) => ({
    ...state,
    options: {
      ...(state.options),
      tm: parseFloat(payload.tm)
    }
  }),
  [ACTIONS_1D.CHANGE_PRMLEN]: (state, { payload }) => {
    let { minLen, maxLen } = state.options;
    minLen = parseFloat(payload.minLen) || minLen;
    maxLen = parseFloat(payload.maxLen) || maxLen;
    return {
      ...state,
      options: {
        ...(state.options),
        minLen,
        maxLen
      }
    };
  },
  [ACTIONS_1D.CHANGE_NUMPRM]: (state, { payload }) => {
    let { numPrimer, isNumPrimer } = state.options;
    if ('prmchk' in payload) {
      isNumPrimer = payload.prmchk;
    } else {
      numPrimer = parseFloat(payload.prmnum);
    }
    return {
      ...state,
      options: {
        ...(state.options),
        numPrimer,
        isNumPrimer
      }
    }
  },
  [ACTIONS_1D.CHANGE_T7CHK]: (state, { payload }) => ({
    ...state,
    options: {
      ...(state.options),
      isCheckT7: payload.isChecked
    }
  }),

  [ACTIONS_1D.CLEANUP_1D]: (state) => {
    let { sequence, tag } = state;
    sequence = (sequence.match(/[ACGTUacgtu\ \n]+/g) || []).join('');
    tag = (tag.match(/[a-zA-Z0-9\ \.\-\_]+/g) || []).join('');

    let { minLen, maxLen, numPrimer } = state.options;
    minLen = Math.max(Math.min(minLen, maxLen), design1DState.options.minLen);
    maxLen = state.sequence.length ? Math.min(Math.max(maxLen, minLen), Math.max(maxLen, state.sequence.length)) : Math.max(maxLen, minLen);
    numPrimer = Math.round(numPrimer / 2) * 2;

    return {
      ...state,
      sequence,
      tag,
      options: {
        ...(state.options),
        minLen,
        maxLen,
        numPrimer
      }
    }

  }

}, design1DState);


export default design1DReducer;
