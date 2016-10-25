import { createAction } from 'redux-actions';
import { ACTIONS_RESULT } from './actionTypes';

export const clearResultsACtion = () => ({ type: ACTIONS_RESULT.CLEAR });

