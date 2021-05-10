import React from 'react'

import IconNoMessage from '../../basic/icon-no-message/IconNoMessage'
import { Message } from '../../'
import loading from '../../../assets/loading.svg'
import { ChatInput } from '../../../containers'

const Messages = ({ BlockRef, items, isLoading, user }) => {
    return (
        <>
            <div ref={BlockRef} className="mes scroll">
                {
                    (items && !isLoading) ? (
                        items.length > 0 ?
                            items.map((item) => (
                                <Message
                                    key={item.createdAt}
                                    isMe={user._id === item.partner._id}
                                    {...item} />
                            ))
                            :
                            <IconNoMessage text={"No messages"} />
                    ) : (!!items && isLoading) ? (
                        <div className="is_loading">
                            <img src={loading}></img>
                        </div>
                    ) : (
                        <IconNoMessage text={"Please select a chat to start messaging"} />
                    )
                }
            </div>
            
            {items != 0 && <ChatInput /> }

        </>
    )
}

export default Messages
