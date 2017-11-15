export const actions = {
  CHANGE_EVENT_ATTENDANCE: 'CHANGE_EVENT_ATTENDANCE',
  FETCH_EVENT_PANEL_TO_STORE: 'FETCH_EVENT_PANEL_TO_STORE',
}

export const changeEventAttendance = (event) => ({
    type: actions.CHANGE_EVENT_ATTENDANCE,
    payload: event,
});

export const fetchEventPanelToStore = (event) => ({
    type: actions.FETCH_EVENT_PANEL_TO_STORE,
    payload: event,
});
