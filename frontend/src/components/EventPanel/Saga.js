import { takeLatest, take, put } from 'redux-saga/effects';
import { SWITCH_EVENT_ATTENDANCE } from './Actions';
import Api from '../../Api';
import axios from 'axios';

function* eventPanelSaga (action) {
  console.log("saga bezi");
  yield takeLatest(SWITCH_EVENT_ATTENDANCE, switchAttendance);
  //yield take(actions.EVENTS_FEED_FETCH);
}

function* switchAttendance (action) {
  try {
    const api = new Api();
    console.log(action.payload);

    const abc = yield api.switchAttendance(action.payload.id, action.payload.userId, action.payload.willAttend);

  } catch (e) {

  }
}

export default eventPanelSaga;
