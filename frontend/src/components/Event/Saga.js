import { takeLatest, take, put, select } from 'redux-saga/effects';
import Api from '../../Api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* imageSaga(action) {
  //yield takeLatest(FETCH_EVENT_CHANGES, fetchEventChanges);
  yield takeLatest(, fetchEvents);
}

function* clearEventsStorage() {
  yield put({
    type: CLEAR_EVENTS_STORAGE,
  });
}

function* fetchEvents() {
  try {
    const api = new Api();
    const events = yield api.getEvents();
    const loggedUser = yield select(getUserInfo);

    yield put({
      type: EVENTS_FEED_SUCCESS,
      payload: events,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: EVENTS_FEED_FAIL,
    });
  }
}

export default imageSaga;
