export const EVENTS_FEED_FETCH = "EVENTS_FEED_FETCH",
             EVENTS_FEED_SUCCESS = "EVENTS_FEED_SUCCESS",
             EVENTS_FEED_FAIL = "EVENTS_FEED_FAIL",
             FETCH_EVENT_CHANGES = "FETCH_EVENT_CHANGES",
             CLEAR_EVENTS_STORAGE = "CLEAR_EVENTS_STORAGE";

export const eventFeedFetch = (payload) => ({
  type: EVENTS_FEED_FETCH,
  payload: payload
});

export const eventFeedSucces = payload => ({
  type: EVENTS_FEED_SUCCESS,
  payload: payload
});

export const eventFeedFail = payload => ({
  type: EVENTS_FEED_FAIL,
  payload: payload
});

export const fetchEventChanges = payload => ({
  type: FETCH_EVENT_CHANGES,
  payload: payload
});

export const clearEventsStorage = payload => ({
  type: CLEAR_EVENTS_STORAGE,
  payload: payload
});
