import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import rootReducer from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export type ApplicationState = ReturnType<typeof store.getState>;

export type ApplicationDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ApplicationState,
  unknown,
  Action<string>
>;

export default store;
