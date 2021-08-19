import React, {useState} from "react";
import { TextField } from "@material-ui/core";
import { useHistory , Link } from "react-router-dom";

const Login = ({ logInRequest, isLoggedin, setIsLoggedin }) => {
    
    const [user, setUser] = useState({username: '', password: ''});

    function handleInput(event) {
        const userKey = event.target.attributes['name'].value;
        const newState = {...user};
        newState[userKey] = event.target.value;
        setUser(newState);
        console.log(user);
    }

    const history = useHistory() 

    async function handleSubmit(event) { 
        
        event.preventDefault();
        await logInRequest(user);
        if (localStorage.getItem('token')) {
            setIsLoggedin(true);
            localStorage.setItem('username', user.username);
            history.push('/');
        } else {
            history.push('/message') 
        }
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
                        //    value={user.username}
                           variant="outlined"
                           type="text"
                           style= {{width: 350, marginBottom: 20, marginTop: 10}} />
            </div>
            <div className= "loginInputs">
                <TextField id="outlined-basic=2"
                           onChange= {handleInput} 
                           label="Password"
                           name="password"
                        //    value={user.password}
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