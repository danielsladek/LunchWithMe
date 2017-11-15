import { actions } from "./Actions";
import { assign, isEmpty } from "ramda";

const initialState = {};

export const EventPanelReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CHANGE_EVENT_ATTENDANCE:
          return { event: Object.assign({}, action.payload, { willAttend: !action.payload.willAttend })}

        case actions.FETCH_EVENT_PANEL_TO_STORE:
          return { event: action.payload }

        default: {
          return state;
        }
    }
};

export const getEventById = (storeState, eventId) => storeState.eventFeed.events.find((event) => {return (event.id === eventId)});
export const getEventFromStore = (storeState, eventId) => {
  if (isEmpty(storeState.eventPanel) || typeof storeState.eventPanel.event == 'undefined') {
    return getEventById(storeState, eventId); // Pokud ve storu nic neni, vrati se event data ze storu eventFeed
  } else {
    return storeState.eventPanel.event; // Pokud ve storu neco je, vratime to
  }
};
