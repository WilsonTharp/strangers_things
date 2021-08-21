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
    Message,
    Profile
  } from './components';

  import {
    BASE_URL,
    createNewUser,
    logInRequest,
    fetchUserPosts
  } from './API/index.js'


  const App = () => {

    const [userPosts, setUserPosts] = useState([]);
    const [isLoggedin, setIsLoggedin] = useState(null);   

    useEffect(() => {
      {localStorage.getItem('token') ? setIsLoggedin(true) : setIsLoggedin(false)};
    }, []);

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
            <SignUp createNewUser={createNewUser}
                    setIsLoggedin={setIsLoggedin} />
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
                   userPosts={userPosts}
                   setUserPosts={setUserPosts}
                   userPosts={userPosts}/>
          </Route>
          <Route path="/message">
            <Message />
          </Route>
        </Switch>
      
    </div>
    </>
    )
  }



ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))
