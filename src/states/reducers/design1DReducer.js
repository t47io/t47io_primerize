import 'whatwg-fetch';
import { handleActions } from 'redux-actions';

import { design1DState } from '../models';
import { ACTIONS_1D } from '../actions/actionTypes';
import { cleanupTagSequence } from './sharedFunc';


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

  [ACTIONS_1D.RESET]: (state) => (design1DState),


  [ACTIONS_1D.SUBMIT]: (state) => {
    let { tag, sequence } = state;
    let { tm, minLen, maxLen, numPrimer, isNumPrimer, isCheckT7 } = state.options;

    let postData1D = new URLSearchParams();
    postData1D.append('type', 1);

    postData1D.append('tag', tag);
    postData1D.append('sequence', sequence);
    postData1D.append('min_Tm', tm);
    postData1D.append('max_len', maxLen);
    postData1D.append('min_len', minLen);
    postData1D.append('num_primers', numPrimer);
    postData1D.append('is_num_primers', isNumPrimer);
    postData1D.append('is_check_t7', isCheckT7);

    fetch('http://127.0.0.1:8000/api/submit/', {
      method: 'POST',
      mode: 'cors',
      body: postData1D,
    }).then((response) => (response.json()))
    .then((json) => {
      console.log(json);
    });


    return state;
  }
}, design1DState);


export default design1DReducer;
