import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const Header = () => {
    const StyledButton = withStyles({
        root: {
          background: '#990033',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 65,
          padding: '0 30px',
          boxShadow: 'black',
          fontSize: '1rem',
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button);

    return (
        <header>
           <h1>Stranger Things</h1>
           <div id="nav-bar">
          
              <StyledButton>Home</StyledButton>
              <StyledButton>Posts</StyledButton>
              <Link to ="/profile" style={{textDecorationLine: 'none'}}> <StyledButton>Profile</StyledButton> </Link> 
              <Link to ="/login" style={{textDecorationLine: 'none'}}><StyledButton>Log in</StyledButton></Link>
              
            </div> 
        </header>
    )
}

export default Header;