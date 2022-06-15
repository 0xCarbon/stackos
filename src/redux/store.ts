/* eslint-disable no-unused-vars */
import { applyMiddleware, createStore, Middleware, Store } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { Context, createWrapper } from 'next-redux-wrapper';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  (store as any).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export type ApplicationState = ReturnType<typeof rootReducer>;

export const wrapper = createWrapper(makeStore, { debug: true });
