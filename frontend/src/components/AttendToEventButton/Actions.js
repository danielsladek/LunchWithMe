export const actions = {
  CHANGE_EVENT_ATTENDANCE: 'CHANGE_EVENT_ATTENDANCE',
}

export const changeEventAttendance = (eventId) => ({
    type: actions.CHANGE_EVENT_ATTENDANCE,
    payload: eventId,
});
