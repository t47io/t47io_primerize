import { createAction } from 'redux-actions';
import { ACTIONS_3D } from '../constants/actions';


export const changeTagAction = tag => ({
  type: ACTIONS_3D.CHANGE_TAG,
  payload: { tag },
});

export const changeSequenceAction = seq => ({
  type: ACTIONS_3D.CHANGE_SEQUENCE,
  payload: { sequence: seq },
});


export const changePrimerAction = (nodeName, seq) => ({
  type: ACTIONS_3D.CHANGE_PRIMER,
  payload: {
    sequence: seq,
    id: parseInt(nodeName.slice(13), 10),
  },
});

export const addPrimerAction = () => ({ type: ACTIONS_3D.ADD_PRIMER });

export const removePrimerAction = nodeName => ({
  type: ACTIONS_3D.REMOVE_PRIMER,
  payload: { id: parseInt(nodeName.slice(14), 10) },
});


export const changeStructureAction = (nodeName, seq) => ({
  type: ACTIONS_3D.CHANGE_STRUCTURE,
  payload: {
    sequence: seq,
    id: parseInt(nodeName.slice(16), 10),
  },
});

export const addStructureAction = () => ({ type: ACTIONS_3D.ADD_STRUCTURE });

export const removeStructureAction = nodeName => ({
  type: ACTIONS_3D.REMOVE_STRUCTURE,
  payload: { id: parseInt(nodeName.slice(17), 10) },
});


export const changeOffsetAction = offset => ({
  type: ACTIONS_3D.CHANGE_OFFSET,
  payload: { offset },
});

export const changePosAction = (nodeName, nodeVal) => ({
  type: ACTIONS_3D.CHANGE_REGPOS,
  payload: { [`${nodeName}Pos`]: nodeVal },
});

export const changeLibOptAction = libChoice => ({
  type: ACTIONS_3D.CHANGE_LIBOPT,
  payload: { libChoice },
});

export const changeNumMutAction = numMutation => ({
  type: ACTIONS_3D.CHANGE_NUMMUT,
  payload: { numMutation },
});

export const changeFillWTAction = isChecked => ({
  type: ACTIONS_3D.CHANGE_FILLCHK,
  payload: { isChecked },
});

export const changeIncludeSingleAction = isChecked => ({
  type: ACTIONS_3D.CHANGE_MONOCHK,
  payload: { isChecked },
});


export const drawIllustrationAction = () => ({ type: ACTIONS_3D.DRAW_ILLUSTRATION });

export const stopIllustrationAction = () => ({ type: ACTIONS_3D.STOP_ILLUSTRATION });


export const blur3DAction = () => ({ type: ACTIONS_3D.CLEANUP });

export const prepare3DAction = () => ({ type: ACTIONS_3D.FORMAT });

export const clear3DAction = () => ({ type: ACTIONS_3D.RESET });


export const submit3DinitAction = () => ({ type: ACTIONS_3D.SUBMIT_INIT });

export const submit3DsuccessAction = () => ({ type: ACTIONS_3D.SUBMIT_SUCCESS });

export const submit3DfailAction = () => ({ type: ACTIONS_3D.SUBMIT_FAIL });
