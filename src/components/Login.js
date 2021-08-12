import React from "react"


const Login = (props) => {
    return (
        <div id="loginPage">
        <h1>Log In</h1>
        <input className= "loginInput" placeholder="Username"></input>
        <input className= "loginInput" placeholder="Password"></input>
        <button className= "loginButton">Log In</button>
        <a href="Some Link Goes Here">Don't have an account? Sign Up</a>
        </div>
    )
}






export default Login;