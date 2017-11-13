export const actions = {
    ATTEND_TO_EVENT: 'ATTEND_TO_EVENT',
    CANCEL_EVENT_ATTENDANCE: 'CANCEL_EVENT_ATTENDANCE',
    CHANGE_EVENT_ATTENDANCE: 'CHANGE_EVENT_ATTENDANCE',
}

export const attendToEvent = () => ({
  type: actions.ATTEND_TO_EVENT,
});

export const cancelEventAttendance = () => ({
  type: actions.CANCEL_EVENT_ATTENDANCE,
});

export const changeEventAttendance = (eventId) => ({
    type: actions.CHANGE_EVENT_ATTENDANCE,
    payload: eventId,
  });
