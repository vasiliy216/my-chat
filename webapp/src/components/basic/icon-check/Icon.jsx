import React, { Fragment } from 'react'
import './style.scss'

function getIcon(Me, Reading) {
    // if (!Me) {
    //     return (
    //         <i className="fas fa-circle icon_unread_dialogs"></i>
    //     )
    // }
    // else
     if (Me && Reading) {
        return (
            <i className="fas fa-check-double icon_check_dialogs"></i>
        )
    } else {
        return (
            <i className="fas fa-check icon_check_dialogs"></i>
        )
    }
}

const Icon = ({ isMe, isReading }) => {
    return (
        <Fragment>
            { getIcon(isMe, isReading)}
        </Fragment>
    )
}

export default Icon
