const initialState = {
    items: [],
    isLoading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'MESSAGE:SET_ITEMS':
            return {
                ...state,
                items: payload,
                // isLoading: false
            };
        case 'MESSAGE:SET_IS_LOADING':
            return {
                ...state,
                isLoading: payload
            };
        case 'MESSAGES:ADD_MESSAGE':
            return {
                ...state,
                items: [...state.items, payload],
            };
        default:
            return state
    }
}