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
        <div id="signUp">
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <input type="text" 
                    onChange={handleInput}
                    name="username" 
                    value={newUser.username}
                    className= "loginInput" 
                    placeholder="Username"></input>
                <input type="password" 
                    onChange={handleInput} 
                    name="password"
                    value={newUser.password}
                    className= "loginInput" 
                    placeholder="Password"></input>
                <button className= "loginButton">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp