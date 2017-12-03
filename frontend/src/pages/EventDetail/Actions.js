export const EVENT_FETCH = "EVENT_FETCH",
EVENT_FETCH_SUCCESS = 'EVENT_FETCH_SUCCESS'
,EVENT_FETCH_FAIL = 'EVENT_FETCH_FAIL' ;


export const EventFetch = (id) => {
    console.log('actiona');
    return {
    type: EVENT_FETCH,
    payload: {
        id: id
    }
}};





