import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";
import {
    CreatePost,
    FeaturedPost,
    UserPost,
    Search
} from './index.js'
import { fetchUserPosts, deleteUserPost } from "../API/index.js";



const Posts = ({isLoggedin}) => {
    const [userPosts, setUserPosts] = useState([]);
    const [featuredPost, setFeaturedPost] = useState(null);
    const [createPost, setCreatePost] = useState(false);
    const [search, setSearch] = useState('')

    const filteredPosts = search.length === 0 ?
                          userPosts :
                          userPosts.filter(post => post.description.toLowerCase().includes(search) || 
                          post.title.toLowerCase().includes(search) ||
                          post.author.username.toLowerCase().includes(search) || 
                          post.location.toLowerCase().includes(search));

    useEffect(() => {
        fetchUserPosts(setUserPosts)
    },[featuredPost, createPost, deletePost])

    
    async function deletePost(e, id) {
        e.preventDefault();
        await deleteUserPost(id);
        fetchUserPosts(setUserPosts);
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
                <CreatePost setCreatePost={setCreatePost}/>
            }
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