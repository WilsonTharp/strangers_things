import React from 'react';
import Button from '@material-ui/core/Button';
import { FaTimesCircle } from 'react-icons/fa'
import { TextField } from "@material-ui/core";

const FeaturedPost = ({featuredPost, setFeaturedPost}) => {
    return (
        <div className="featured-post">
        <div className="post">
            <FaTimesCircle style={{marginLeft: '99%', color: 'red', fontSize: '1.5rem'}}
                           onClick={() => setFeaturedPost(null)}/>
            <h1 style={{marginTop: '0'}}>{featuredPost.title}</h1>
            <p>{featuredPost.description}</p>
            <h4><b>Price: </b>{featuredPost.price}</h4>
            <h3><b>Seller: </b>{featuredPost.author.username}</h3>
            <h4><b>Location: </b>{featuredPost.location}</h4>
            <div className="post-messages">
                {
                featuredPost.messages.map((message, i) => {
                    return (
                        <div key={i} className="message">
                            <p>{message}</p>
                        </div>
                    )
                })}
            <h3>Message User about this Post</h3>
            <TextField id="standard-basic"
                        label="Message"
                        style={{width: "31.25rem"}} 
                        multiline/>
            <Button variant='outlined'
                    color='primary'
                    style={{marginTop: '1rem', width: '18.75rem'}}>
                    Send Message</Button>
            </div>
        </div>
    </div>
    )
}

export default FeaturedPost;