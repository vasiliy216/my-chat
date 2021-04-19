import React from 'react';
import { Route } from 'react-router-dom'

import Auth from '../src/pages/Auth/Auth'
import { NewChat } from '../src/components/'
import Home from '../src/pages/Home/Home' 

import '../src/SCSS/style.scss'

function App() {

  return (
    <>
      <Route exact path={["/", "/login", "/register"]} component={Auth} />
      <Route exact path="/im" component={NewChat} />
      <Route exact path="/message" component={Home} />
      {/* <Route exact path="/asd" component={} /> */}
    </>
  );
}

export default App;