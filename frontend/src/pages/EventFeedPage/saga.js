import { takeLatest, take, put } from 'redux-saga/effects';
import Api from '../../Api';
import actions from './Actions';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* eventFeedPageFetchSaga(action) {
  yield takeLatest(actions.EVENTS_FEED_FETCH, fetchEvents);
  yield take(actions.EVENTS_FEED_FETCH);
}

function* fetchEvents() {
  try {
    const client = new Api();
    const events = yield client.getEvents();

    var eventsWithAttendees = events.map((event, i) => {
      const eventAttendees = client.getEventAttendees(event.id);
      console.log(eventAttendees);
      event = {
        ...event,
          eventAttendees: eventAttendees,
      }
    });

    console.log(eventsWithAttendees);

    yield put({
      type: actions.EVENTS_FEED_SUCCESS,
      payload: events,
    });
  } catch (e) {

  }
}

export default eventFeedPageFetchSaga;
