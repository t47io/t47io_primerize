import { handleActions } from 'redux-actions';

import { resultsState } from '../models';
import { ACTIONS_RESULT } from '../actions/actionTypes';


const resultReducer = handleActions({
  [ACTIONS_RESULT.CLEAR]: (state) => (resultsState),

  [ACTIONS_RESULT.ADD_RESULT]: (state, { payload }) => ([
    payload,
    ...state
  ]),

  [ACTIONS_RESULT.REMOVE_RESULT]: (state, { payload }) => (state.filter((json) => (json.jobId !== payload.jobId))),


}, resultsState);


export default resultReducer;
