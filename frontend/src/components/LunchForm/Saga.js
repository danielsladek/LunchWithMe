import { takeLatest, take, put, select } from 'redux-saga/effects'
import Api from '../../Api'
import { UPDATE_EVENT, UPDATE_EVENT_FAIL } from './Actions'
import { assign, isEmpty } from 'ramda'
import { EVENTS_FEED_FETCH } from '../../pages/EventFeedPage/Actions'

function* lunchFormSaga(action) {
  yield takeLatest(UPDATE_EVENT, updateEvent)
}

function* updateEvent() {
  try {
    const api = new Api()

    yield put({
      type: EVENTS_FEED_FETCH,
    })
  } catch (e) {
    console.log(e)
    yield put({
      type: UPDATE_EVENT_FAIL,
    })
  }
}

export default lunchFormSaga
