export const SWITCH_EVENT_ATTENDANCE = 'SWITCH_EVENT_ATTENDANCE',
             FETCH_EVENT_PANEL_TO_STORE = 'FETCH_EVENT_PANEL_TO_STORE';

export const switchEventAttendance = (event) => {
  console.log("actiona bezi");

  return {
    type: SWITCH_EVENT_ATTENDANCE,
    payload: event,
}};

export const fetchEventPanelToStore = (event) => ({
    type: FETCH_EVENT_PANEL_TO_STORE,
    payload: event,
});
