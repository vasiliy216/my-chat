import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import { User } from '../redux/actions'
import { Menu as MenuBase } from '../components/common'

const Menu = ({ user, fetchUserExit }) => {

    const [visiblePopup, setVisiblePopup] = useState(false)

    const menuRef = useRef();

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    }

    const handleOutsideClick = (e) => {
        if(!e.path.includes(menuRef.current)) {
            setVisiblePopup(false);
        }
    }

    const UserExit = () => {
        fetchUserExit();
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, [])

    return <MenuBase 
        user={user}
        toggleVisiblePopup={toggleVisiblePopup}
        visiblePopup={visiblePopup}
        menuRef={menuRef}
        UserExit={UserExit}
    />
}

export default connect(({ user }) => ({
    user: user.data
}), User)(Menu)
