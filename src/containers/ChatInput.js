import React from 'react'
import { ChatInput as ChatInputBase } from '../components/common'
import { connect } from 'react-redux'
import { Message } from '../redux/actions'
import store from '../redux/store'

const ChatInput = ({ fetchSendMessages, currentDialogId, user, dialogs }) => {

    if (!dialogs.length || !currentDialogId) {
        return null;
    }

    const currentDialogObj = dialogs.filter(
        dialog => dialog._id === currentDialogId
    )[0]

    let partner = {};

    if (currentDialogObj.author._id === user._id) {
        partner = currentDialogObj.partner;
    } else {
        partner = currentDialogObj.author;
    }

    return <ChatInputBase
        onSendMessages={fetchSendMessages}
        currentDialogId={currentDialogId}
        user={user}
        partner={partner}
    />
}

export default connect(({ dialogs, user }) => ({
    user: user.data,
    currentDialogId: dialogs.currentDialogId,
    dialogs: dialogs.items,
}), Message)(ChatInput)
