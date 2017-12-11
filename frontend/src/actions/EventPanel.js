export const ATTEND_TO_EVENT = 'ATTEND_TO_EVENT';
export const CANCEL_EVENT_ATTENDANCE = 'CANCEL_EVENT_ATTENDANCE';

export const attendToEvent = event => ({
  type: ATTEND_TO_EVENT,
  payload: {
    event,
  },
});

export const cancelEventAttendance = event => ({
  type: CANCEL_EVENT_ATTENDANCE,
  payload: {
    event,
  },
});
