import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import FeaturedPost from "./FeaturedPost";
import { fetchUserPosts } from "../API";

const Profile = ({getMessages, userPosts, setUserPosts, featuredPost, setFeaturedPost, isLoggedin}) => {
    const [messages, setMessages] = useState([]);
    const messagesFromMe = [];
    const messagesToMe = [];

    useEffect(() => {
        getMessages(setMessages)
        fetchUserPosts(setUserPosts);
    },[])

    function linkToPost(event, post) {
        event.preventDefault();
        setFeaturedPost(post);
    }

    messages.map(message => {
        userPosts.map(post =>{
            if(message.post._id === post._id) {
                message['linkedPost'] = post;
            }
        })
        if(message.fromUser.username === localStorage.getItem('username')){
            messagesFromMe.push(message)
        } else {
            messagesToMe.push(message)
        }
    })

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
                            {!messages.linkedPost ? 
                            <h4>User has deleted this post</h4> :
                            <Link onClick={(event)=>linkToPost(event, messages.linkedPost)} to='/post'><h4>VIEW MY POST: {messages.post.title}</h4></Link>
                            }
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
                            {!messages.linkedPost ? 
                            <h4>User has deleted this post</h4> :
                            <Link onClick={(event)=>linkToPost(event, messages.linkedPost)} to='/post'><h4>VIEW MY POST: {messages.post.title}</h4></Link>
                            }
                        </div>
                    )
                    })
                }
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
    )
}

export default Profile