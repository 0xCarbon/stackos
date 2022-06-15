import { combineReducers } from '@reduxjs/toolkit';
import general from './swap';

const rootReducer = combineReducers({
  general,
});

export default rootReducer;
