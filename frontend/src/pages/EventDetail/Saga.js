import { takeLatest, take, put, select,call } from 'redux-saga/effects';
import Api from '../../Api';
import { EVENT_FETCH, EVENT_FETCH_SUCCESS,EVENT_FETCH_FAIL } from './Actions';
import axios from 'axios';
//import { assign, isEmpty } from "ramda";
//import { getUserInfo } from '../../components/FBLogin/Reducer';
//import { getEvents } from './Reducer';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* eventPageFetchSaga(action) {
    try{
        console.log("SAGA",EVENT_FETCH);
   // yield take();
        console.log("SAGA222");
    let eventData;

    yield call(axios.get('http://localhost:3001/events/' + action.payload.id).then(
        (response) => eventData = response.data
    ));

    yield put({
        type: EVENT_FETCH_SUCCESS,
        payload: eventData,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: EVENT_FETCH_FAIL,
      });
    }

}



export default eventPageFetchSaga;
