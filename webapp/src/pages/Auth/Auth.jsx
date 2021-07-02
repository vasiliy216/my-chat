import React from 'react'
import { Route } from 'react-router-dom'

import { LoginForm, RegisterForm } from '../../modules'
import CheckEmail from './components/CheckEmail'

function Auth() {
    return (
        <section className="row">
            <Route exact path="/login" component={LoginForm}/>
            <Route exact path="/register" component={RegisterForm}/>
            <Route exact path="/register/verifi" component={CheckEmail}/>
        </section>
    )
}

export default Auth
