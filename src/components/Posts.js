import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { FaTimesCircle } from 'react-icons/fa'
import { style } from "@material-ui/system";
import { TextField } from "@material-ui/core";

const Posts = ({userPosts}) => {
    const [featuredPost, setFeaturedPost] = useState(null);

    console.log(userPosts);
    return (
        <div id="posts-page">
            <div className="post-list">
        {
        userPosts.map((post, i) => {
            return (
                <div className="user-post" key={i}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <h4><b>Price: </b>{post.price}</h4>
                    <h3><b>Seller: </b>{post.author.username}</h3>
                    <h4><b>Location: </b>{post.location}</h4>
                    <Button variant="outlined"
                            color="primary"
                            style={{marginBottom:"1rem"}}
                            value={this}
                            onClick={(event) => {
                                event.preventDefault();
                                setFeaturedPost(post);
                            }}>Expand post</Button>
                </div>
            )
        })
         }   
            </div>
            {
                !featuredPost ?
                <></> :
                <div className="featured-post">
                    <div className="post">
                        <FaTimesCircle style={{marginTop: '.2rem', marginLeft: '98%', color: 'red', fontSize: '1.5rem'}}
                                       onClick={() => setFeaturedPost(null)}/>
                        <h1 style={{marginTop: '0'}}>{featuredPost.title}</h1>
                        <p>{featuredPost.description}</p>
                        <h4><b>Price: </b>{featuredPost.price}</h4>
                        <h3><b>Seller: </b>{featuredPost.author.username}</h3>
                        <h4><b>Location: </b>{featuredPost.location}</h4>
                        <div className="post-messages">
                            <h3>Message User about this Post</h3>
                            <TextField id="standard-basic"
                                       label="Message"
                                       style={{width: "603.7"}} 
                                       multiline/>
                            <div>
                                <Button variant='outlined'
                                        color='primary'
                                        style={{marginTop: '1rem', width: '300'}}>
                                        Send Message</Button>
                            </div>
                            {featuredPost.messages.map((message, i) => {
                                return (
                                    <div key={i} className="message">
                                        <p>{message}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }       
        </div>
    )
}

export default Posts