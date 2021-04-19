import dateJSON from '../../db.json'

const actions = {
    setDialogs: items => ({
        type: 'DIALOGS_SET_ITEMS',
        payload: items
    }),
    setMessagesId: id => ({
        type: 'DIALOGS_SET_ID',
        payload: id
    }),
    createDialogs: () => dispatch => {
        dispatch(actions.setDialogs(dateJSON));
    }
}

export default actions;