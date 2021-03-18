import React from 'react'
import Img_1 from '../../../assets/img_1.jpg'

import './style.scss'

const isAvatar = ava => {
    if (ava) {
        return (
            <img src={ ava } alt={`Avatar ${ava}`} />
        )
    } else {
        // return false;
    }
}

const Dialogs = ({ items }) => {
    return (
        <div className="im_dialogs_col">
            <div className="im_dialogs">
                <ul className="nav_stacked">

                    {items.map(value => {
                        return (
                            <li key={`dialog_${value.message}`} className="im_dialog_wraper">
                                <a className="im_dialog">
                                    <div className="im_dialog_meta">{ value.message.date }</div>
                                    <div className="im_dialog_avatar">
                                        {isAvatar(
                                            value.user.avatar
                                        )}
                                    </div>
                                    <div className="im_dialog_message">
                                        <div className="im_dialog_title">{ value.user.fullName }</div>
                                        <div className="im_message">{ value.message.text }</div>
                                    </div>
                                </a>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </div>
    )
}

export default Dialogs
