import { handleActions } from 'redux-actions';
import { browserHistory } from 'react-router';

import { resultsState } from '../constants/models';
import { ACTIONS_RESULT } from '../constants/actions';


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
