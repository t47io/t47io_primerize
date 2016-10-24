import { createAction } from 'redux-actions';
import * as actions from './actionTypes';


export const changeSequenceAction = (seq) => ({
  type: actions.CHANGE_SEQUENCE,
  payload: {
    sequence: seq,
    type: 1
  }
});
export const changeTmAction = (tm) => ({
  type: actions.CHANGE_TM,
  payload: { tm }
});
export const changePrimerLenAction = (name, val) => ({
  type: actions.CHANGE_PRMLEN,
  payload: { [`${name}Len`]: val }
});
export const changeNumPrimerAction = (name, val) => ({
  type: actions.CHANGE_NUMPRM,
  payload: { [name]: val }
});
export const changeCheckT7Action = (checked) => ({
  type: actions.CHANGE_T7CHK,
  payload: { checked }
});


export const blur1DAction = () => ({ type: actions.CLEANUP_1D });


