import { all, fork } from 'redux-saga/effects';

import swapSaga from './swap/sagas';

export default function* rootSaga() {
  yield all([fork(swapSaga)]);
}
