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
        <Header />
    )
  }

ReactDOM.render(
    <App />,
 document.getElementById('root'))