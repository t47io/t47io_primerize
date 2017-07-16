import { handleActions } from 'redux-actions';

import { design3DState } from '../constants/models';
import { ACTIONS_3D } from '../constants/actions';
import { cleanupTagSequence, cleanupPrimers, cleanupStructures } from '../../utilities/regexInputs';

const design3DReducer = handleActions({
  [ACTIONS_3D.CHANGE_TAG]: (state, { payload }) => ({
    ...state,
    tag: payload.tag,
  }),

  [ACTIONS_3D.CHANGE_SEQUENCE]: (state, { payload }) => ({
    ...state,
    sequence: payload.sequence,
  }),


  [ACTIONS_3D.CHANGE_PRIMER]: (state, { payload }) => ({
    ...state,
    primers: [
      ...(state.primers.slice(0, payload.id - 1)),
      payload.sequence,
      ...(state.primers.slice(payload.id)),
    ],
  }),

  [ACTIONS_3D.ADD_PRIMER]: state => ({
    ...state,
    primers: [
      ...(state.primers),
      ...(state.primers.length % 2 ? [''] : ['', '']),
    ],
  }),

  [ACTIONS_3D.REMOVE_PRIMER]: (state, { payload }) => ({
    ...state,
    primers: [
      ...(state.primers.slice(0, payload.id - 1)),
      ...(state.primers.slice(payload.id)),
    ],
  }),


  [ACTIONS_3D.CHANGE_STRUCTURE]: (state, { payload }) => ({
    ...state,
    structures: [
      ...(state.structures.slice(0, payload.id - 1)),
      payload.sequence,
      ...(state.structures.slice(payload.id)),
    ],
  }),

  [ACTIONS_3D.ADD_STRUCTURE]: state => ({
    ...state,
    structures: [
      ...(state.structures),
      '',
    ],
  }),

  [ACTIONS_3D.REMOVE_STRUCTURE]: (state, { payload }) => ({
    ...state,
    structures: [
      ...(state.structures.slice(0, payload.id - 1)),
      ...(state.structures.slice(payload.id)),
    ],
  }),


  [ACTIONS_3D.CHANGE_OFFSET]: (state, { payload }) => {
    const offset = state.options.offset;
    const newOffset = parseInt(payload.offset, 10);

    return {
      ...state,
      options: {
        ...(state.options),
        offset: newOffset,
        startPos: state.options.startPos - newOffset + offset,
        endPos: state.options.endPos - newOffset + offset,
      },
    };
  },

  [ACTIONS_3D.CHANGE_REGPOS]: (state, { payload }) => {
    let { startPos, endPos } = state.options;
    startPos = parseInt(payload.startPos) || startPos;
    endPos = parseInt(payload.endPos) || endPos;
    return {
      ...state,
      options: {
        ...(state.options),
        startPos,
        endPos,
      },
    };
  },

  [ACTIONS_3D.CHANGE_LIBOPT]: (state, { payload }) => ({
    ...state,
    options: {
      ...(state.options),
      libChoice: parseInt(payload.libChoice, 10),
    },
  }),

  [ACTIONS_3D.CHANGE_NUMMUT]: (state, { payload }) => ({
    ...state,
    options: {
      ...(state.options),
      numMutation: parseInt(payload.numMutation, 10),
    },
  }),

  [ACTIONS_3D.CHANGE_FILLCHK]: (state, { payload }) => ({
    ...state,
    options: {
      ...(state.options),
      isFillWT: payload.isChecked,
    },
  }),

  [ACTIONS_3D.CHANGE_MONOCHK]: (state, { payload }) => ({
    ...state,
    options: {
      ...(state.options),
      isIncludeSingle: payload.isChecked,
    },
  }),


  [ACTIONS_3D.DRAW_ILLUSTRATION]: state => ({
    ...state,
    isRender: true,
  }),

  [ACTIONS_3D.STOP_ILLUSTRATION]: state => ({
    ...state,
    isRender: false,
  }),


  [ACTIONS_3D.CLEANUP]: (state) => {
    const { tag, sequence } = cleanupTagSequence(state);
    const primers = cleanupPrimers(state.primers);
    const structures = cleanupStructures(state.structures);

    let { offset, startPos, endPos } = state.options;
    if (sequence.length) {
      startPos = Math.min(Math.max(startPos, 1 - offset), state.sequence.length - offset);
      endPos = Math.max(Math.min(endPos, sequence.length - offset), 1 - offset);
      if (startPos === endPos) {
        startPos = Math.max(startPos - 1, 1 - offset);
        endPos = Math.min(endPos + 1, sequence.length - offset);
      }
    } else {
      startPos = endPos = 0;
    }

    return {
      ...state,
      tag,
      sequence,
      primers,
      structures,
      options: {
        ...(state.options),
        offset,
        startPos,
        endPos,
      },
    };
  },

  [ACTIONS_3D.FORMAT]: state => ({
    ...state,
    primers: state.primers.filter(primer => (primer.length)),
    structures: state.structures.filter(structure => (structure.length)),
  }),


  [ACTIONS_3D.RESET]: state => (design3DState),
}, design3DState);


export default design3DReducer;
