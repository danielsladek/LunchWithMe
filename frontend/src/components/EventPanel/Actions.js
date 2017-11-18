export const actions = {
  SWITCH_EVENT_ATTENDANCE: 'SWITCH_EVENT_ATTENDANCE',
  FETCH_EVENT_PANEL_TO_STORE: 'FETCH_EVENT_PANEL_TO_STORE',
}

export const switchEventAttendance = (event) => ({
    type: actions.SWITCH_EVENT_ATTENDANCE,
    payload: event,
});

export const fetchEventPanelToStore = (event) => ({
    type: actions.FETCH_EVENT_PANEL_TO_STORE,
    payload: event,
});
