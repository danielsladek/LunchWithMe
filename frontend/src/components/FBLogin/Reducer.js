import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from "./Actions";
import { assign, isEmpty } from "ramda";

const initialState = {
  isLogged: false,
};

export const FBLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
          return state;

        case USER_LOGIN_SUCCESS:
          const { userId, name, surname } = action.payload;
          return Object.assign({}, state, { userId: userId, isLogged: true, name: name, surname: surname });

        case USER_LOGIN_FAIL:
          return {}

        default: {
          return state;
        }
    }
};

export const getUserInfo = (storeState) => storeState.userInfo;
