import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers/index.js';


const middleware = [
  thunk,
  (typeof logger === 'function') ? logger : null,
].filter(Boolean);
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);


export default store;
