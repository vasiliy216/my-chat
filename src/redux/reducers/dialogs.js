const initialState = {
    items: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DIALOGS_SET_ITEMS':
            return {
                ...state,
                items: payload
            };
        default:
            return state
    }
}