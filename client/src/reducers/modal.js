const defaultState = {
    active: false,
    message: null,
}

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