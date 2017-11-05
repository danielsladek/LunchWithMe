import {actions} from "./actions";

const initialState = {
    events: [
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
            ]
        }
    ],
    isLoading: false,
    error: null
};

//Reducer Vrati upraveny state podle toho co mu pride za typ akce
export const eventFeedReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.EVENTS_FEED_FETCH:
            return {
                ...state,
                isLoading: true
            }

        default:
            {
                return state;
            }
    }
};

// Selectory
export const getEventFeedState = (storeState) => storeState.eventFeed;//eventFeed je definice z combineReducer. Bacha na to.
//Nevim jak to inteligentneji pojmenovavat,Aby v tom byl co nejmensi bordel.

export const getEvents = (state) => state.events || [];
