export const UPDATE_EVENT = "UPDATE_EVENT",
             UPDATE_EVENT_FAIL = "UPDATE_EVENT_FAIL";

export const updateEvent = (payload) => ({
  type: UPDATE_EVENT,
  payload: payload
});

export const updateEventFail = (payload) => ({
  type: UPDATE_EVENT_FAIL,
  payload: payload
});
