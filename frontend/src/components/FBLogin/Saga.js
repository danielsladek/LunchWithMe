import { takeLatest, take, put } from 'redux-saga/effects';
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT_FAIL, USER_LOGOUT_SUCCESS, USER_LOGOUT } from "./Actions";
import Api from '../../Api';
import { browserHistory } from "react-router";

function* fbLoginSaga (action) {
  yield takeLatest(USER_LOGIN, userLogin);
  yield takeLatest(USER_LOGOUT, userLogout);
  yield take(USER_LOGIN);
}

function* userLogin (action) {

  try {
    const api = new Api();
    var userInfo = {};
    const getUserId = yield api.userLogin(action.payload.facebookToken).then(function(response, data) {
      const { id, name, surname, picture, icon } = response;
      userInfo = {
        userId: id,
        name: name,
        surname: surname,
        icon: icon,
      };
    });

    sessionStorage.setItem('isLogged', true);
    sessionStorage.setItem('userInfo', userInfo);
    browserHistory.replace('/feed'); // Redirect to Feed page if login successful

    yield put({
      type: USER_LOGIN_SUCCESS,
      payload: userInfo,
    });

  } catch (e) {
    console.log(e);
    yield put({
      type: USER_LOGIN_FAIL,
    });
  }
}

function* userLogout (action) {
  try {
    sessionStorage.removeItem('isLogged');
    sessionStorage.removeItem('userInfo');

    yield put({
      type: USER_LOGOUT_SUCCESS
    });

  } catch (e) {
    console.log(e);
    yield put({
      type: USER_LOGOUT_FAIL
    });
  }
}

export default fbLoginSaga;
