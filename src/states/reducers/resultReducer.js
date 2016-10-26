import { handleActions } from 'redux-actions';
import { browserHistory } from 'react-router';

import { resultsState } from '../models';
import { ACTIONS_RESULT } from '../actions/actionTypes';


const resultReducer = handleActions({
  [ACTIONS_RESULT.ADD_RESULT]: (state, { payload }) => ([
    payload,
    ...state
  ]),

  [ACTIONS_RESULT.REMOVE_RESULT]: (state, { payload }) => (state.filter((json) => (json.jobId !== payload.jobId))),


  [ACTIONS_RESULT.CLEAR]: (state) => (resultsState),


  [ACTIONS_RESULT.REDIRECT]: (state, { payload }) => {
    browserHistory.push(`/result/${payload.jobId}`);
    return state;
  }

}, resultsState);


export default resultReducer;
