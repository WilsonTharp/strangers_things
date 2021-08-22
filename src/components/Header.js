import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { NavLink, useHistory } from 'react-router-dom';


import {
  Link
} from 'react-router-dom';

const Header = ({isLoggedin, setIsLoggedin}) => {

  

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
  
    const history = useHistory()

    function logOut () {
      setIsLoggedin(false)
      localStorage.removeItem("message");
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("success");
      history.push('/login');
      console.log(localStorage);


    }

    return (
        <header>
           <h1>Stranger Things</h1>
           <div id="nav-bar">
              <StyledButton component={Link} to="/">Home</StyledButton>
              <StyledButton component={Link} to="/posts">Posts</StyledButton>
              {
                isLoggedin ?
                <>
                <StyledButton component={Link} to="/profile">Profile</StyledButton> 
                <StyledButton onClick={logOut}>Log Out</StyledButton>
                </>
                :
                <StyledButton component={Link} to="/login">Log in</StyledButton>
              }
              
            </div> 
        </header>
    )
}

export default Header;