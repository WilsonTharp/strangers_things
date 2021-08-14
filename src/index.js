import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css'

import {
    Header,
    // Home,
    Login
    // Posts,
    // Profile
  } from './components';

  import {
    fetchUserPosts
  } from './API'

  const App = () => {
    useEffect(() => {
      fetchUserPosts()
      .then(data => {
        console.log(data.data.posts);
      })
    },[])

    return <div className="app">
        <Header />
        <Login />
        {/* <Home /> */}
    </div>
  }



ReactDOM.render(<App />, document.getElementById('app'))
