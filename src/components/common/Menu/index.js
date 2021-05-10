import React from 'react'
import { Avatar } from '..'

const Menu = ({ user, visiblePopup, toggleVisiblePopup, menuRef, UserExit }) => {

    return (
        <div className="header_btn" ref={menuRef}>
            <a className={visiblePopup ? 'menu visible' : 'menu'} onClick={toggleVisiblePopup}>
                <i className="fas fa-ellipsis-h"></i>
            </a>

            { visiblePopup &&
                <ul className="menu_popup">
                    <li className="account">
                        <div className="avatar_body is_me">
                            <Avatar user={user} />
                        </div>
                        <div className="data">
                            <div className="data_fullName">{user.fullName}</div>
                            <div className="data_email">{user.email}</div>
                        </div>
                    </li>
                    <div className="top_profile_sep"></div>
                    <li className="menu_dark_mode">Dark mode</li>
                    <li className="menu_user_exit" onClick={UserExit}>Exit</li>
                </ul>
            }
        </div >
    )
}

export default Menu
