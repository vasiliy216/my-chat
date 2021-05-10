import React from 'react'
import { CreateDialog } from '../../../containers'

import './style.scss'

const ListOfDialogs = () => {
    return (
        <div className="header_btn">
            <a className="">
                <i className="fas fa-user-friends"></i>
                <span>List of dialogs</span>
            </a>
            <CreateDialog />
        </div>
    )
}

export default ListOfDialogs
