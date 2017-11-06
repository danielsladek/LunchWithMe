export const actions = {
    EVENTS_LUNCH_SEND: 'EVENTS_LUNCH_SEND',
}

export const addLunch = lunch => ({
  type: EVENTS_LUNCH_SEND,
  payload: {
    lunch,
  },
});