import { handleActions } from 'redux-actions';

import { design3DState } from '../constants/models';
import { ACTIONS_3D } from '../constants/actions';


const design3DReducer = handleActions({

}, design3DState);


export default design3DReducer;
