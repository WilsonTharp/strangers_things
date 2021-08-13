import React from "react";
import { TextField } from "@material-ui/core";


const Login = (props) => {
    return (
        <div id="loginPage">
            <h1>Log In</h1>
            <div className="loginInputs">
                <TextField id="outlined-basic" label="Username" variant="outlined" style= {{width: 350, marginBottom: 20, marginTop: 10}} />
            </div>
            <div className= "loginInputs">
                <TextField id="outlined-basic" label="Password" variant="outlined" style= {{width: 350, marginBottom: 20}} />
            </div>
            <button className= "loginButton">Log In</button>
            <a href="Some Link Goes Here">Don't have an account? Sign Up</a>
        </div>
    )
}






export default Login;