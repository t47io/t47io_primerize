import { handleActions } from 'redux-actions';

import { resultsState } from '../models';
import { ACTIONS_RESULT } from '../actions/actionTypes';


const resultReducer = handleActions({
  [ACTIONS_RESULT.CLEAR]: (state) => (resultsState),

  

}, resultsState);


export default resultReducer;
