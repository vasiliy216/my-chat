import React, { useEffect, useState } from 'react'
import { userApi } from '../../../utils/api'

import './style.scss'

const CheckEmail = ({ location, history }) => {

    const hash = location.search.split('hash=')[1];

    // const [verifi, setVerifi] = useState(false)

    useEffect(() => {
        if (hash) {
            userApi
                .verifi(hash)
                .then((data) => {
                    console.log(data)
                    // setVerifi(true)
                }).catch((err) => {
                    console.log(err)
                    // setVerifi(false)
                })
        }
    }, [])

    // console.log('checkemail ', verifi, location, hash);

    return (
        <form className="form">
            <div className="form_body verifi">
                <div className="status">
                    <i className="fas fa-check-circle"></i>
                    <p>The account was hastily confirmed.</p>
                </div>
                <button type='submit' className="button_form" onClick={() => history.push('/login')}>SIGN IN</button>
            </div>
        </form>
    )
}

export default CheckEmail
