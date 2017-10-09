export function toggleModal (active, message) {
    return {
        type: 'TOGGLE_MODAL',
        data: {
            active,
            message,
        },
    };
}