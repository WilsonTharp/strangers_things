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

    const [userPosts, setUserPosts] = useState([]);
    const [isLoggedin, setIsLoggedin] = useState(true);

    useEffect(() => {
      fetchUserPosts()
        .then(userPosts => {
         setUserPosts(userPosts.data.posts)
       })
      .catch(error => {
        throw error
      });
    }, []);

    return (
      <>
    
    <div className="app">
      
        <Header isLoggedin={isLoggedin}
                setIsLoggedin={setIsLoggedin}/>
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
          <Route exact path="/">
            <Home isLoggedin={isLoggedin}
                setIsLoggedin={setIsLoggedin}/>
          </Route>
          <Route path="/posts">
            <Posts userPosts={userPosts}/>
          </Route>
        </Switch>
      
    </div>
    </>
    )
  }



ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))
