import React, { useState } from 'react'
import { Avatar } from '../../common'

import './style.scss'

const ChatInput = ({ onSendMessages, currentDialogId, user, partner }) => {

    const [value, setValue] = useState('');

    const handleSendMessages = (e) => {
        if (e.keyCode === 13) {
            onSendMessages(value, currentDialogId);
            e.preventDefault()
            setValue('');
        }
    }

    const handleSendMessagesButton = () => {
        onSendMessages(value, currentDialogId);
        setValue('');
    }

    return (
        <form className="im_bottom_panel_wrap">
            <div className="im_send_form_wrap">
                <div className="avatar_body is_message_user">
                    <Avatar user={partner} />
                </div>

                <div className="im_textarea_send">
                    <textarea
                        className="im_textarea"
                        rows="1"
                        placeholder="Write a message..."
                        form="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        onKeyDown={handleSendMessages}
                    ></textarea>

                    <div className="im_textarea_button" onClick={handleSendMessagesButton}>
                        <i className="fas fa-location-arrow"></i>
                    </div>
                </div>

                <div className="avatar_body is_message_user">
                    <Avatar user={user} />
                </div>
            </div>
        </form>
    )
}

export default ChatInput
