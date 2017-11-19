import { takeLatest, take, put } from 'redux-saga/effects';
import Api from '../../Api';
import { EVENTS_FEED_SUCCESS, EVENTS_FEED_FAIL, EVENTS_FEED_FETCH } from './Actions';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* eventFeedPageFetchSaga(action) {
  yield takeLatest(EVENTS_FEED_FETCH, fetchEvents);
  yield take(EVENTS_FEED_FETCH);
}

function* fetchEvents() {
  try {
    const api = new Api();
    const events = yield api.getEvents();

    yield put({
      type: EVENTS_FEED_SUCCESS,
      payload: events,
    });
  } catch (e) {
    yield put({
      type: EVENTS_FEED_FAIL,
    });
  }
}

export default eventFeedPageFetchSaga;
