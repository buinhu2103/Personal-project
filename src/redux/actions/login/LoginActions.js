export const POST_LOGIN = 'POST_LOGIN';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_ERROR = 'POST_LOGIN_ERROR';
export const POST_LOGOUT = 'POST_LOGOUT';

export const loginAction = (input) => {
    return {
        type: POST_LOGIN,
        data: input
    }
}

export const logoutAction = () => {
    return {
        type: POST_LOGOUT,
        data: null
    }
}
