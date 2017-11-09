import { delay } from "redux-saga";
import { all, take } from "redux-saga/effects";

import eventFeedPageFetchSaga from "./pages/EventFeedPage/saga";

// single entry point to start all Sagas at once
//tady se pisou vsechny sagy, podobne jako rootReducer
export default function* rootSaga() {
  console.log("rootSaga");
 // yield take("EVENTS_FEED_FETCH", eventFeedPageFetchSaga);

  yield all([
    eventFeedPageFetchSaga()
  ]);
}
