import { createAction } from 'redux-actions';
import { ACTIONS_UI } from '../constants/actions';


export const showModalAction = (text) => ({
  type: ACTIONS_UI.SHOW_MODAL,
  payload: { text }
});

export const hideModalAction = () => ({ type: ACTIONS_UI.HIDE_MODAL });

