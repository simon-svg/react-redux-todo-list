import { createStore, combineReducers } from 'redux';

import rootReducer from './rootReducer';

const store = createStore(combineReducers(rootReducer));

export default store;