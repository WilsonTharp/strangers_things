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


  const App = () => {
    return (
      <>
    
    <div className="app">
      
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
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
