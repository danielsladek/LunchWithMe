import { delay } from 'redux-saga'
import { put, takeEvery, all, takeLatest } from 'redux-saga/effects'
import eventFeedPageActions  from '../pages/EventFeedPage/actions'

import {eventFeedPageFetchSaga} from './eventFeedSaga'

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    takeLatest(eventFeedPageActions.EVENTS_FEED_FETCH,eventFeedPageFetchSaga)
    
  ])
} 