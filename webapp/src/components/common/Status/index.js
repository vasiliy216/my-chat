import React from 'react'
import './style.scss' 

const Status = ({ online, fullName }) => {
    return (
        <a className="status">
            <span>{ fullName }</span>
            <p className="header_btn_isonline">{ online ? 'Online' : 'Offline' }</p>
            <i className={ online ? 'fas fa-circle online' : 'fas fa-circle offline'}></i>
        </a>
    )
}

export default Status