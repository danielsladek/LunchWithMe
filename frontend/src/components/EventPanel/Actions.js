export const SWITCH_EVENT_ATTENDANCE = 'SWITCH_EVENT_ATTENDANCE',
             DELETE_EVENT = 'DELETE_EVENT';

export const switchEventAttendance = (payload) => ({
    type: SWITCH_EVENT_ATTENDANCE,
    payload: payload,
});

export const deleteEvent = (payload) => ({
    type: DELETE_EVENT,
    payload: payload,
});
