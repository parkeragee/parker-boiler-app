/**
 * Stores the logged in user data
 * @param  {Int} state The state
 * @param  {Object} action Action to change state
 * @returns {int} The user data
 */
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