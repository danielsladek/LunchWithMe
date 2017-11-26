export const EVENTS_FEED_FETCH = "EVENTS_FEED_FETCH",
             EVENTS_FEED_SUCCESS = "EVENTS_FEED_SUCCESS",
             EVENTS_FEED_FAIL = "EVENTS_FEED_FAIL",
             FETCH_EVENT_CHANGES = "FETCH_EVENT_CHANGES";

export const eventFeedFetch = () => {
  return { type: EVENTS_FEED_FETCH };
};

export const eventFeedSucces = payload => {
  return {
    type: EVENTS_FEED_SUCCESS,
    payload: payload
  };
};

export const eventFeedFail = payload => {
  return {
    type: EVENTS_FEED_FAIL,
    payload: payload
  };
};

export const fetchEventChanges = payload => {
  return {
    type: FETCH_EVENT_CHANGES,
    payload: payload
  };
};
