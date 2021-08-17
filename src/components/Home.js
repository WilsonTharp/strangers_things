import React from 'react';

const Home = ({isLoggedin, setIsLoggedin}) => {
import Login from "./Login"  //HOW TO ACCESS 'user' from Login component? {user.username}

// need an if "logged in" render "Welcom...logged in as {user.username}"
// else {data.message} these messages change depending on situation 'username already taken' for instance 'already logged in'

const Home = (props) => {
    return (
        <div id="homePage">
            <h1>Welcome to Stranger Things!</h1>
            {
                isLoggedin ? 
            <div>
                <h3>Logged in as someuser</h3> 
            </div>
            :
            <div>
                <h3>Please login or register which can be done at the top!</h3>
            </div>
            }
        </div>
    )
}

export default Home;