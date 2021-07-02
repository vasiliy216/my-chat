import React from 'react'
import { Message } from '../../'
import Messages from '../../../containers/Messages'
import Dialogs from '../../../containers/Dialogs'

const NewChat = () => {
    return (
        <div className="chat_parrent">
            <div className="chat_body">
                <div className="header">
                    <div className="header_btn">
                        <a className="">
                            <i className="fas fa-user-friends"></i>
                            <span>List of dialogs</span>
                        </a>
                    </div>
                    <div className="header_btn">
                        <a className="">
                            <div className="header_btn_name">Staci Lynch</div>
                            <p className="header_btn_isonline">Online</p>
                        </a>
                    </div>
                    <div className="header_btn">
                        <a className="">
                            <i className="fas fa-ellipsis-h"></i>
                        </a>
                    </div>
                </div>
                <div className="chat_message">
                    <div className="dialogs">

                        <Dialogs items={[]} />

                    </div>
                    <div className="message_body">

                        <Messages items={null}/>
                        
                        <form className="im_bottom_panel_wrap">
                            <div className="im_send_form_wrap">
                                <a className="im_avatar_isme" href="">

                                </a>

                                <div className="im_textarea_send">
                                    <textarea className="im_textarea" rows="1" placeholder="Write a message..." form="text"></textarea>
                                    <i className="fas fa-location-arrow"></i>
                                </div>

                                <a className="im_avatar_isyou" href="">

                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewChat
