// eslint-disable-next-line no-unused-vars
import { all, put, takeLatest } from 'redux-saga/effects';
import { GeneralTypes, GetQuoteData, Quote } from './types';
import { fetchSwapQuote } from '../../services';
import { GeneralActions } from '.';

function* getQuoteData({ payload: { swapParams, networkId } }: GetQuoteData) {
  try {
    const quote: Quote = yield fetchSwapQuote(swapParams, networkId);

    const result = Number(quote.toTokenAmount * 10 ** -18);

    yield put(GeneralActions.getQuoteDataSuccess(Number(result?.toFixed(5))));
  } catch (err) {
    yield put(GeneralActions.getQuoteDataFailure());
  }
}

function* generalSaga() {
  yield all([takeLatest(GeneralTypes.GET_QUOTE_DATA_REQUEST, getQuoteData)]);
}

export default generalSaga;
