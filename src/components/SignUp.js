import React from 'react';

const SignUp = (props) => {
    return (
        <div id="signUp">
        <h1>Sign Up</h1>
        <input className= "loginInput" placeholder="Username"></input>
        <input className= "loginInput" placeholder="Password"></input>
        <button className= "loginButton">Sign Up</button>
        </div>
    )
}

export default SignUp