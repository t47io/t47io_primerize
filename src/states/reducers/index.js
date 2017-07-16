import { combineReducers } from 'redux';

import design1DReducer from './design1DReducer';
import design2DReducer from './design2DReducer';
import design3DReducer from './design3DReducer';
import resultReducer from './resultReducer';
import uiReducer from './uiReducer';


const rootReducer = combineReducers({
  input1D: design1DReducer,
  input2D: design2DReducer,
  input3D: design3DReducer,

  results: resultReducer,

  ui: uiReducer,
});

export default rootReducer;
