import React from 'react'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import { Link } from 'react-router-dom'

import Icon from '../../basic/icon-check/Icon'
import { Avatar } from '../../common'

import './style.scss'

const getDate = date => {
    if (isToday(new Date(date))) {
        return format(new Date(date), 'HH:mm');
    } else {
        return format(new Date(date), 'dd.MM.yyyy');
    }
}

const DialogItem = ({ _id, isMe, lastMessage, currentDialogId, partner, removeDialogId }) => {
    return (
        <li className="im_dialog_wraper">
            
            <i className="fas fa-times" title="Delete" onClick={removeDialogId.bind(this, _id)}></i>
            
            <Link to={`/dialog/${_id}`} className="im_dialog" onClick={currentDialogId.bind(this, _id)}>
                <div className="im_dialog_meta">{getDate(lastMessage.createdAt)}</div>
                                
                <div className="avatar_body is_dialog">
                    <Avatar user={partner} />
                </div>

                {partner.isOnline && <i className='fas fa-circle'></i>}

                <div className="im_dialog_message">
                    <div className="im_dialog_title">{partner.fullName}</div>

                    {lastMessage.partner._id === isMe ?
                        <>
                            <div className="im_message"><span>Вы: </span>{lastMessage.text}</div>
                            <Icon isMe={true} isReading={lastMessage.readed} />
                        </>
                        :
                        <>
                            <div className="im_message">{lastMessage.text}</div>
                            {/* <Icon isMe={false} isReading={lastMessage.readed} /> */}
                        </>
                    }

                </div>
            </Link>
        </li>
    )
}

export default DialogItem
