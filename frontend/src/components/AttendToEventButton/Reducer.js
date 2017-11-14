import {actions} from "./Actions";

const initialState = {};

export const AttendToEventButtonReducer = (state = initialState, action) => {
    console.log("reducer funguje");
    switch (action.type) {
        case actions.CHANGE_EVENT_ATTENDANCE:

          return {
            ...state,
              test: 1
          }

        default: {
          return state;
        }
    }
};

export const getEventById = (storeState, eventId) => storeState.eventFeed.events.find((event) => {return (event.id === eventId)});
