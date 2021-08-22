import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


const SignUp = ({createNewUser, setIsLoggedin}) => {
    console.log(createNewUser)
    const [newUser, setNewUser] = useState({username: '', password: ''});
    console.log(newUser);

    function handleInput(event) {
        const userKey = event.target.attributes['name'].value;
        const newState = {...newUser};
        newState[userKey] = event.target.value;
        setNewUser(newState);
        console.log(newUser);
    }

    const history = useHistory()

    async function handleSubmit(event) {
        event.preventDefault();
        await createNewUser(newUser);
        let storedToken = localStorage.getItem('token');
        console.log(storedToken);
        if (storedToken) {
            
            setIsLoggedin(true);
            localStorage.setItem('username', newUser.username);
            history.push('/');
        } else {
            history.push('/message') 
        }
        
    }

    
    return (
        
        <div id="loginPage">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
            <div className="loginInputs">
                <TextField id="outlined-basic-1"
                           onChange= {handleInput}
                           label="Username"
                           name="username"
                           value={newUser.username}
                           variant="outlined"
                           type="text"
                           style= {{width: 350, marginBottom: 20, marginTop: 10}} />
            </div>
            <div className= "loginInputs">
                <TextField id="outlined-basic=2"
                           onChange= {handleInput} 
                           label="Password"
                           name="password"
                           value={newUser.password}
                           variant="outlined"
                           type= "password"
                           style= {{width: 350, marginBottom: 20}} />
            </div>
            <button className= "loginButton">Sign Up</button>
            </form>
        </div>

    
    )
}

export default SignUp