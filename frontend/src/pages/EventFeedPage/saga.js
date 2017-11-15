import { takeLatest, take, put } from "redux-saga/effects";
import {delay} from 'redux-saga';
//import Api from "../../api";
import actions, {eventFeedSucces} from "./actions";
import axios from 'axios';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* eventFeedPageFetchSaga(action) {
  yield takeLatest(actions.EVENTS_FEED_FETCH,tests);
  yield take(actions.EVENTS_FEED_FETCH);
}

function* tests() {
  try {
    const events = axios({
      method: 'get',
      url: 'http://localhost:3001/events/',
    });
    yield put({ type: actions.EVENTS_FEED_SUCCESS });
  } catch (e) {
    //Kdyz neco hodi error
    //vetsinou dat put a redux akci na error
  }
}


export default eventFeedPageFetchSaga;
