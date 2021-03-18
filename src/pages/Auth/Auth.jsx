import React from 'react'
import { Route } from 'react-router-dom'
import { LoginForm, RegisterForm } from '../../modules'

function Auth() {
    return (
        <section className="row">
            <Route exact path={["/", "/login"]} component={LoginForm}/>
            <Route exact path="/register" component={RegisterForm}/>
        </section>
    )
}

export default Auth
