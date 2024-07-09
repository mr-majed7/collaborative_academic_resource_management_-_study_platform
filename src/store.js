import { createStore } from 'redux';
import { combineReducers } from 'redux';

const initialState = {
  folders: [],
  materials: [],
  notes: [],
  questions: [],
  users: [],
  groups: [],
};

const rootReducer = combineReducers({
  // Your reducers here
});

const store = createStore(rootReducer, initialState);

export default store;
//Basic Redux Store