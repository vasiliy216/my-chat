import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { Dialog } from '../redux/actions'
import { dialogsApi } from '../utils/api'

import { CreateDialog as CreateDialogBasic } from '../components/common'

const CreateDialog = ({ currentUserId, removeCurrentUserId }) => {

    const [value, setValue] = useState('');
    
    const menuRef = useRef();

    const onClose = () => {
        removeCurrentUserId()
    }

    const handleSendMessages = (e) => {
        if (e.keyCode === 13 && value) {
            dialogsApi.create(currentUserId, value)
            e.preventDefault();
            setValue('');
            removeCurrentUserId();
        }
    }

    const handleValue = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = () => {

        if(value) {
            dialogsApi.create(currentUserId, value)
            setValue('');
            removeCurrentUserId();
        }
        
    }

    const handleOutsideClick = (e) => {
        if (!e.path.includes(menuRef.current)) {
            setValue('');
            removeCurrentUserId();
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, [])

    return <CreateDialogBasic
        currentUserId={currentUserId}
        handleValue={handleValue}
        onClose={onClose}
        value={value}
        handleSendMessages={handleSendMessages}
        handleSubmit={handleSubmit}
        menuRef={menuRef}
    />
}

export default connect(({ user, dialogs }) => ({
    user: user.data,
    currentUserId: dialogs.currentUserId
}), Dialog)(CreateDialog)
