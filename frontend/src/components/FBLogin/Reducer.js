import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT_FAIL, USER_LOGOUT_SUCCESS, USER_LOGOUT } from "./Actions";
import { assign, isEmpty } from "ramda";

const initialState = {
  /*isLogged: true,
  userId: 1, // Debug
  icon: 'https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/UlIqmHJn-SK.gif',*/
  isLogged: false,
};

export const FBLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
          return Object.assign({}, state, { loginProcessing: true });

        case USER_LOGIN_SUCCESS: {
          const { userId, name, surname, icon } = action.payload;
          return Object.assign({}, state, { userId: userId, isLogged: true, name: name, surname: surname, icon: icon, loginProcessing: false });
        }

        case USER_LOGOUT_FAIL:
          return state;

        case USER_LOGOUT_SUCCESS:
          return { isLogged: false };

        case USER_LOGIN_FAIL:
          return state;

        default: {
          return state;
        }
    }
};

export const getUserInfo = (state) => state.userInfo;
