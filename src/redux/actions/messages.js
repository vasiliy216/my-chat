

const actions = {
    setMessagesId: id => ({
        type: 'DIALOGS_SET_ID',
        payload: id
    }),
    createMessages: () => dispatch => {
        dispatch(actions.setDialogs([])); //Лучше fetch => (id).then(({date}) => dispatch(actions.setMessagesId(date)))
    }
}

export default actions;