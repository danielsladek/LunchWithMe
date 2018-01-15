import {
  EVENTS_FEED_FETCH,
  EVENTS_FEED_SUCCESS,
  EVENTS_FEED_FAIL,
  FETCH_EVENT_CHANGES,
  CLEAR_EVENTS_STORAGE,
} from './Actions'
// import { assign, isEmpty } from "ramda";

const initialState = {
  /*events: [
        {
            id: 1,
            description: "Lorem Ipsum ",
            timeStart: new Date(),
            timeEnd: new Date(),
            user: {
                name: "Ondra",
                surname: "MámHlad"
            },
            eventAttendees: [
                {
                    id: 2,
                    name: 'Franta',
                    surname: 'Omáčka'
                }
            ],
            willAttend: false,
            maximumLunchBuddies: 5,
        }
    ],
    isLoading: false,
    error: null*/
}

//Reducer Vrati upraveny state podle toho co mu pride za typ akce
export const EventFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_FEED_FETCH:
      return {
        ...state,
        isLoading: true,
      }

    case EVENTS_FEED_SUCCESS:
      return {
        ...state,
        events: action.payload.events,
        isLoading: false,
        success: true,
      }

    case EVENTS_FEED_FAIL:
      return {
        ...state,
        events: {},
        isLoading: false,
        success: false,
      }

    case CLEAR_EVENTS_STORAGE:
      return {}

    case FETCH_EVENT_CHANGES:
      const changedEvent = action.payload.event

      /* Fetch changed event */
      const events = getEvents(state).map((event, i) => {
        if (event.id === changedEvent.id) {
          return changedEvent
        } else {
          return event
        }
      })

      return {
        ...state,
        events: events,
      }

    default: {
      return state
    }
  }
}

// Selectory
export const getEventFeedState = function(storeState) {
  return storeState.eventFeed
} //eventFeed je definice z combineReducer. Bacha na to.
//Nevim jak to inteligentneji pojmenovavat,Aby v tom byl co nejmensi bordel.

export const getEvents = state => state.events || []

export const getEventById = (storeState, eventId) =>
  storeState.eventFeed.events.find(event => {
    return event.id === eventId
  })
