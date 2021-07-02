import React from 'react'
import './style.scss'

const IconNoMessage = ({ text }) => {
    return (
        <div className="no_message">
            <div className="no_message_body">
                <i className="far fa-comments"></i>
                <span>{ text }</span>
            </div>
        </div>
    )
}

export default IconNoMessage
