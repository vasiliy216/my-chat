import { dialogsApi, userApi } from '../../utils/api'

const actions = {
    setDialogs: items => ({
        type: 'DIALOGS:SET_ITEMS',
        payload: items
    }),
    setCurrentDialogId: items => ({
        type: 'DIALOGS:SET_CURRENT_DIALOG_ID',
        payload: items
    }),
    removeCurrentDialogId: () => ({
        type: 'DIALOGS:REMOVE_CURRENT_DIALOG_ID',
        payload: false
    }),
    setCurrentUserId: items => ({
        type: 'DIALOGS:SET_CURRENT_USER_ID',
        payload: items
    }),
    removeCurrentUserId: () => ({
        type: 'DIALOGS:REMOVE_CURRENT_USER_ID',
        payload: false
    }),
    updateReadedStatus: ({ userId, dialogId }) => ({
        type: 'DIALOGS:LAST_MESSAGE_READED_STATUS',
        payload: {
            userId,
            dialogId,
        },
    }),
    fetchDialogs: () => dispatch => {
        dialogsApi.getAll().then(({ data }) => {
            dispatch(actions.setDialogs(data))
        })
    },
    removeDialog: id => dispatch => {
        dialogsApi.remove(id).then(() => {
            dispatch(actions.removeCurrentDialogId())
        })
    },
    fetchUsers: query => dispatch => {
        return userApi.findUser(query).then(({ data }) => {
            return data;
        })
    },
    fetchUser: id => dispatch => {
        userApi.getUser(id).then(({ data }) => {
            dispatch(actions.setCurrentUserId(data))
        })
    }
}

export default actions;