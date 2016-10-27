import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

import rootReducer from './reducers';


const store = createStore(
  rootReducer,
  undefined,
  compose(
    autoRehydrate(),
    applyMiddleware(thunk, createLogger())
  )
);
const persistor = persistStore(store);

export { store, persistor };
