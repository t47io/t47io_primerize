import { createAction } from 'redux-actions';
import { ACTIONS_2D } from './actionTypes';


export const changeTagAction = (tag) => ({
  type: ACTIONS_2D.CHANGE_TAG,
  payload: { tag }
});

export const changeSequenceAction = (seq) => ({
  type: ACTIONS_2D.CHANGE_SEQUENCE,
  payload: { sequence: seq }
});

export const changePrimerAction = (nodeName, seq) => ({
  type: ACTIONS_2D.CHANGE_PRIMER,
  payload: {
    sequence: seq,
    id: parseInt(nodeName.slice(1), 10),
  }
});

export const addPrimerAction = () => ({ type: ACTIONS_2D.ADD_PRIMER });


export const changeOffset = (offset) => ({
  type: ACTIONS_2D.CHANGE_OFFSET,
  payload: { offset: offset }
});

export const changeStartPos = (startPos) => ({
  type: ACTIONS_2D.CHANGE_STARTPOS,
  payload: { startPos: startPos }
});

export const changeEndPos = (endPos) => ({
  type: ACTIONS_2D.CHANGE_ENDPOS,
  payload: { endPos: endPos }
});

export const changeLibChoice = (libChoice) => ({
  type: ACTIONS_2D.CHANGE_LIBOPT,
  payload: { libChoice: libChoice }
});


export const blur2DAction = () => ({ type: ACTIONS_2D.CLEANUP });

export const clear2DAction = () => ({ type: ACTIONS_2D.RESET });
