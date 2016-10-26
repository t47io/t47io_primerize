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
    id: parseInt(nodeName.slice(13), 10),
  }
});

export const addPrimerAction = () => ({ type: ACTIONS_2D.ADD_PRIMER });

export const removePrimerAction = (nodeName) => ({
  type: ACTIONS_2D.REMOVE_PRIMER,
  payload: { id: parseInt(nodeName.slice(14), 10) }
});


export const changeOffsetAction = (offset) => ({
  type: ACTIONS_2D.CHANGE_OFFSET,
  payload: { offset: offset }
});

export const changePosAction = (nodeName, nodeVal) => ({
  type: ACTIONS_2D.CHANGE_REGPOS,
  payload: { [`${nodeName}Pos`]: nodeVal }
});

export const changeLibOptAction = (libChoice) => ({
  type: ACTIONS_2D.CHANGE_LIBOPT,
  payload: { libChoice: libChoice }
});


export const drawIllustrationAction = () => ({ type: ACTIONS_2D.DRAW_ILLUSTRATION });

export const stopIllustrationAction = () => ({ type: ACTIONS_2D.STOP_ILLUSTRATION });


export const blur2DAction = () => ({ type: ACTIONS_2D.CLEANUP });

export const prepare2DAction = () => ({ type: ACTIONS_2D.FORMAT });

export const clear2DAction = () => ({ type: ACTIONS_2D.RESET });


export const submit2DinitAction = () => ({ type: ACTIONS_2D.SUBMIT_INIT });

export const submit2DsuccessAction = () => ({ type: ACTIONS_2D.SUBMIT_SUCCESS });

export const submit2DfailAction = () => ({ type: ACTIONS_2D.SUBMIT_FAIL });
