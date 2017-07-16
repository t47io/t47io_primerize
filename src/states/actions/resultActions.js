import { createAction } from 'redux-actions';
import { ACTIONS_RESULT } from '../constants/actions';


export const addResultAction = json => ({
  type: ACTIONS_RESULT.ADD_RESULT,
  payload: json,
});

export const removeResultAction = nodeName => ({
  type: ACTIONS_RESULT.REMOVE_RESULT,
  payload: { jobId: nodeName.slice(14) },
});


export const clearResultsAction = () => ({ type: ACTIONS_RESULT.CLEAR_RESULT });


export const gotoResultAction = jobId => ({
  type: ACTIONS_RESULT.GOTO_RESULT,
  payload: { jobId },
});

export const getResultAction = jobId => ({
  type: ACTIONS_RESULT.GET_RESULT,
  payload: { jobId },
});

export const updateResultAction = data => ({
  type: ACTIONS_RESULT.UPDATE_RESULT,
  payload: { data },
});


export const blurSearchAction = () => ({ type: ACTIONS_RESULT.CLEANUP });

export const submitSearchAction = jobId => ({
  type: ACTIONS_RESULT.SEARCH,
  payload: { jobId },
});
