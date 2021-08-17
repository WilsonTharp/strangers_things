import React from 'react';

const Home = ({isLoggedin, setIsLoggedin}) => {
    return (
        <div id="homePage">
            <h1>Welcome to Stranger Things!</h1>
            {
                isLoggedin ? 
            <div>
                <h3>Logged in as someusername</h3>
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