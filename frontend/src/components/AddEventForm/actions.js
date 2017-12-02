export const actions = {
  EVENT_SUBMIT: 'EVENT_SUBMIT',
  FIELD_CHANGE: 'FIELD_CHANGE'
}

export const submitEvent = state => ({
  type: actions.EVENT_SUBMIT,
  payload: {
    state,
  },
});

export const fieldChange = (id, value) => ({
  type: actions.FIELD_CHANGE,
  id,
  value,
});