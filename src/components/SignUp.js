import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


const SignUp = ({createNewUser}) => {

    const [newUser, setNewUser] = useState({username: '', password: ''});
    console.log(newUser);

    function handleInput(event) {
        const userKey = event.target.attributes['name'].value;
        const newState = {...newUser};
        newState[userKey] = event.target.value;
        setNewUser(newState);
        console.log(newUser);
    }

    function handleSubmit(event) {
        event.preventDefault();
        createNewUser(newUser);
        // if(results.success==-true){ // HOW TO USE DATA FROM SIGN IN?
        //     history.push('/home')
        //     } else {
        // return (
        //     <div>
        //        <h3> {result.data.message} </h3> //HOW TO SHOW THIS AFTER SUBMIT?
        //     </div>
        // )
        //     }

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