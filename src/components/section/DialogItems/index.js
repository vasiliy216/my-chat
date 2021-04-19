import React from 'react'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import Icon from '../../basic/icon-check/Icon'

import './style.scss'

const isAvatar = (ava, name) => {
    if (ava) {
        return (
            <img src={ava} alt={`Avatar ${ava}`} />
        )
    } else {
        let letters = '0123456789ABCDEF';
        let color = '#';

        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        let firstLetter = name[0] + name.split(' ')[1][0];

        return (
            <div className="dialog_no_avatar" style={{ background: color }}>{firstLetter}</div>
        )
    }
}

const getDate = date => {
    if (isToday(new Date(date))) {
        return format(new Date(date), 'HH:mm');
    } else {
        return format(new Date(date), 'dd.MM.yyyy');
    }
}

const DialogItem = ({ _id, user, text, date, unreaded, isMe, onSelect }) => {
    return (
        <li className="im_dialog_wraper" onClick={onSelect.bind(this, _id)}>
            <a className="im_dialog">
                <div className="im_dialog_meta">{getDate(date)}</div>
                <div className="im_dialog_avatar">
                    {isAvatar(
                        user.avatar,
                        user.fullname
                    )}
                </div>
                <div className="im_dialog_message">
                    <div className="im_dialog_title">{user.fullname}</div>

                    {isMe ?
                        <>
                            <div className="im_message"><span>Вы: </span>{text}</div>
                            <Icon isMe={true} isReading={false} />
                        </>
                        :
                        <>
                            <div className="im_message">{text}</div>
                            {unreaded > 0 && <div className="im_readed_message">{unreaded}</div>}
                        </>
                    }

                </div>
            </a>
        </li>
    )
}

export default DialogItem
