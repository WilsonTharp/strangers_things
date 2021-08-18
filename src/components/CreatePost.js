import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';
import { FaTimesCircle } from 'react-icons/fa'
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import { postUserPost, fetchUserPosts } from '../API';

const CreatePost = ({createPost, setCreatePost, setUserPosts}) => {

    const [post, setPost] = useState({title: '', description: '', price: '', location: '', willDeliver: false});

    function handleInput(event) {
        const postKey = event.target.attributes['name'].value;
        const newState = {...post};
        {postKey === 'willDeliver' ? newState[postKey] = event.target.checked ? true : false : newState[postKey] = event.target.value};
        setPost(newState);
        console.log(post);
    }

    function handleSubmit(event) {
        event.preventDefault();
        postUserPost(post);
        setCreatePost(null);
    }

    return (
        <div className="create-post">
            <div>
                <FaTimesCircle style={{color: 'red', fontSize: '1.5rem', marginLeft:'37rem'}}
                               onClick={() => setCreatePost(null)}/>
                <div>
                <TextField style={{marginTop: '1rem', marginLeft: '3rem', width: '33rem'}}
                       name='title'
                       onChange= {handleInput}
                       variant='outlined'
                       label='Title'
                       color='primary'
                       required/>
                <TextField style={{marginTop: '2rem', marginLeft: '3rem', width: '33rem'}}
                       name='description'
                       onChange= {handleInput}
                       variant='outlined'
                       label='Description'
                       color='primary'
                       multiline
                       required/>
                <TextField style={{marginTop: '2rem', marginLeft: '3rem', width: '33rem'}}
                       name='price'
                       onChange= {handleInput}
                       variant='outlined'
                       label='Price $'
                       color='primary'
                       required/>
                <TextField style={{marginTop: '2rem', marginLeft: '3rem', width: '33rem'}}
                       name='location'
                       onChange= {handleInput}
                       variant='outlined'
                       label='Location'
                       color='primary'/>
                <div>
                    <FormControlLabel control={<Checkbox color='primary'
                                                         name='willDeliver'
                                                         onChange={handleInput}/>}
                                      label='Willing to Deliver?'
                                      style={{marginLeft: '2rem', marginTop: '1rem'}}>
                    </FormControlLabel>
                </div>
                <Button style={{marginTop:'1rem', marginLeft: '3rem', width: '33rem'}}
                        onClick={handleSubmit}
                        variant='outlined'
                        color='primary'>
                        Create Post</Button>
            </div>
            </div>
        </div>
    )
}

export default CreatePost;