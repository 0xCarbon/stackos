import { combineReducers } from '@reduxjs/toolkit';
import swap from './swap';

const rootReducer = combineReducers({
  swap,
});

export default rootReducer;
