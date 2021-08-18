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

    const [userPosts, setUserPosts] = useState([]);
    const [isLoggedin, setIsLoggedin] = useState(null);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
      {localStorage.getItem('token') ? setIsLoggedin(true) : setIsLoggedin(false)};
    }, []);

    useEffect(() => {
      try {
        const token = localStorage.getItem('token');
        fetch(`${BASE_URL}posts`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }) .then(response => response.json())
           .then(result => {
               setUserPosts(result.data.posts);
           })        
    } catch(error) {
        throw error;
    }
    },[])

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

    console.log(currentUser)

    return (
      <>
    
    <div className="app">
      
        <Header isLoggedin={isLoggedin}
                setIsLoggedin={setIsLoggedin}/>
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
            <Posts userPosts={userPosts}
                   setUserPosts={setUserPosts}
                   isLoggedin={isLoggedin}
                   setIsLoggedin={setIsLoggedin}/>
          </Route>
        </Switch>
      
    </div>
    </>
    )
  }



ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))
