import React from 'react';
import { Link } from 'react-router-dom';

function removeMessage() {
    localStorage.removeItem('message')
}

const Message = () => {
    return (
        <div id="message">
            <h3 className="errorType">{localStorage.getItem("message")}</h3>
            <Link to="/login" onClick={removeMessage()}>Please try again</Link>
        </div>
    )
}

export default Message