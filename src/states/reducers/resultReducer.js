import { handleActions } from 'redux-actions';
import { browserHistory } from 'react-router';

import { resultsState } from '../constants/models';
import { ACTIONS_RESULT } from '../constants/actions';


const resultReducer = handleActions({
  [ACTIONS_RESULT.ADD_RESULT]: (state, { payload }) => ([
    payload,
    ...state,
  ]),

  [ACTIONS_RESULT.REMOVE_RESULT]: (state, { payload }) => (state.filter(json => (json.jobId !== payload.jobId))),


  [ACTIONS_RESULT.CLEAR_RESULT]: state => (resultsState),


  [ACTIONS_RESULT.GOTO_RESULT]: (state, { payload }) => {
    browserHistory.push(`/result/${payload.jobId}`);
    return state;
  },

  [ACTIONS_RESULT.UPDATE_RESULT]: (state, { payload }) => (state.map(job => (job.jobId === payload.data.jobId ? payload.data : job))),

}, resultsState);


export default resultReducer;
