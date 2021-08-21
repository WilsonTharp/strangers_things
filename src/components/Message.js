import React from 'react';
import { Link } from 'react-router-dom';

const Message = () => {
    return (
        <div id="message">
            <h3>This is an invalid Username or Password.</h3>
            <Link to="/login">Please try again</Link>
        </div>
    )
}

export default Message