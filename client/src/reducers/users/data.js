/**
 * Stores the number of segments
 * @param  {Int} state The number of segments
 * @param  {Object} action The interaction that triggered a change
 * @returns {int} The total number of segments
 */
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