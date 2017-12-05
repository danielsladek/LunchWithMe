import { takeLatest, take, put, select, call } from 'redux-saga/effects';
import Api from '../../Api';
import { EVENT_FETCH, EVENT_FETCH_SUCCESS, EVENT_FETCH_FAIL } from './Actions';
import axios from 'axios';
//import { assign, isEmpty } from "ramda";
//import { getUserInfo } from '../../components/FBLogin/Reducer';
//import { getEvents } from './Reducer';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* eventPageFetchSaga() {

    let action = yield take(EVENT_FETCH);

    try {

        let eventData;

        yield axios.get(process.env.REACT_APP_API_URL + '/events/' + action.payload.id).then(
            (response) => {
                eventData = response.data.event
            }
        );

        yield put({
            type: EVENT_FETCH_SUCCESS,
            payload: eventData,
        });
    } catch (e) {
        yield put({
            type: EVENT_FETCH_FAIL,
        });
    }

}


export default eventPageFetchSaga;
