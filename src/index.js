import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '@fontsource/roboto';

import {
    Header,
    // Home,
    // Login
    // Posts,
    // Profile
  } from './components';

  const App = () => {
  
    return (
      <div className="app">
        <Header />
        {/* <Login /> */}
      </div>
    )
  }

ReactDOM.render( <App />, document.getElementById('app'))