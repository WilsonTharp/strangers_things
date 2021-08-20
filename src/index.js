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
    BASE_URL,
    createNewUser,
    logInRequest
  } from './API/index.js'


  const App = () => {

    const [isLoggedin, setIsLoggedin] = useState(null);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
      {localStorage.getItem('token') ? setIsLoggedin(true) : setIsLoggedin(false)};
    }, []);

    useEffect(() => {
      try {
        const token = localStorage.getItem('token');
        fetch(`${BASE_URL}users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }, 
        }) .then(response => response.json())
           .then(result => {
               setCurrentUser(result.data)
           })
    } catch (error) {
        console.error(error);
    }
    }, [])

    return (
      <>
    
    <div className="app">
      
        <Header isLoggedin={isLoggedin}/>
        <Switch>
          <Route path="/login">
            <Login logInRequest={logInRequest}
                   isLoggedin={isLoggedin}
                   setIsLoggedin={setIsLoggedin} />
          </Route>
          <Route path="/signup">
            <SignUp createNewUser={createNewUser} />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Home isLoggedin={isLoggedin}
                setIsLoggedin={setIsLoggedin}/>
          </Route>
          <Route path="/posts">
            <Posts isLoggedin={isLoggedin}
                   setIsLoggedin={setIsLoggedin}/>
          </Route>
        </Switch>
      
    </div>
    </>
    )
  }



ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))
