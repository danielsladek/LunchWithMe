import { takeLatest, take, put } from "redux-saga/effects";
import {delay} from 'redux-saga';
//import Api from "../../api";
import actions ,{eventFeedSucces} from "./actions";


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* eventFeedPageFetchSaga(action) {
  console.log("saga1");
  yield takeLatest(actions.EVENTS_FEED_FETCH,tests);





  yield take(actions.EVENTS_FEED_FETCH);
  console.log("saga1 -a action run");


//   try {
//     console.log("SAGA");
//   } catch (e) {
//     //Kdyz neco hodi error
//     //vetsinou dat put a redux akci na error
//   }
}
function* tests() {


  try {
    //api
    //yield delay(5000);


    yield put({ type: actions.EVENTS_FEED_SUCCESS });


} catch (e) {
  //Kdyz neco hodi error
  //vetsinou dat put a redux akci na error
}



    console.log("------------------saga2");

  }


export default eventFeedPageFetchSaga;
