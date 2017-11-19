import { takeLatest, take, put } from 'redux-saga/effects';
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from "./Actions";
import Api from '../../Api';
import axios from 'axios';

function* fbLoginSaga (action) {
  yield takeLatest(USER_LOGIN, userLogin);
  yield take(USER_LOGIN);
}

function* userLogin (action) {
  try {
    const api = new Api();
    var userInfo = {};
    const getUserId = yield api.userLogin(action.payload.facebookToken).then(function(response, data) {
      const { id, name, surname } = response;
      userInfo = {
        userId: id,
        name: name,
        surname: surname,
      };
    });

    yield put({
      type: USER_LOGIN_SUCCESS,
      payload: userInfo,
    });
  } catch (e) {

  }
}

export default fbLoginSaga;
