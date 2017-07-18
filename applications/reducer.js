import { combineReducers } from 'redux';

import d1 from './design/reducers/1d.js';
import d2 from './design/reducers/2d.js';
import d3 from './design/reducers/3d.js';


const reducer = combineReducers({
  design: combineReducers({
    '1d': d1,
    '2d': d2,
    '3d': d3,
  }),
  result: '',
});


export default reducer;
