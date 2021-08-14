import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
    
    // const [user, setUser] = useState({usernam: '', password: ''});


    // function handleSubmit(event) {
    //     event.preventDefault();
    // }
    
    return (
        <div id="loginPage">
        <h1>Log In</h1>
        <input className= "loginInput" placeholder="Username"></input>
        <input className= "loginInput" placeholder="Password"></input>
        <button className= "loginButton">Log In</button>
        <Link to="/signup">Don't have an account? Sign Up</Link> 
        </div>
    )
}






export default Login;