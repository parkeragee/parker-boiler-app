const defaultState = {
    active: false,
    message: null,
}

/**
 * Stores the modal data
 * @param  {Int} state The state
 * @param  {Object} action Action to change state
 * @returns {int} The user data
 */
export default function modal (state = defaultState, action) {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return action.data;
        case 'USER_LOGGED_OUT':
            return defaultState;
        default:
            return state;
    }
}