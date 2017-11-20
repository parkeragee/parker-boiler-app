export default function account (state = null, action) {
    switch (action.type) {
        case 'ACCOUNT_FETCHED':
        case 'ACCOUNT_SAVED':
            return action.data;
        case 'USER_LOGGED_OUT':
            return null;
        default:
            return state;
    }
}