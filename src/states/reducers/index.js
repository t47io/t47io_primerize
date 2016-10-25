import { combineReducers } from 'redux';

import design1DReducer from './design1DReducer';
import design2DReducer from './design2DReducer';
import resultReducer from './resultReducer';


const rootReducer = combineReducers({
  'input1D': design1DReducer,
  'input2D': design2DReducer,
  'results': resultReducer
});

export default rootReducer;
