import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import {
    Header,
    // Home,
    Login,
    SignUp,
    // Posts
    Profile
  } from './components';


  const App = () => {
    return (
      <>
    
    {/* <div> THIS ALLOWS ROUTER TO WORK? CAN'T GET IT WORKING WITH THE HEADER AS SEPERATE COMPONENT
       <header>
           <h1>Stranger Things</h1>
           <div id="nav-bar">
          
                <Link>Home</Link>
                <Link>Posts</Link>
                <Link to="/profile">Profile</Link> 
                <Link to="/login">Log in</Link>
              
            </div> 
        </header>
    </div> */}
    
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
        </Switch>
      
    </div>
    </>
    )
  }



ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))