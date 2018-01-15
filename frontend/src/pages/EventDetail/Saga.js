import { takeLatest, put } from 'redux-saga/effects'
import {
  EVENT_FETCH,
  EVENT_FETCH_SUCCESS,
  EVENT_FETCH_FAIL,
  CLEAR_EVENT_DETAIL_STORAGE,
} from './Actions'
import { USER_LOGOUT } from '../../components/FBLogin/Actions'
import axios from 'axios'

//import { assign, isEmpty } from "ramda";
//import { getUserInfo } from '../../components/FBLogin/Reducer';
//import { getEvents } from './Reducer';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* eventPageFetchSaga(action) {
  yield takeLatest(EVENT_FETCH, fetchEventDetail)
  yield takeLatest(USER_LOGOUT, clearEventDetailStorage)
}

function* fetchEventDetail(action) {
  try {
    let eventData

    yield axios
      .get(process.env.REACT_APP_API_URL + '/events/' + action.payload.id)
      .then(response => {
        eventData = response.data.event
      })

    yield put({
      type: EVENT_FETCH_SUCCESS,
      payload: eventData,
    })
  } catch (e) {
    console.log(e)
    yield put({
      type: EVENT_FETCH_FAIL,
    })
  }
}

function* clearEventDetailStorage() {
  yield put({
    type: CLEAR_EVENT_DETAIL_STORAGE,
  })
}

export default eventPageFetchSaga
