import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import {
    Header,
    Home,
    Login,
    SignUp,
    Posts,
    Profile
  } from './components';

  import {
    createNewUser,
    logInRequest
  } from './API/index.js'


  const App = () => {
    return (
      <>
    
    <div className="app">
      
        <Header />
        <Switch>
          <Route path="/login">
            <Login logInRequest={logInRequest} />
          </Route>
          <Route path="/signup">
            <SignUp createNewUser={createNewUser} />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      
    </div>
    </>
    )
  }



ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))
