import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { FaTimesCircle } from 'react-icons/fa'
import { TextField } from "@material-ui/core";
import { postUserMessage } from '../API';

const FeaturedPost = ({featuredPost, setFeaturedPost, isLoggedin}) => {

    const [messageContent, setMessageContent] = useState({content: ''});

    const postId = featuredPost._id;
    const isAuthor = featuredPost.isAuthor;

    function handleChange(event, messageKey) {
        const newState = {...messageContent};
        newState[messageKey] = event.target.value;
        setMessageContent(newState);
    }

    function onSubmit(event) {
        event.preventDefault();
        postUserMessage(postId, messageContent);
        document.getElementById('messenger').value = '';
    }

    return (
        <div className="featured-post">
            <div className="post">
                <FaTimesCircle style={{marginLeft: '99%', color: 'red', fontSize: '1.5rem'}}
                               onClick={() => setFeaturedPost(false)}/>
                <h1 style={{marginTop: '0'}}>{featuredPost.title}</h1>
                <p>{featuredPost.description}</p>
                <h4><b>Price: </b>{featuredPost.price}</h4>
                <h3><b>Seller: </b>{featuredPost.author.username}</h3>
                <h4><b>Location: </b>{featuredPost.location}</h4>
                <h4><b>Willing to deliver: </b>{featuredPost.willDeliver ? `Yes` : `No`}</h4>
                {
                    isLoggedin ?
            
                        isAuthor ?
                            <div className="post-messages">
                                <h3>MESSAGES</h3>
                            </div>
                        :
                            <>
                                <h3>Message User about this Post</h3>
                                <TextField id="messenger"
                                           name="content"
                                           label="Message"
                                           style={{width: "31.25rem"}} 
                                           multiline
                                           onChange={(e) => handleChange(e, 'content')}
                                />
                                <Button variant='outlined'
                                        color='primary'
                                        onClick={onSubmit}
                                        style={{marginTop: '1rem', width: '18.75rem'}}>
                                Send Message</Button>
                            </>
                    :
                        null
            }
            {
                featuredPost.messages ?
                <>
                {
                    featuredPost.messages.map((message, i) => {
                        return (
                            <div key={i} className="message">
                                <p>{message.content}</p>
                                <h5>From User: {message.fromUser.username}</h5>
                            </div>
                        )
                    })}
                </>
                :
                    ''
            }
            </div>
        </div>
    )
}

export default FeaturedPost;