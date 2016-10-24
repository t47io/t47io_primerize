import { combineReducers } from 'redux';

import design1DReducer from './design1DReducer';

const rootReducer = combineReducers({
  'input1D': design1DReducer,
});

export default rootReducer;
