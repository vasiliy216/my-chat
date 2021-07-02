import React from 'react'
import './style.scss'

const IconNoSearch = ({text}) => {
    return (
        <div className="no_dialogs">
            <i className="fas fa-user-slash"></i>
            <p className="no_dialogs_message">{text}</p>
        </div>
    )
}

export default IconNoSearch
