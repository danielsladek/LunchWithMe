import {actions} from "./Actions";

const initialState = {};

export const AttendToEventButtonReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CHANGE_EVENT_ATTENDANCE:
          return {
            ...state,
              willAttend: !state.willAttend
          };

        default: {
          return state;
        }
    }
};

export const getEventById = (storeState, eventId) => storeState.eventFeed.events.find((event) => {return (event.id === eventId)});
