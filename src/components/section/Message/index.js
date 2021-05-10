import React from 'react'

import Icon from '../../basic/icon-check/Icon'
import { Avatar } from '../../common'

import { Time } from '../../common'

import './style.scss'

const Message = ({ isMe, text, partner, createdAt, readed }) => {
    return (
        <div className={isMe ? "message--me" : "message"}>
            <div className="message_img avatar_body is_message">
                {partner.avatar ?
                    <img src={partner.avatar} alt={`Avatar ${partner.fullName}`} />
                    :
                    <Avatar user={partner} />
                }
            </div>
            <div className="message_im">
                {(text) &&
                    <div className="message_block">
                        {isMe && <Icon isMe={isMe} isReading={readed} />}
                        {text && <p className="mess_li">{text}</p>}
                        {/* {isTyping && <p className="mess_li">{text}</p>} */}
                    </div>
                }

                {
                    createdAt && (
                        <div className="message_date">
                            <Time date={new Date(createdAt)} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Message