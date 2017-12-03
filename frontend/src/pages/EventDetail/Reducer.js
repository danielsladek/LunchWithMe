import { EVENT_FETCH, EventFetch, EVENT_FETCH_SUCCESS } from './Actions';

const initialState = {

    event: {}
};




export const EventDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case EVENT_FETCH:
            return {
                ...state,
               
               
            }
        case EVENT_FETCH_SUCCESS:
        return {
                ...state,
                 event:action.payload,
                fetched:true
        }


        default:
            {
                return state;
            }
    }
}


// Selectory
export const getEventState = function (storeState) {
    return storeState.eventDetail;
} //eventFeed je definice z combineReducer. Bacha na to.
//Nevim jak to inteligentneji pojmenovavat,Aby v tom byl co nejmensi bordel.

export const getEvent = (state) => state.event || [];

