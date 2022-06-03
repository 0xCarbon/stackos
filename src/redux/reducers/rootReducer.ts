import { combineReducers } from '@reduxjs/toolkit';
import general from './general';

const rootReducer = combineReducers({
  general,
});

export default rootReducer;
