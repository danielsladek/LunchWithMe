export const EVENT_FETCH = "EVENT_FETCH",
             EVENT_FETCH_SUCCESS = 'EVENT_FETCH_SUCCESS',
             EVENT_FETCH_FAIL = 'EVENT_FETCH_FAIL',
             CLEAR_EVENT_DETAIL_STORAGE = 'CLEAR_EVENT_DETAIL_STORAGE';


export const EventFetch = (id) => {
    return {
    type: EVENT_FETCH,
    payload: {
        id: id
    }
}};

export const clearEventDetailStorage = () => {
    return {
      type: CLEAR_EVENT_DETAIL_STORAGE,
    }
};
