const initialState = {
    items: [],
    currentDialogId: window.location.pathname.split('/dialog/')[1],
    currentUserId: false,
    isLoading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DIALOGS:SET_ITEMS':
            return {
                ...state,
                items: payload
            };
        case 'DIALOGS:SET_CURRENT_DIALOG_ID':
            return {
                ...state,
                currentDialogId: payload
            };
        case 'DIALOGS:REMOVE_CURRENT_DIALOG_ID':
            return {
                ...state,
                currentDialogId: payload
            };
        case 'DIALOGS:SET_CURRENT_USER_ID':
            return {
                ...state,
                currentUserId: payload
            };
        case 'DIALOGS:REMOVE_CURRENT_USER_ID':
            return {
                ...state,
                currentUserId: payload
            };
        case 'DIALOGS:LAST_MESSAGE_READED_STATUS':
            return {
                ...state,
                items: state.items.map(dialog => {
                    if (dialog._id === payload.dialogId) {
                        dialog.lastMessage.readed = dialog.lastMessage.partner !== payload.userId ? true : false;
                    }
                    return dialog;
                }),
            };
        default:
            return state
    }
}