import React from 'react'
import { Status, Menu } from '../../../containers'
import { ListOfDialogs } from '../'

import './style.scss'

const Header = () => {

    return (
        <div className="header">

            <ListOfDialogs />

            <div className="header_btn">

                <Status />

            </div>

            <Menu />

        </div>
    )
}

export default Header
