import { createAction } from 'redux-actions';
import { ACTIONS_RESULT } from './actionTypes';


export const addResultAction = (json) => ({
  type: ACTIONS_RESULT.ADD_RESULT,
  payload: json
});

export const removeResultAction = (nodeName) => ({
  type: ACTIONS_RESULT.REMOVE_RESULT,
  payload: { jobId: nodeName.slice(14) }
});


export const clearResultsAction = () => ({ type: ACTIONS_RESULT.CLEAR });


export const gotoResultAction = (jobId) => ({
  type: ACTIONS_RESULT.REDIRECT,
  payload: { jobId }
});
