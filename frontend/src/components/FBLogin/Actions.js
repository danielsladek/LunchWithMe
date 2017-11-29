export const USER_LOGIN = 'USER_LOGIN',
             USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
             USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export const userLogin = (facebookToken) => ({
    type: USER_LOGIN,
    payload: {facebookToken: facebookToken},
});

export const userLoginSuccess = (userLogin) => ({
    type: USER_LOGIN_SUCCESS,
    payload: userLogin,
});

export const userLoginFail = (userLogin) => ({
    type: USER_LOGIN_FAIL,
    payload: userLogin,
});
