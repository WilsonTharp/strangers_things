import React from 'react';
import { Button } from '@material-ui/core';
import { deleteUserPost } from '../API';

const UserPost = ({post, title, description, price, username, location, setFeaturedPost, featuredPost, isAuthor, postId, setUserPost, userPost}) => {
    return (
        <div className="user-post">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <h4><b>Price: </b>{price}</h4>
                        <h3><b>Seller: </b>{username}</h3>
                        <h4><b>Location: </b>{location}</h4>
                        <Button variant="outlined"
                                color="primary"
                                style={{marginBottom:"1rem"}}
                                value={this}
                                onClick={(event) => {
                                    event.preventDefault();
                                    setFeaturedPost(post);
                                }}>Expand post</Button>
                        {
                            isAuthor ?
                            <>
                            <Button variant='outlined'
                                    color='secondary'
                                    style={{marginBottom:'1rem'}}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteUserPost(postId)
                                    }}
                            >Delete Post</Button> 
                            <Button variant="outlined"
                                color="primary"
                                style={{marginBottom:"1rem"}}
                                value={this}
                                >Edit post</Button>
                            
                            </>
                            :
                            ''
                        }
                    </div>
    )
}

export default UserPost;