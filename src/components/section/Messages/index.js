import React from 'react'
import IconNoMessage from '../../basic/icon-no-message/IconNoMessage'
import { Message } from '../../'

const Messages = ({ dialog, _id, BlockRef }) => {
    console.log(dialog, "dialog in Messages")
    return (
        <div ref={BlockRef} className="mes scroll">
            {
                dialog ? (
                    dialog.length > 0 ?
                        dialog.map((item) => (
                            <Message key={'asd'} {...item} />
                        ))
                        :
                        <IconNoMessage text={"No messages"} />
                ) : (
                    <IconNoMessage text={"Please select a chat to start messaging"} />
                )
            }
        </div>
    )
}

export default Messages
