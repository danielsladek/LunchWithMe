import {actions} from "./actions";

const initialState = {

    event: [
        {
            name: '',
            date: '',
            time: '',
            description: '',
            lunchevent: '',
            invitations: '',
        }
    ],

    isLoading: false,
    error: null
};

//Reducer Vrati upraveny state podle toho co mu pride za typ akce
export const eventAddLunchReducer = (state = initialState, action) => {
    switch (action.type) {
    
        case actions.EVENTS_LUNCH_SEND: {
            
            const { payload } = action;

            return {
                ...state,
                isLoading: true
            }
        }

        default:
            {
                return state;
            }

    }
};

// Selectory
export const getAddLunchState = (storeState) => storeState.eventFeed;//eventFeed je definice z combineReducer. Bacha na to.
//Nevim jak to inteligentneji pojmenovavat,Aby v tom byl co nejmensi bordel.

export const getEvents = (state) => state.events || [];
