import {submitLogin, fetchUsers, createNewAccount, sendPasswordReset} from '../utils/web-utils/user';

export function logout() {
    return {type: 'USER_LOGGED_OUT'};
}

export function login (credentials) {
    return dispatch => {
        submitLogin(credentials).then(data => {
            dispatch({
                type: 'USER_LOGGED_IN',
                data,
            });
        });
    };
}

export function createAccount (credentials) {
    return dispatch => {
        createNewAccount(credentials).then(data => {
            dispatch({
                type: 'ACCOUNT_CREATED',
                data,
            });
        });
    };
}

export function resetPassword (credentials) {
    return dispatch => {
        sendPasswordReset(credentials).then(data => {
            dispatch({
                type: 'PASSWORD_RESET_SENT',
                data,
            });
        });
    };
}

export function getUsers() {
    return dispatch => {
        fetchUsers().then(data => {
            dispatch({
                type: 'USERS_FETCHED',
                data,
            });
        });
    };
}