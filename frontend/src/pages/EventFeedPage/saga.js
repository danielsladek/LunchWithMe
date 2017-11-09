import { takeEvery, take, put } from "redux-saga/effects";
//import Api from "../../api";
import actions from "./actions";


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* eventFeedPageFetchSaga(action) {
    console.log("saga1");
  yield takeEvery(actions.EVENTS_FEED_FETCH,tests);
    

  yield take(actions.EVENTS_FEED_FETCH, tests);
  console.log("saga1 -a action run");
 

//   try {
//     console.log("SAGA");
//   } catch (e) {
//     //Kdyz neco hodi error
//     //vetsinou dat put a redux akci na error
//   }
}
function* tests() {
  
    console.log("------------------saga2");
   
  }


export default eventFeedPageFetchSaga;
