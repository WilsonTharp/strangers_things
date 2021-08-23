import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";
import {
    CreatePost,
    FeaturedPost,
    UserPost,
    Search
} from './index.js'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import { fetchUserPosts, deleteUserPost, postUserPost } from "../API/index.js";



const Posts = ({isLoggedin, userPosts, setUserPosts, featuredPost, setFeaturedPost}) => {
    const [createPost, setCreatePost] = useState(false);
    const [search, setSearch] = useState('');
    const [post, setPost] = useState({title: '', description: '', price: '', location: '', willDeliver: false});

    const filteredPosts = search.length === 0 ?
                          userPosts :
                          userPosts.filter(post => post.description.toLowerCase().includes(search.toLowerCase()) || 
                          post.title.toLowerCase().includes(search.toLowerCase()) ||
                          post.author.username.toLowerCase().includes(search.toLowerCase()) || 
                          post.location.toLowerCase().includes(search.toLowerCase()) ||
                          post.price.includes(search));

    useEffect(() => {
        fetchUserPosts(setUserPosts)
    },[])

    function deletePost(e, id) {
        e.preventDefault();
        deleteUserPost(id);
        fetchUserPosts(setUserPosts);
    }
    function handleSubmit(event) {
        event.preventDefault();
        postUserPost(post);
        setCreatePost(false);
        fetchUserPosts(setUserPosts);
    }
    function handleChange(event, postKey) {
        const newState = {...post};
        {postKey === 'willDeliver' ? newState[postKey] = event.target.checked ? true : false : newState[postKey] = event.target.value};
        setPost(newState);
    }
    return (
        <div id="posts-page">
            <div className="posts-header">
                <h1>Posts</h1>
                <Search userPosts={userPosts}
                        setUserPosts={setUserPosts}
                        search={search}
                        setSearch={setSearch}/>
                {
                    isLoggedin &&
                    <Button variant="outlined"
                        color="primary"
                        style={{height: '3rem', marginTop: '.8rem'}}
                        onClick={(event) => {
                            event.preventDefault();
                            setCreatePost(true);
                        }}>
                        Create a Post</Button>
                }
            </div>
            {
                createPost &&
                <CreatePost setCreatePost={setCreatePost}
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            post={post}
                            setPost={setPost}/>
            }
            <hr></hr>
            <div className="post-list">
            {
            filteredPosts.map((post, i) => 
                <UserPost post={post}
                          title={post.title}
                          description={post.description}
                          price={post.price}
                          username={post.author.username}
                          locaion={post.location}
                          setFeaturedPost={setFeaturedPost}
                          key={i}
                          isAuthor={post.isAuthor}
                          postId={post._id}
                          deletePost={deletePost}
                          setUserPosts={setUserPosts}
                        />
            )
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

export default Posts;