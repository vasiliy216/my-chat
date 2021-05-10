import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import { Message } from '../redux/actions'
import store from '../redux/store'
import { Messages as NewMessages } from '../components/'
import { Socket } from '../core'

//Если прошлый id не совподает с настоящим, то тогда отправлять запрос

const Messages = ({ items, currentDialogId, fetchMessages, isLoading, addMessage, user }) => {

    const messageRef = useRef(null);

    const onNewMessage = data => {
        addMessage(data)
    }

    console.log(store.getState())

    useEffect(() => {
        if (currentDialogId) fetchMessages(currentDialogId)

        Socket.on('SERVER:NEW_MESSAGE', onNewMessage)

        return () => {
            Socket.removeListener('SERVER:NEW_MESSAGE', onNewMessage)
        }
    }, [currentDialogId]);

    useEffect(() => {
        messageRef.current.scrollTo(0, 999999);
    }, [items])

    return <NewMessages
        BlockRef={messageRef}
        items={items}
        isLoading={isLoading}
        user={user}
    />
}

export default connect(({ messages, dialogs, user }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
    user: user.data
}), Message)(Messages);