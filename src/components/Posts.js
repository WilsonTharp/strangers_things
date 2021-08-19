import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";
import FeaturedPost from './FeaturedPost';
import CreatePost from './CreatePost';

const Posts = ({userPosts}) => {
    const [featuredPost, setFeaturedPost] = useState(null);
    const [createPost, setCreatePost] = useState(null);

    console.log(userPosts);
    return (
        <div id="posts-page">
            <div className="posts-header">
                <h1>Posts</h1>
                <TextField variant="filled"
                           label="Search"
                           style={{marginTop: '.6rem', marginLeft: '2rem', marginRight: '2rem', width: '20rem'}}/>
                <Button variant="outlined"
                        color="primary"
                        style={{height: '3rem', marginTop: '.8rem'}}
                        onClick={(event) => {
                            event.preventDefault();
                            setCreatePost(true);
                        }}>
                        Create a Post</Button>
            </div>
            {
                createPost ? 
                <CreatePost createPost={createPost}
                            setCreatePost={setCreatePost}/>
                :
                <>
                </>
            }
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
                <></> 
                :
                <FeaturedPost featuredPost={featuredPost}
                              setFeaturedPost={setFeaturedPost}/>
            }       
        </div>
    )
}

export default Posts