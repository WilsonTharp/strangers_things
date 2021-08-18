import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";
import {
    CreatePost,
    FeaturedPost,
    UserPost
} from './index.js'


const Posts = ({userPosts, setUserPosts, isLoggedin, setIsLogggedin}) => {
    const [featuredPost, setFeaturedPost] = useState(null);
    const [createPost, setCreatePost] = useState(null);

    console.log(userPosts)
    return (
        <div id="posts-page">
            <div className="posts-header">
                <h1>Posts</h1>
                <TextField variant="filled"
                           label="Search"
                           style={{marginTop: '.6rem', marginLeft: '2rem', marginRight: '2rem', width: '20rem'}}/>
                {
                    isLoggedin ? 
                    <Button variant="outlined"
                        color="primary"
                        style={{height: '3rem', marginTop: '.8rem'}}
                        onClick={(event) => {
                            event.preventDefault();
                            setCreatePost(true);
                        }}>
                        Create a Post</Button>
                        :
                        ''
                }
            </div>
            {
                createPost ? 
                <CreatePost createPost={createPost}
                            setCreatePost={setCreatePost}
                            userPosts={userPosts}
                            setUserPosts={setUserPosts}/>
                :
                <>
                </>
            }
            <div className="post-list">
            {
            userPosts.map((post, i) => 
                <UserPost post={post}
                          title={post.title}
                          description={post.description}
                          price={post.price}
                          username={post.author.username}
                          locaion={post.location}
                          featuredPost={featuredPost}
                          setFeaturedPost={setFeaturedPost}
                          key={i}
                          isAuthor={post.isAuthor}
                          postId={post._id}
                          setUserPosts={setUserPosts}
                          userPosts={userPosts} />
            )
             }   
            </div>
            {
                !featuredPost ?
                <></> 
                :
                <FeaturedPost featuredPost={featuredPost}
                              setFeaturedPost={setFeaturedPost}
                              isLoggedin={isLoggedin}/>
            }       
        </div>
    )
}

export default Posts