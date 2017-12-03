<<<<<<< HEAD
import { EVENT_FETCH, EventFetch, EVENT_FETCH_SUCCESS } from './Actions';

const initialState = {

    event: {}
=======
import { EVENT_FETCH } from './Actions';

const initialState = {

    event:{}
>>>>>>> 5e8535509219e23d94c1624b81d338b42cb8ce30
};




export const EventDetailReducer = (state = initialState, action) => {
    switch (action.type) {
<<<<<<< HEAD
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
=======
        default:
            return state;
>>>>>>> 5e8535509219e23d94c1624b81d338b42cb8ce30
    }
}


// Selectory
export const getEventState = function (storeState) {
<<<<<<< HEAD
    return storeState.eventDetail;
=======
    return storeState.EventDetailReducer;
>>>>>>> 5e8535509219e23d94c1624b81d338b42cb8ce30
} //eventFeed je definice z combineReducer. Bacha na to.
//Nevim jak to inteligentneji pojmenovavat,Aby v tom byl co nejmensi bordel.

export const getEvent = (state) => state.event || [];

