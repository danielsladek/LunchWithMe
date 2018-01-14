import { delay } from 'redux-saga'
import { all, take } from 'redux-saga/effects'

import eventFeedPageFetchSaga from './pages/EventFeedPage/Saga'
import eventPanelSaga from './components/EventPanel/Saga'
import fbLoginSaga from './components/FBLogin/Saga'
import eventPageFetchSaga from './pages/EventDetail/Saga'
import lunchFormSaga from './components/LunchForm/Saga'

// single entry point to start all Sagas at once
//tady se pisou vsechny sagy, podobne jako rootReducer
export default function* rootSaga() {
  // yield take("EVENTS_FEED_FETCH", eventFeedPageFetchSaga);

  yield all([
    eventFeedPageFetchSaga(),
    eventPanelSaga(),
    fbLoginSaga(),
    eventPageFetchSaga(),
    lunchFormSaga(),
  ])
}
