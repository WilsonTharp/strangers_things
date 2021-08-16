import React from 'react';
import { TextField } from '@material-ui/core';

const SignUp = (props) => {
    return (
        <div id="signUp">
        <h1>Sign Up</h1>
        <div className="loginInputs">
            <p>Create a Username</p>
                <TextField id="outlined-basic-1"
                           label="Username"
                           name="username"
                        //    value={user.username}
                           variant="outlined"
                           type="text"
                           style= {{width: 350, marginBottom: 20, marginTop: 10}} />
            </div>
            <div className= "loginInputs">
                <p>Create your password</p>
                <TextField id="outlined-basic=2" 
                           label="Password"
                           name="password"
                        //    value={user.password}
                           variant="outlined"
                           type= "password"
                           style= {{width: 350, marginBottom: 20}} />
            </div>
        <button className= "loginButton">Sign Up</button>
        </div>
    )
}

export default SignUp