import {saveAcctInfo, fetchAccountInfo} from '../utils/web-utils/accounts';

export function saveAccount (acctInfo) {
    return dispatch => {
        saveAcctInfo(acctInfo).then(data => {
            dispatch({
                type: 'ACCOUNT_SAVED',
                data,
            });
        });
    };
}

export function getAccount () {
    return dispatch => {
        fetchAccountInfo().then(data => {
            dispatch({
                type: 'ACCOUNT_FETCHED',
                data,
            });
        });
    };
}