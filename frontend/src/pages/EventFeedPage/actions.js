export const actions = {
  EVENTS_FEED_FETCH: "EVENTS_FEED_FETCH",
  EVENTS_FEED_SUCCESS: "EVENTS_FEED_SUCCESS"
};

export const eventFeedFetch = () => {
  console.log("Actiona bezi", actions.EVENTS_FEED_FETCH);
  return {type: actions.EVENTS_FEED_FETCH};
};

export const eventFeedSucces = () => {
  console.log("Success jupiiii", actions.EVENTS_FEED_SUCCESS);
  return {type: actions.EVENTS_FEED_SUCCESS};
};

export default actions;
