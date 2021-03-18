import React from 'react';
import { Route } from 'react-router-dom'

import Auth from '../src/pages/Auth/Auth'
import Chat from '../src/components/section/chat/chat'
import Home from '../src/pages/Home/Home' 

function App() {

  return (
    <>
      <Route exact path={["/", "/login", "/register"]} component={Auth} />
      <Route exact path="/im" component={Chat} />
      <Route exact path="/message" component={Home} />
    </>
  );
}

export default App;
