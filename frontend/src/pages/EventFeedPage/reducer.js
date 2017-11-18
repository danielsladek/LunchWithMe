import {actions} from "./Actions";

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
};

//Reducer Vrati upraveny state podle toho co mu pride za typ akce
export const eventFeedReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.EVENTS_FEED_FETCH:

            return {
                ...state,
                isLoading: true
            }

        case actions.EVENTS_FEED_SUCCESS:
            return {
                ...state,
                events: action.payload.events,
                isLoading: false,
                success: true
            }

        case actions.EVENTS_FEED_FAIL:
            return {
                ...state,
                events: {},
                isLoading: false,
                success: false
            }

        default:
            {
                return state;
            }
    }
};

// Selectory
export const getEventFeedState = function (storeState) {
    return storeState.eventFeed;
} //eventFeed je definice z combineReducer. Bacha na to.
//Nevim jak to inteligentneji pojmenovavat,Aby v tom byl co nejmensi bordel.

export const getEvents = (state) => state.events || [];
