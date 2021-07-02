import React from 'react'

import './style.scss'
import { Header, Chat } from '../../components/common'

const Home = () => {

    return (
        <div className="chat_parrent">
            <div className="chat_body">

                <Header />

                <Chat />

            </div>
        </div>
    )
}

export default Home