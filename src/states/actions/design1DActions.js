import { createAction } from 'redux-actions';
import { ACTIONS_1D } from '../constants/actions';


export const changeTagAction = tag => ({
  type: ACTIONS_1D.CHANGE_TAG,
  payload: { tag },
});

export const changeSequenceAction = seq => ({
  type: ACTIONS_1D.CHANGE_SEQUENCE,
  payload: { sequence: seq },
});


export const changeTmAction = tm => ({
  type: ACTIONS_1D.CHANGE_TM,
  payload: { tm },
});

export const changePrimerLenAction = (nodeName, valLen) => ({
  type: ACTIONS_1D.CHANGE_PRMLEN,
  payload: { [`${nodeName}Len`]: valLen },
});

export const changeNumPrimerAction = (nodeName, nodeVal) => ({
  type: ACTIONS_1D.CHANGE_NUMPRM,
  payload: { [nodeName]: nodeVal },
});

export const changeCheckT7Action = isChecked => ({
  type: ACTIONS_1D.CHANGE_T7CHK,
  payload: { isChecked },
});


export const blur1DAction = () => ({ type: ACTIONS_1D.CLEANUP });

export const clear1DAction = () => ({ type: ACTIONS_1D.RESET });


export const submit1DinitAction = () => ({ type: ACTIONS_1D.SUBMIT_INIT });

export const submit1DsuccessAction = () => ({ type: ACTIONS_1D.SUBMIT_SUCCESS });

export const submit1DfailAction = () => ({ type: ACTIONS_1D.SUBMIT_FAIL });
