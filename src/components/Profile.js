import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import FeaturedPost from "./FeaturedPost"

const Profile = ({getMessages, userPosts, setUserPosts, featuredPost, setFeaturedPost, isLoggedin}) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getMessages(setMessages)
    },[])
    console.log(messages)
    const messagesFromMe = [];

    const messagesToMe = [];

    // function linkToPost(event, postId) {
    //     userPosts.filter((posts, i)=>{
    //         const post = 
    //     })
    // }
    
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
        <>
        <h1 className="profileH1">Welcome {localStorage.getItem("username")}</h1>
        <hr></hr>
        <div id = "profile">
            <div className="profileMessageSection">
            <h3 className="messagesH3">Messages To Me </h3>  
            <div className="profileCards">
                {
                messagesToMe.map((messages, i) => {
                    return (
                        <div className="message" key={i}>
                            <h2>From: {messages.fromUser.username}</h2>
                            <p>{messages.content}</p>
                            <Link onClick={(event)=>linkToPost(event, messages.post._id)}><h4>VIEW MY POST: {messages.post.title}</h4></Link>
                        </div>
                    )
                    })
                }
            </div>
            </div>
                <div className="profileMessageSection">
                    <h3 className="messagesH3">Messages from Me</h3>
                    <div className="profileCards">
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
            {
                !featuredPost ?
                <>
                </>
                :
                <FeaturedPost featuredPost={featuredPost}
                              setFeaturedPost={setFeaturedPost}
                              isLoggedin={isLoggedin}/>
            } 

         </div> 
         </>   
    )
}

export default Profile