import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Auth from '../src/pages/Auth/Auth'
import Home from '../src/pages/Home/Home'

import '../src/SCSS/style.scss'

const App = props => {

  const { isAuth } = props;

  return (

    <Switch>
      <Route exact path={["/login", "/register", "/register/verifi"]} component={Auth} />
      <Route path="/" render={() => (isAuth ? <Home /> : <Redirect to="/login" />)} />
    </Switch>

  )

}

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);