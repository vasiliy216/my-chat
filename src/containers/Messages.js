import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import { Message } from '../redux/actions'
import store from '../redux/store'
import { Messages as NewMessages } from '../components/'

import messageJSON from '../message.json'

//Если прошлый id не совподает с настоящим, то тогда отправлять запрос

const Messages = ({ items, dialogId }) => {

    const messageRef = useRef(null);

    console.log(items, "items");

    useEffect(() => {
        console.log(store.getState(), "store");
    }, [dialogId]);

    useEffect(() => {
        messageRef.current.scrollTo(0, 999999);
    }, [dialogId])

    const value = messageJSON.find(val => val._id === dialogId);
    console.log(value, "value")

    return <NewMessages
        BlockRef={messageRef}
        items= {items}
        {...value}
    />
}

export default connect(({ messages, dialogs }) => ({
    dialogId: messages.dialogId,
    items: dialogs.items
}), Message)(Messages);