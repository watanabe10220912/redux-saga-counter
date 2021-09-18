import { put, takeEvery, delay } from 'redux-saga/effects';
import { INCREMENT, INCREMENT_ASYNC } from '../actionTypes';

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: INCREMENT });
}

export default function* rootSaga() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}