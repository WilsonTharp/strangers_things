import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import {
    // Header,
    // Home,
    Login
    // Posts,
    // Profile
  } from './components';

  const App = () => {
    return <div className="app">
        <Login />
    </div>
  }

ReactDOM.render(<App />, document.getElementById('app'))