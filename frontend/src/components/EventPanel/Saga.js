import { takeLatest, take, put } from 'redux-saga/effects';
import {delay} from 'redux-saga';
import actions from './Actions';
import Api from '../../Api';
import axios from 'axios';

function* ChangeEventAttendanceSaga (action) {
  yield takeLatest(actions.SWITCH_EVENT_ATTENDANCE, switchAttendance);
  //yield take(actions.EVENTS_FEED_FETCH);
}

function* switchAttendance (action) {
  try {
    const api = new Api();
    console.log("aa");
    const abc = yield api.switchAttendance(action.payload.eventId, action.payload.userId, action.payload.willAttend);
    console.log(abc);
  } catch (e) {

  }

export default ChangeEventAttendanceSaga;
