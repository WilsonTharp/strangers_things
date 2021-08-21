import React from 'react';
import { Button, Fade } from '@material-ui/core';
import FeaturedPost from './FeaturedPost';
import {
    Switch,
    Route,
    Link
  } from 'react-router-dom';

const UserPost = ({post, title, description, price, username, location, setFeaturedPost, isAuthor, postId, deletePost}) => {

    return (
        <div className="user-post">
            <h2>{title}</h2>
            <p>{description}</p>
            <h4><b>Price: </b>{price}</h4>
            <h3><b>Seller: </b>{username}</h3>
            <h4><b>Location: </b>{location}</h4>
            <Button variant="outlined"
                    color="primary"
                    component={Link}
                    to={`/featuredpost/${postId}`}
                    style={{marginBottom:"1rem"}}
                    onClick={(event) => {
                        event.preventDefault();
                        setFeaturedPost(post);
                    }}>Expand post</Button>            {
                isAuthor ?
                    <>
                        <Button variant='outlined'
                                color='secondary'
                                style={{marginBottom:'1rem', marginLeft:'1rem'}}
                                onClick={(e) => {
                                    deletePost(e, postId);
                               }}
                        >Delete Post</Button> 
                    </>
                :
                    ''
            }
        </div>
    )
}

export default UserPost;