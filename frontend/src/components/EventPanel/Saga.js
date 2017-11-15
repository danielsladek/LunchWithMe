import { takeLatest, take, put } from 'redux-saga/effects';
import {delay} from 'redux-saga';
import actions from './Actions';
import axios from 'axios';

function* ChangeEventAttendanceSaga (action) {
  yield takeLatest(actions.CHANGE_EVENT_ATTENDANCE, changeAttendanceInDB, action.payload);
  yield take(actions.EVENTS_FEED_FETCH);

function* changeAttendanceInDB (event) {
  try {
    axios({
      method: 'put',
      url: '/events/' + event.id,
      data: {
        willAttend: event.willAttend,
      }
    });
  } catch (e) {

  }

export default ChangeEventAttendanceSaga;
