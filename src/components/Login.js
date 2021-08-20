import React, {useState} from "react";
import { TextField } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const Login = ({logInRequest, setIsLoggedin}) => {
    const history = useHistory();
    
    const [user, setUser] = useState({username: '', password: ''});

    function handleInput(event) {
        const userKey = event.target.attributes['name'].value;
        const newState = {...user};
        newState[userKey] = event.target.value;
        setUser(newState);
        console.log(user);
    }

    function handleSubmit(event) {
        event.preventDefault();
        logInRequest(user); 
        // if( {
        //     history.push('/home');
        //     setIsLoggedin(true);
        // } else {
        //     alert('Login attempt failed, please try again');
        // }
        // if (result.success===true){ //how to use authentication data here to route to different pages depending on result?
        //     history.push('/home')
        // setIsLoggedIn(true);
        // } else {
        //     return (
        //         <h1>Log In attempt failed, please try again</h1>
        //     )
        // }

    }
    
    return (
        <div id="loginPage">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
            <div className="loginInputs">
                <TextField id="outlined-basic-1"
                           onChange= {handleInput}
                           label="Username"
                           name="username"
                           variant="outlined"
                           type="text"
                           style= {{width: 350, marginBottom: 20, marginTop: 10}} />
            </div>
            <div className= "loginInputs">
                <TextField id="outlined-basic=2"
                           onChange= {handleInput} 
                           label="Password"
                           name="password"
                           variant="outlined"
                           type= "password"
                           style= {{width: 350, marginBottom: 20}} />
            </div>
            <button className= "loginButton">Log In</button>
            </form>
            <Link to="/signup">Don't have an account? Sign Up</Link>
        </div>
    )
}






export default Login;