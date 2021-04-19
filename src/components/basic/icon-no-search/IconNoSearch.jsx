import React, { Fragment } from 'react'
import './style.scss'

const IconNoSearch = () => {
    return (
        <div className="no_dialogs">
            <i className="fas fa-user-slash"></i>
            <p className="no_dialogs_message">Nothing found</p>
        </div>
    )
}

export default IconNoSearch
