import { createAction } from 'redux-actions';
import * as actions from './actionTypes';

export const changeSequence = (seq) => ({
  type: actions.CHANGE_SEQUENCE,
  payload: {
    sequence: seq,
    type: '1d'
  }
});
