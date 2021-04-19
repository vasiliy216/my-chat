const initialState = {
    dialogId: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DIALOGS_SET_ID':
            return {
                ...state,
                dialogId: payload
            };
        default:
            return state
    }
}