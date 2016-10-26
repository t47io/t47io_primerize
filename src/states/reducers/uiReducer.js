import { handleActions } from 'redux-actions';

import { uiState } from '../models';
import { ACTIONS_UI } from '../actions/actionTypes';


const uiReducer = handleActions({
  [ACTIONS_UI.SHOW_MODAL]: (state, { payload }) => ({
    ...state,
    modal: {
      ...(state.modal),
      text: payload.text,
      isVisible: true
    }
  }),

  [ACTIONS_UI.HIDE_MODAL]: (state) => ({
    ...state,
    modal: {
      ...(state.modal),
      isVisible: false
    }
  })
}, uiState);


export default uiReducer;
