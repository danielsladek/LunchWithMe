import { takeLatest, take, put } from "redux-saga/effects";
import { delay } from "redux-saga";
//import Api from "../../api";
import actions, { eventFeedSucces } from "./actions";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* eventFeedPageFetchSaga(action) {
  yield takeLatest(actions.EVENTS_FEED_FETCH, fetchEvents);

  // yield take(actions.EVENTS_FEED_FETCH);
}
function* fetchEvents() {
  try {
    //api --
    yield delay(5000);

    yield put({
      type: actions.EVENTS_FEED_SUCCESS,
      payload: {
        events: {
          id: 2,
          description: "Lorem Ipsum z api  ",
          timeStart: new Date(),
          timeEnd: new Date()
        }
      }
    });
  } catch (e) {
    yield put({
      type: actions.EVENTS_FEED_ERROR
    });
  }
}

export default eventFeedPageFetchSaga;
