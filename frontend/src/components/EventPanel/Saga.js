import { takeLatest, take, put, select } from 'redux-saga/effects';
import { SWITCH_EVENT_ATTENDANCE } from './Actions';
import Api from '../../Api';
import axios from 'axios';
import { getUserInfo } from '../../components/FBLogin/Reducer';

function* eventPanelSaga (action) {
  yield takeLatest(SWITCH_EVENT_ATTENDANCE, switchAttendance);
  //yield take(actions.EVENTS_FEED_FETCH);
}

function* switchAttendance (action) {
  try {
    const api = new Api();
    const loggedUser = yield select(getUserInfo);

    /* Change event attendance in DB */
    const switchAttendanceInDb = yield api.switchAttendance(action.payload.id, loggedUser.userId, action.payload.willAttend);
    console.log(switchAttendanceInDb);
    /* Fetch change to eventsFeed store */


  } catch (e) {

  }
}

export default eventPanelSaga;
