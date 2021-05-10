import React from 'react'

import { Messages, Dialogs } from '../../../containers'

const Chat = () => {
    return (
        <div className="chat_message">
            <div className="dialogs">

                <Dialogs />

            </div>
            <div className="message_body">

                <Messages />

            </div>
        </div>
    )
}

export default Chat
