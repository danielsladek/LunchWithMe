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
<<<<<<< HEAD
}};





=======
}};
>>>>>>> 5e8535509219e23d94c1624b81d338b42cb8ce30
