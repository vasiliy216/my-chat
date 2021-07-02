import React from 'react'
import { Link } from 'react-router-dom'

import { Avatar } from '../../common'

const UsersItem = ({ users, currentUserId }) => {
    return (
        <li className="im_dialog_wraper">
            <Link to={`/users/${users.email}`} className="im_dialog" onClick={currentUserId.bind(this, users._id)}>
                <div className="im_dialog_meta"></div>
                <div className="avatar_body is_dialog">
                    <Avatar user={users} />
                </div>

                {users.isOnline && <div className='online'><i className='fas fa-circle'></i></div>}

                <div className="im_dialog_message">
                    <div className="im_dialog_title">{users.fullName}</div>
                    <div className="im_message">{users.email}</div>
                </div>
            </Link>
        </li>
    )
}

export default UsersItem
