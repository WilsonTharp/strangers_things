import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Profile = ({getMessages}) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getMessages(setMessages)
    },[])
    console.log(messages)
    const messagesFromMe = [];

    const messagesToMe = [];
    
    messages.map((message)=>{
        if (message.fromUser.username === `${localStorage.getItem("username")}`) {
            messagesFromMe.push(message)
        } else {
            messagesToMe.push(message)
        }
    })
    console.log(messagesFromMe)
    console.log(messagesToMe)
    return(
        <div id = "profile">
            <h1>Welcome {localStorage.getItem("username")}</h1>
                <h3>Messages To Me</h3>
            <div className="messagesToMe">
                {
                messagesToMe.map((messages, i) => {
                    return (
                        <div className="message" key={i}>
                            <h2>From: {messages.fromUser.username}</h2>
                            <p>{messages.content}</p>
                            <Link><h4>VIEW MY POST: {messages.post.title}</h4></Link>
                        </div>
                    )
                    })
                }
            </div>
            <h3>Messages from Me</h3>
            <div className="messagesFromMe">
                {
                messagesFromMe.map((messages, i) => {
                    return (
                        <div className="message" key={i}>
                            <h2>From: {messages.fromUser.username}</h2>
                            <p>{messages.content}</p>
                            <Link><h4>VIEW MY POST: {messages.post.title}</h4></Link>
                        </div>
                    )
                    })
                }
            </div>
         </div>    
    )
}

export default Profile