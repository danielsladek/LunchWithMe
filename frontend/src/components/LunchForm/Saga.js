import { takeLatest,  put } from 'redux-saga/effects'
import { UPDATE_EVENT, UPDATE_EVENT_FAIL } from './Actions'
import { EVENTS_FEED_FETCH } from '../../pages/EventFeedPage/Actions'

function* lunchFormSaga(action) {
  yield takeLatest(UPDATE_EVENT, updateEvent)
}

function* updateEvent() {
  try {
  

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
