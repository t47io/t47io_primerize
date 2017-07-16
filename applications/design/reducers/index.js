import { combineReducers } from 'redux';

import d1 from './1d.js';
import d2 from './2d.js';
import d3 from './3d.js';


const reducer = combineReducers({
  '1d': d1,
  '2d': d2,
  '3d': d3,
});


export default reducer;
