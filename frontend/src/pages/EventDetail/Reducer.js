import { EVENT_FETCH } from './Actions';

const initialState = {

    event:{}
};




export const EventDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


// Selectory
export const getEventState = function (storeState) {
    return storeState.EventDetailReducer;
} //eventFeed je definice z combineReducer. Bacha na to.
//Nevim jak to inteligentneji pojmenovavat,Aby v tom byl co nejmensi bordel.

export const getEvent = (state) => state.event || [];

