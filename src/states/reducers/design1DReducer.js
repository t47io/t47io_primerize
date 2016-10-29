import { handleActions } from 'redux-actions';

import { design1DState } from '../constants/models';
import { ACTIONS_1D } from '../constants/actions';
import { cleanupTagSequence } from '../../utilities/regexInputs';


const design1DReducer = handleActions({
  [ACTIONS_1D.CHANGE_TAG]: (state, { payload }) => ({
    ...state,
    tag: payload.tag
  }),

  [ACTIONS_1D.CHANGE_SEQUENCE]: (state, { payload }) => ({
    ...state,
    sequence: payload.sequence
  }),


  [ACTIONS_1D.CHANGE_TM]: (state, { payload }) => ({
    ...state,
    options: {
      ...(state.options),
      tm: parseFloat(payload.tm) || state.options.tm
    }
  }),

  [ACTIONS_1D.CHANGE_PRMLEN]: (state, { payload }) => {
    let { minLen, maxLen } = state.options;
    minLen = parseInt(payload.minLen, 10) || minLen;
    maxLen = parseInt(payload.maxLen, 10) || maxLen;
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
      numPrimer = parseInt(payload.prmnum, 10);
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


  [ACTIONS_1D.CLEANUP]: (state) => {
    let { tag, sequence } = cleanupTagSequence(state);

    let { minLen, maxLen, numPrimer } = state.options;
    minLen = Math.max(Math.min(minLen, maxLen), design1DState.options.minLen);
    maxLen = sequence.length ? Math.min(Math.max(maxLen, minLen), Math.max(maxLen, sequence.length)) : Math.max(maxLen, minLen);
    numPrimer = Math.round(numPrimer / 2) * 2;

    return {
      ...state,
      tag,
      sequence,
      options: {
        ...(state.options),
        minLen,
        maxLen,
        numPrimer
      }
    };
  },

  [ACTIONS_1D.RESET]: (state) => (design1DState)
}, design1DState);


export default design1DReducer;
