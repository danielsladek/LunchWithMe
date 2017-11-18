export const actions = {
  EVENTS_FEED_FETCH: "EVENTS_FEED_FETCH",
  EVENTS_FEED_SUCCESS: "EVENTS_FEED_SUCCESS"
};

export const eventFeedFetch = () => {
  return { type: actions.EVENTS_FEED_FETCH };
};

export const eventFeedSucces = payload => {
  return {
    type: actions.EVENTS_FEED_SUCCESS,
    payload: payload
  };
};

export const eventFeedFail = payload => {
  return {
    type: actions.EVENTS_FEED_FAIL,
    payload: payload
  };
};

export default actions;
