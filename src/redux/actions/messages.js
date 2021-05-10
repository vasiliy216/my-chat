import { messageApi } from '../../utils/api'

const actions = {
    setMessages: items => ({
        type: 'MESSAGE:SET_ITEMS',
        payload: items
    }),
    setIsLoading: bool => ({
        type: 'MESSAGE:SET_IS_LOADING',
        payload: bool
    }),
    addMessage: message => (dispatch, getState) => {
        const { dialogs } = getState();
        const { currentDialogId } = dialogs;

        if (currentDialogId === message.dialog._id) {
            dispatch({
                type: "MESSAGES:ADD_MESSAGE",
                payload: message
            });
        }
    },
    fetchSendMessages: (text, dialogId) => () => {
        messageApi.send(text, dialogId)
    },
    fetchMessages: dialogId => dispatch => {
        dispatch(actions.setIsLoading(true))
        messageApi
            .getAllByDialogId(dialogId)
            .then(({ data }) => {
                dispatch(actions.setIsLoading(false))
                dispatch(actions.setMessages(data))
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false))
            })
    }
}

export default actions;