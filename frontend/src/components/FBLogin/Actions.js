export const USER_LOGIN = 'USER_LOGIN',
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAIL = 'USER_LOGIN_FAIL',
  USER_LOGOUT_FAIL = 'USER_LOGOUT_FAIL',
  USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS',
  USER_LOGOUT = 'USER_LOGOUT'

export const userLogin = facebookToken => {
  return {
    type: USER_LOGIN,
    payload: { facebookToken: facebookToken },
  }
}

export const userLoginSuccess = userLogin => ({
  type: USER_LOGIN_SUCCESS,
  payload: userLogin,
})

export const userLoginFail = userLogin => ({
  type: USER_LOGIN_FAIL,
  payload: userLogin,
})

export const userLogoutFail = userLogin => ({
  type: USER_LOGOUT_FAIL,
  payload: userLogin,
})

export const userLogoutSuccess = userLogin => ({
  type: USER_LOGOUT_SUCCESS,
  payload: userLogin,
})

export const userLogout = userLogin => ({
  type: USER_LOGOUT,
  payload: userLogin,
})
