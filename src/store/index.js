import { createStore } from 'redux';
import { rootReducer } from 'reducers';
// import booksSlice from 'slice';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  //   booksSlice /* preloadedState, */,
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
