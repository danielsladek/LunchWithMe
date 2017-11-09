export const actions = {
  EVENTS_FEED_FETCH: "EVENTS_FEED_FETCH"
};

export const eventFeedFetch = () => {
    console.log("Actiona bezi",actions.EVENTS_FEED_FETCH);
    return {
    type: actions.EVENTS_FEED_FETCH
  };
};

export default actions;
