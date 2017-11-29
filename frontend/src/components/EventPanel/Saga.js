import { takeLatest, put, select } from 'redux-saga/effects';
import { SWITCH_EVENT_ATTENDANCE } from './Actions';
import { FETCH_EVENT_CHANGES } from '../../pages/EventFeedPage/Actions';
import Api from '../../Api';
import { getUserInfo } from '../../components/FBLogin/Reducer';

function* eventPanelSaga (action) {
  yield takeLatest(SWITCH_EVENT_ATTENDANCE, switchAttendance);
  //yield take(actions.EVENTS_FEED_FETCH);
}

function* switchAttendance (action) {
  try {
    const api = new Api(),
          loggedUser = yield select(getUserInfo),
          userAttendance = action.payload.event.eventAttendees.find((attendee) => attendee.id == loggedUser.userId).Attendance,
          eventId = action.payload.event.id,
          userId = loggedUser.userId,
          willAttend = action.payload.willAttend,
          event = action.payload.event;

    /* Change event attendance in DB */
    const switchAttendanceInDb = yield api.changeAttendance(eventId, userId, willAttend);

    /* Prepare event with changed attendance */
    var changedEvent = event;

    if (typeof userAttendance == 'undefined') {
      changedEvent.Attendance.push({ userId: userId, willAttend: willAttend, invited: null });
    } else {
      changedEvent.eventAttendees.find((attendee) => attendee.id == loggedUser.userId).Attendance.willAttend = willAttend;
    }

    /* Fetch change to eventsFeed store */
    yield put({
      type: FETCH_EVENT_CHANGES,
      payload: { event: action.payload.event },
    });

  } catch (e) {

  }
}

export default eventPanelSaga;
