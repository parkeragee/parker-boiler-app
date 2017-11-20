export default function data (state = [], action) {
    switch (action.type) {
        case 'USERS_FETCHED':
            return action.data;
        case 'USER_LOGGED_OUT':
            return [];
        default:
            return state;
    }
}