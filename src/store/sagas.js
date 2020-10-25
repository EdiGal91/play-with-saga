import { put, takeEvery } from 'redux-saga/effects'
import { showAlert } from './actions/app'
import { FETCH_POST, FETCHING } from './types'

export function* sagaWatcher() {
  yield takeEvery(FETCHING, fetching)
  yield takeEvery(FETCH_POST, fetched)
}

function* fetching() {
  yield put(showAlert('Fetching....', 'warning'))
}

function* fetched() {
  yield put(showAlert('Fetched!'))
}