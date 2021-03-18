import React from 'react'
import formatDistance from 'date-fns/formatDistanceToNowStrict'
import ruLocale from 'date-fns/locale/ru'
import '../Message/message.scss'

const Message = ({ user, date, avatar, text, isMe, isTyping }) => {
    return (
        <div className={isMe ? "message--me" : "message"}>
            <div className="message_img">
                <img src={avatar} alt={`Avatar ${user}`} />
            </div>
            <div className="message_im">
                {(text || isTyping) &&
                    <div className="message_block">
                        {text && <p className="mess_li">{text}</p>}
                        {isTyping && <p className="mess_li">{text}</p>}
                    </div>
                }
                <div className="message_date">{
                    formatDistance(
                        new Date(date),
                        {
                            addSuffix: true,
                            locale: ruLocale
                        }
                    )
                }</div>
            </div>
        </div>
    )
}

export default Message