import React from 'react'
import { Avatar } from '../'

import './style.scss'

function CreateDialog(props) {

    const {
        currentUserId, 
        onClose, 
        handleValue, 
        value, 
        handleSubmit, 
        handleSendMessages,
        menuRef
    } = props;

    return (
        <>
            {
                currentUserId && (
                    <div className="create_dialog">
                        <div className="create_dialog_body" ref={menuRef}>
                            <div className="create_dialog_header">
                                <p>Create dialog</p>
                                <i className="fas fa-times" onClick={onClose}></i>
                            </div>
                            <div className="create_dialog_box">
                                <div className="user_info">
                                    <div className="avatar_body">
                                        <Avatar user={currentUserId} />
                                    </div>
                                    <div className="data">
                                        <div className="data_fullName">{currentUserId.fullName}</div>
                                        <div className="data_email">{currentUserId.email}</div>
                                    </div>
                                </div>
                                <textarea
                                    className="create_textarea"
                                    rows="1"
                                    placeholder="Write a message..."
                                    form="text"
                                    value={value}
                                    onChange={handleValue}
                                    onKeyDown={handleSendMessages}>

                                </textarea>
                            </div>
                            <div className="create_dialog_button">
                                <button type='submit' className="button_form" onClick={handleSubmit}>SEND</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default CreateDialog
